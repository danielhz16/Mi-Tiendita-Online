import { ReactNode } from "react";

export interface RouteProtectorProps {
    role: number;
    redirect: string;
    component: ReactNode | null ;
  }
  