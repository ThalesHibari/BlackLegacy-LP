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
import { Badge } from "../../ui/badge";
import { MagicCard } from "@/components/ui/magic-card"
import Logo from "@/components/ui/logo";
import Logos from "../logos/default";


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

export default function About({
    title = "Como vamos te levar ao sucesso!",
    description = "Nos como Black Legacy temos tudo que você precisa para impactar o sucesso de nossos clientes",
    badge = (
        <Badge variant="outline" className="border-brand/30 text-brand">
            Quem somos
        </Badge>
    ),
    items = [
        {
            title: "Nossa metodologia",
            description: "O Legacy Framework, vai além do clique. Atuamos na interseção entre a psicologia do consumidor e a ciência de dados, nós rastreamos, analisamos e executamos.",
            icon: <ScanFaceIcon className="size-8 stroke-1" />,
        },
        {
            title: "Liderando o mercado",
            description: "Em um mercado saturado de amadores, a Black Legacy se posiciona como o braço direito de empresas que buscam escala agressiva e sustentável.",
            icon: <MonitorSmartphoneIcon className="size-8 stroke-1" />,
        },
        {
            title: "Até onde ninguém vai",
            description: "Estamos prontos para construir seu sucesso de ponta a ponta, dês da estratégia até soluções de captação. ",
            icon: <EclipseIcon className="size-8 stroke-1" />,
        },
        {
            title: "Liderada por Vinicius Alves",
            description: "Visionário com mais de 10 anos de mercado e múltiplos 7 dígitos gerenciados. A visão do nosso CEO é clara: tráfego sem dados é apenas custo; com inteligência, é o maior ativo da sua empresa.",
            icon: <BlocksIcon className="size-8 stroke-1" />,
        },
        {
            title: "Até onde ninguém vai",
            description: "Estamos prontos para construir seu sucesso de ponta a ponta, dês da estratégia até soluções de captação.",
            icon: <FastForwardIcon className="size-8 stroke-1" />,
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
                                <Item key={index} className="flex flex-col gap-2">
                                    <ItemTitle className="flex flex-col gap-2">
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
            <Logos />
        </Section >
    );
}
