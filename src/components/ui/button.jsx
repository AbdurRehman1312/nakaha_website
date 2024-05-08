import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "border py-2 px-5 w-full  rounded-full  hover:transition hover:ease-in-out hover:duration-500 bg-primary text-white lg:bg-third lg:text-primary border-primary lg:hover:bg-primary lg:hover:text-white lg:hover:border text-lg",
)

const Buttons = React.forwardRef(({ className,  asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({  className }))}
      ref={ref}
      {...props} />)
  );
})
Buttons.displayName = "Button"

export { Buttons, buttonVariants }
