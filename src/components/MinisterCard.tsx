
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from 'lucide-react';

interface MinisterCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  bio: string;
  image: string;
}

const MinisterCard = ({ name, title, email, phone, bio, image }: MinisterCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-cinzel font-bold text-gray-900">{name}</h3>
        <p className="text-accent font-medium mb-3">{title}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{bio}</p>
        <div className="space-y-2">
          <a 
            href={`mailto:${email}`} 
            className="flex items-center text-sm text-gray-600 hover:text-primary"
          >
            <Mail className="h-4 w-4 mr-2" /> {email}
          </a>
          <a 
            href={`tel:${phone}`} 
            className="flex items-center text-sm text-gray-600 hover:text-primary"
          >
            <Phone className="h-4 w-4 mr-2" /> {phone}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default MinisterCard;
