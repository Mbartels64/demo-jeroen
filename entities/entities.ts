import { ForwardRefExoticComponent, SVGProps } from "react";

export interface IFeature {
  name: string;
  description: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
}

export interface IFaqs {
  id: number;
  question: string;
  answer: string;
}

export interface IFooter {
  solutions: FooterProps[];
  support: FooterProps[];
  company: FooterProps[];
  legal: FooterProps[];
}

export interface FooterProps {
  name: string;
  href: string;
}
