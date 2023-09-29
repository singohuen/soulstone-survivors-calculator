import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const H1 = forwardRef<ElementRef<"h1">, ComponentPropsWithoutRef<"h1">>(
  ({ className, children, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        cva("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl")(),
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
);

export const H2 = forwardRef<ElementRef<"h2">, ComponentPropsWithoutRef<"h2">>(
  ({ className, children, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        cva(
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        )(),
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
);

export const H3 = forwardRef<ElementRef<"h3">, ComponentPropsWithoutRef<"h3">>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        cva("scroll-m-20 text-2xl font-semibold tracking-tight")(),
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
);

export const P = forwardRef<ElementRef<"p">, ComponentPropsWithoutRef<"p">>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(cva("leading-7 [&:not(:first-child)]:mt-6")(), className)}
      {...props}
    >
      {children}
    </p>
  )
);

export const Large = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cva("text-lg font-semibold")(), className)}
    {...props}
  >
    {children}
  </div>
));

export const Muted = forwardRef<ElementRef<"p">, ComponentPropsWithoutRef<"p">>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(cva("text-sm text-muted-foreground")(), className)}
      {...props}
    >
      {children}
    </p>
  )
);
