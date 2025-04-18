
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTechBackgroundProps {
  className?: string;
}

const AnimatedTechBackground: React.FC<AnimatedTechBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Circuit node properties
    const nodes: {x: number, y: number, radius: number, connections: number[]}[] = [];
    const nodeCount = Math.floor(canvas.width * canvas.height / 25000);
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        connections: []
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionCount; j++) {
        const targetIdx = Math.floor(Math.random() * nodes.length);
        if (targetIdx !== i && !node.connections.includes(targetIdx)) {
          node.connections.push(targetIdx);
        }
      }
    });

    // Animation variables
    let frame = 0;
    
    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(255, 119, 0, 0.2)';
      
      nodes.forEach((node, i) => {
        node.connections.forEach(targetIdx => {
          const target = nodes[targetIdx];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
          
          // Animate data flow
          if (frame % 100 === 0) {
            const pulseSize = 2;
            const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
            gradient.addColorStop(0, 'rgba(255, 119, 0, 0)');
            gradient.addColorStop(0.5, 'rgba(255, 119, 0, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 119, 0, 0)');
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = pulseSize;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
            ctx.strokeStyle = 'rgba(255, 119, 0, 0.2)';
            ctx.lineWidth = 0.5;
          }
        });
      });
      
      // Draw nodes
      nodes.forEach(node => {
        ctx.fillStyle = 'rgba(0, 170, 170, 0.8)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      frame++;
      requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 w-full h-full z-0', className)}
    />
  );
};

export default AnimatedTechBackground;
