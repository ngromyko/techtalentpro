import { forwardRef } from "react";

interface CardProps {
  heading: string;
  description: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ heading, description }, ref) => {
  return (
    <div ref={ref} className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-center">{heading}</h3>
      <p className="text-color-text">{description}</p>
    </div>
  );
});

export default Card;
