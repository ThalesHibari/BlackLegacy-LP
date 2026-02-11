import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import Figma from "../../logos/figma";
import React from "../../logos/react";
import ShadcnUi from "../../logos/shadcn-ui";
import Tailwind from "../../logos/tailwind";
import TypeScript from "../../logos/typescript";
import { Badge } from "../../ui/badge";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Quem já vem construindo o sucesso com a gente",
  logos = [
    <Logo key="figma" image={Figma} name="Figma" />,
    <Logo key="react" image={React} name="React" />,
    <Logo
      key="typescript"
      image={TypeScript}
      name="TypeScript"
    />,
    <Logo
      key="shadcn"
      image={ShadcnUi}
      name="Shadcn/ui"
      badge="Novo"
    />,
    <Logo key="tailwind" image={Tailwind} name="Tailwind" />,
  ],
  className,
}: LogosProps) {
  return (
    <div className="max-w-container mx-auto flex flex-col items-center gap-8 pt-24 text-center">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
      </div>
      {logos !== false && logos.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos}
        </div>
      )}
    </div>
  );
}
