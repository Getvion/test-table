import { Link } from "@heroui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col h-screen">
      <nav className="flex gap-4 pt-4 px-4">
        <Link href="/">Таблица</Link>
        <Link href="/graph">График</Link>
      </nav>
      <main className="container mx-auto max-w-7xl px-4 flex-grow pt-4">
        {children}
      </main>
    </div>
  );
};
