import { cn } from "@/lib/utils";
import type React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24", className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
