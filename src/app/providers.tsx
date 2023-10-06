"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface Props {
  children: ReactNode;
}

function Providers({ children }: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-grey-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Providers;
