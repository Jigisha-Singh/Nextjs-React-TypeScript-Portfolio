import { cn } from "@/lib/utils";
import type React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle, className, ...props }) => {
  return (
    <div className="mb-12 sm:mb-16 text-center">
      {subtitle && (
        <p className="text-base font-semibold uppercase tracking-wider text-primary mb-2">
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-headline",
          className
        )}
        {...props}
      >
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
