import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col h-screen">
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
    </div>
  );
};
