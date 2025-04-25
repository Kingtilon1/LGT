// For Node.js environment
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const EMAIL_JS_SERVICE_ID = process.env.EMAIL_JS_SERVICE_ID || "service_w5sesos";
const EMAIL_JS_USER_ID = process.env.EMAIL_JS_USER_ID;
const EMAIL_JS_TEMPLATE_ID = process.env.EMAIL_JS_TEMPLATE_ID;
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || "bobbtilon@gmail.com";

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

app.post('/api/send-quote', async (req, res) => {
  try {
    const quoteData: QuoteRequest = req.body;
    
    // Format services as a bulleted list
    const servicesList = quoteData.servicesNeeded
      .map(service => `• ${service}`)
      .join('\n');
    
    // Format message for the template
    const message = `
Project Type: ${quoteData.projectType}
Address: ${quoteData.address}, ${quoteData.city}
Phone: ${quoteData.phone}
Email: ${quoteData.email}
Services Needed: 
${servicesList}
Budget: ${quoteData.budget}
Timeline: ${quoteData.timeline}

Additional Details:
${quoteData.details}
    `;

    // Prepare the business email data
    const businessEmailData = {
      service_id: EMAIL_JS_SERVICE_ID,
      template_id: EMAIL_JS_TEMPLATE_ID,
      user_id: EMAIL_JS_USER_ID,
      template_params: {
        // Template specific fields
        name: quoteData.name,
        time: new Date().toLocaleString(),
        message: message,
        
        // Email routing fields
        to_email: BUSINESS_EMAIL,
        from_name: quoteData.name,
        from_email: quoteData.email,
        reply_to: quoteData.email,
        subject: `New Quote Request from ${quoteData.name}`
      }
    };

    // Also prepare a confirmation email to the customer
    const customerEmailData = {
      service_id: EMAIL_JS_SERVICE_ID,
      template_id: EMAIL_JS_TEMPLATE_ID, // You might want a separate template for this
      user_id: EMAIL_JS_USER_ID,
      template_params: {
        name: "LG Technical",
        time: new Date().toLocaleString(),
        message: `
Thank you for your quote request! We have received your information and our team will review it shortly. We typically respond within 1-2 business days.

Here's a summary of your request:
- Project Type: ${quoteData.projectType}
- Services Requested: ${quoteData.servicesNeeded.join(", ")}
- Preferred Timeline: ${quoteData.timeline}

If you have any immediate questions, feel free to call us at:
(347) 595-4221 or (929) 743-2705

Best regards,
The LG Technical Team
        `,
        to_email: quoteData.email,
        from_name: "LG Technical",
        from_email: BUSINESS_EMAIL,
        reply_to: BUSINESS_EMAIL,
        subject: "We've Received Your Quote Request"
      }
    };

    // Send business notification email
    const businessEmailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(businessEmailData)
    });
    
    if (!businessEmailResponse.ok) {
      throw new Error(`EmailJS business email error: ${await businessEmailResponse.text()}`);
    }

    // Send customer confirmation email
    const customerEmailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customerEmailData)
    });
    
    if (!customerEmailResponse.ok) {
      throw new Error(`EmailJS customer email error: ${await customerEmailResponse.text()}`);
    }

    console.log("Business Email Response:", businessEmailResponse.status);
    console.log("Customer Email Response:", customerEmailResponse.status);

    res.status(200).json({ 
      success: true, 
      businessEmailStatus: businessEmailResponse.status,
      customerEmailStatus: customerEmailResponse.status 
    });
  } catch (error: any) {
    console.error("Error in send-quote function:", error);
    res.status(500).json({ 
      error: error.message,
      success: false 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});