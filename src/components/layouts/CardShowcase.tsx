import React from "react";
import { SAMPLE_CARDS } from "../../data/appointment.data";
import type { CardConfig, CardShowcaseProps } from "../../types/appointments.interface";
import Card from "./Card";


const CardShowcase: React.FC<CardShowcaseProps> = ({ searchQuery }) => {
  const sampleCards: CardConfig[] = SAMPLE_CARDS;

  const filteredCards = sampleCards.filter(
    (card) =>
      card.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.services.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card, index) => (
          <Card key={index} config={card} />
        ))}
      </div>
    </div>
  );
};

export default CardShowcase;
