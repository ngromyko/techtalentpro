import { ReactNode } from "react";

const Container = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`container mx-auto mb-4 px-6 ${className ? className : ""}`}>{children}</div>
);

export default Container;
