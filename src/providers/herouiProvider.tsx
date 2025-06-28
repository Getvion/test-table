import type { NavigateOptions } from "react-router-dom";

import { HeroUIProvider as Provider } from "@heroui/system";
import { useHref, useNavigate } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export const HeroUIProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  return (
    <Provider navigate={navigate} useHref={useHref}>
      {children}
    </Provider>
  );
};
