"use client";

import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { MagicCard } from "@/components/ui/magic-card"


interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  description?: string;
  badge?: ReactNode | false;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "O Ecossistema de Performance",
  description = "A Black Legacy tem tudo que você precisa para impactar o sucesso do seu negócio",
  badge = (
    <Badge variant="outline" className="border-brand/30 text-brand">
      Serviços
    </Badge>
  ),
  items = [
    {
      title: "Tráfego de Alta Performance",
      description: "Especialistas certificados dominando as fontes de tráfego (Google, Meta, TikTok, LinkedIn) para atrair o cliente qualificado, não apenas curiosos.",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Tracking & Business Intelligence ",
      description: "O fim da cegueira de dados. Implementamos rastreamento avançado (API de Conversões, Server-side) para que você saiba exatamente o retorno de cada centavo investido.",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Desenvolvimento On-Demand",
      description:
        "Sistemas exclusivos e automações personalizadas para gargalos específicos da sua operação. Se a ferramenta não existe, nós criamos.",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Creative Performance",
      description: "Não criamos apenas 'artes bonitas', desenvolvemos ativos de conversão. Nossa equipe de Design e Motion produz criativos validados por testes A/B rigorosos.",
      icon: <BlocksIcon className="size-5 stroke-1" />,
    },
    {
      title: "CRO & Engenharia de Funis",
      description: "Tráfego caro exige páginas que convertem. Analisamos a usabilidade das suas Landing Pages e Checkouts (mapas de calor, velocidade, copy) para eliminar fricçõe.",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Gestão de LTV & CRM",
      description: "O lucro real não está na primeira venda, mas na recorrência. Estruturamos funis de retenção, remarketing e programas de fidelidade para transformar clientes únicos em receita recorrente.",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  const { theme } = useTheme();

  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <div className="flex flex-col items-center gap-4">
          {badge !== false && badge}
          <h2 className="max-w-[1200px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[1200px] font-normal text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
        </div>
        {items !== false && items.length > 0 && (
          <div className="w-full grid auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {items.map((item, index) => (
              <MagicCard key={index} className="w-full rounded-md" gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                <Item key={index}>
                  <ItemTitle className="flex items-center gap-2">
                    <ItemIcon>{item.icon}</ItemIcon>
                    {item.title}
                  </ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </Item>
              </MagicCard>
            ))}
          </div>
        )}
      </div>
    </Section >
  );
}
