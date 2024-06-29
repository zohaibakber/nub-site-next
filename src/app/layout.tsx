import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-probider";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/grid-patter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DispatchNub",
  description:
    "A one stop platform for dispatching companies to manage team, entities and much more with integrations to popular products like openphone.",
  keywords: ["dispatch", "dispatching", "dispatchnub", "openphone"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <GridPattern
            width={50}
            height={50}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]",
              "pointer-events-none fixed left-0 top-0 -z-10 h-full w-full",
            )}
          />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
