"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 pt-12 lg:pt-20"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={childVariants}
        className="-z-10 text-center text-4xl font-bold leading-[1.1] tracking-tighter md:text-5xl lg:text-7xl"
      >
        Dispatch with 21<sup>st</sup> century tools
      </motion.h1>
      <motion.p
        variants={childVariants}
        className="text-balance text-center text-primary/70 lg:max-w-[45rem] lg:text-xl"
      >
        Nub makes it easy to manage your team, entities, and operations in one
        place. It&apos;s the only tool you need to run your business.
      </motion.p>
      <motion.div variants={childVariants} className="space-x-4">
        <Button size={"sm"} asChild>
          <a href="https://app.dispatchnub.com">Start Dispatching </a>
        </Button>
        <Button size={"sm"} variant={"secondary"} asChild>
          <Link prefetch={false} href="/contact">
            Contact Us
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
