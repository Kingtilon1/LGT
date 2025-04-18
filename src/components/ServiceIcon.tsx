
import React from 'react';
import { 
  Camera, Lock, Fingerprint, Cable, Home, Wrench, 
  Radio, Network, Phone, PlugZap, FileBarChart
} from 'lucide-react';

type ServiceIconName = 
  | 'camera' 
  | 'lock' 
  | 'fingerprint' 
  | 'cable' 
  | 'home' 
  | 'wrench' 
  | 'radio'
  | 'network'
  | 'phone'
  | 'plug'
  | 'blueprint';

interface ServiceIconProps {
  name: ServiceIconName;
  size?: number;
  className?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ 
  name, 
  size = 24,
  className = ""
}) => {
  const iconProps = { size, className };
  
  switch (name) {
    case 'camera':
      return <Camera {...iconProps} />;
    case 'lock':
      return <Lock {...iconProps} />;
    case 'fingerprint':
      return <Fingerprint {...iconProps} />;
    case 'cable':
      return <Cable {...iconProps} />;
    case 'home':
      return <Home {...iconProps} />;
    case 'wrench':
      return <Wrench {...iconProps} />;
    case 'radio':
      return <Radio {...iconProps} />;
    case 'network':
      return <Network {...iconProps} />;
    case 'phone':
      return <Phone {...iconProps} />;
    case 'plug':
      return <PlugZap {...iconProps} />;
    case 'blueprint':
      return <FileBarChart {...iconProps} />;
    default:
      return <Cable {...iconProps} />;
  }
};

export default ServiceIcon;
