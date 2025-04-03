import { forwardRef } from "react";

interface CardProps {
  heading: string;
  description: string;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ heading, description, className }, ref) => {
  return (
    <div ref={ref} className={`bg-white p-6 rounded-lg shadow-lg ${className || ""}`}>
      <h3 className="text-xl text-primary-blue font-bold mb-4 text-center">{heading}</h3>
      <p className="text-color-text">{description}</p>
    </div>
  );
});

export default Card;
