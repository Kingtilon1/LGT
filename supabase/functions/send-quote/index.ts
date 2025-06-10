
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  projectType: string;
  servicesNeeded: string[];
  budget: string;
  timeline: string;
  details: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const quoteData: QuoteRequest = await req.json();
    
    // Format services as a bulleted list
    const servicesList = quoteData.servicesNeeded
      .map(service => `• ${service}`)
      .join('\n');

    // Send email to business
    const businessEmailResponse = await resend.emails.send({
      from: "LG Technical <onboarding@resend.dev>",
      to: ["bobbtilon@gmail.com"],
      subject: `New Quote Request from ${quoteData.name}`,
      html: `
        <h1>New Quote Request</h1>
        <h2>Contact Information:</h2>
        <p><strong>Name:</strong> ${quoteData.name}</p>
        <p><strong>Email:</strong> ${quoteData.email}</p>
        <p><strong>Phone:</strong> ${quoteData.phone}</p>
        
        <h2>Project Location:</h2>
        <p><strong>Address:</strong> ${quoteData.address}</p>
        <p><strong>City:</strong> ${quoteData.city}</p>
        
        <h2>Project Details:</h2>
        <p><strong>Project Type:</strong> ${quoteData.projectType}</p>
        <p><strong>Services Needed:</strong></p>
        <pre>${servicesList}</pre>
        <p><strong>Budget Range:</strong> ${quoteData.budget}</p>
        <p><strong>Timeline:</strong> ${quoteData.timeline}</p>
        
        <h2>Additional Details:</h2>
        <p>${quoteData.details}</p>
      `,
    });

    // Send confirmation email to the customer
    const customerEmailResponse = await resend.emails.send({
      from: "LG Technical <onboarding@resend.dev>",
      to: [quoteData.email],
      subject: "We've Received Your Quote Request",
      html: `
        <h1>Thank you for your quote request!</h1>
        <p>Dear ${quoteData.name},</p>
        <p>We have received your quote request and our team will review it shortly. We typically respond within 1-2 business days.</p>
        <p>Here's a summary of your request:</p>
        <ul>
          <li>Project Type: ${quoteData.projectType}</li>
          <li>Services Requested: ${quoteData.servicesNeeded.join(", ")}</li>
          <li>Preferred Timeline: ${quoteData.timeline}</li>
        </ul>
        <p>If you have any immediate questions, feel free to call us at:</p>
        <p>(347) 595-4221 or (848) 384-3997</p>
        <p>Best regards,<br>The LG Technical Team</p>
      `,
    });

    console.log("Business Email Response:", businessEmailResponse);
    console.log("Customer Email Response:", customerEmailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      businessEmailStatus: businessEmailResponse.id,
      customerEmailStatus: customerEmailResponse.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
