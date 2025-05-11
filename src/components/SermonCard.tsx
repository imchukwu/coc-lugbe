
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

interface SermonCardProps {
  title: string;
  preacher: string;
  date: string;
  category: string;
  description: string;
  downloadUrl: string;
}

const SermonCard = ({ title, preacher, date, category, description, downloadUrl }: SermonCardProps) => {
  return (
    <Card className="sermon-card h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="mb-4">
          <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded">
            {category}
          </span>
          <span className="inline-block ml-2 text-xs text-gray-500">{date}</span>
        </div>
        <h3 className="text-lg font-cinzel font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">By {preacher}</p>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" className="w-full" asChild>
          <a href={downloadUrl} download>
            <ArrowDown className="mr-2 h-4 w-4" />
            Download Sermon
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SermonCard;
