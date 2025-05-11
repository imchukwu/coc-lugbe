
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from 'lucide-react';

interface CommitteeCardProps {
  name: string;
  chairman: string;
  description: string;
  email: string;
  image: string;
}

const CommitteeCard = ({ name, chairman, description, email, image }: CommitteeCardProps) => {
  return (
    <Card className="committee-card overflow-hidden h-full flex flex-col">
      <div className="h-40 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-5 flex-grow">
        <h3 className="text-xl font-cinzel font-bold text-gray-900">{name}</h3>
        <p className="text-primary font-medium mb-2">{chairman}, Chairman</p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a 
          href={`mailto:${email}`} 
          className="flex items-center text-sm text-gray-600 hover:text-primary"
        >
          <Mail className="h-4 w-4 mr-2" /> {email}
        </a>
      </CardContent>
    </Card>
  );
};

export default CommitteeCard;
