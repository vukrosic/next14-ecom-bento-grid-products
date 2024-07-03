import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

const items = [
    {
        title: "The Dawn of Innovation",
        description: "$54.99",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        url: "/prod1.jpg",
    },
    {
        title: "The Digital Revolution",
        description: "$77.99",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        url: "/prod2.jpg",
    },
    {
        title: "The Art of Design",
        description: "$44.99",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        url: "/prod3.jpg",
    },
    {
        title: "The Power of Communication",
        description: "Understand the impact of effective communication in our lives.",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        url: "/prod4.jpg",
    },
    {
        title: "The Pursuit of Knowledge",
        description: "$54.99",
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
        url: "/prod5.jpg",
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
        url: "/prod6.jpg",
    },
    {
        title: "The Spirit of Adventure",
        description: "$54.99",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
        url: "/prod7.jpg",
    },
];

export default function BentoGridDemo() {
    return (
        <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={
                        <div className="aspect-video w-full overflow-hidden rounded-xl">
                            <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                    }
                    icon={item.icon}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}

