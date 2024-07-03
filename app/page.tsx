"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { IconStar } from "@tabler/icons-react";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Elegant Pink Dress", price: 89.99, rating: 4.5, image: "/prod1.jpg" },
  { id: 2, name: "Rose Gold Watch", price: 129.99, rating: 4.8, image: "/prod2.jpg" },
  { id: 3, name: "Pink Wireless Earbuds", price: 79.99, rating: 4.2, image: "/prod3.jpg" },
  { id: 4, name: "Blush Makeup Palette", price: 34.99, rating: 4.7, image: "/prod4.jpg" },
  { id: 5, name: "Pink Leather Handbag", price: 149.99, rating: 4.6, image: "/prod5.jpg" },
  { id: 6, name: "Flamingo Phone Case", price: 19.99, rating: 4.3, image: "/prod6.jpg" },
  { id: 7, name: "Pink Fitness Tracker", price: 59.99, rating: 4.4, image: "/prod7.jpg" },
];

const ProductGrid3D = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-gray-100">
      {products.map((product) => (
        <CardContainer key={product.id} className="inter-var cursor-pointer">
          <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
            <CardItem
              translateZ="50"
              className="text-lg font-bold text-neutral-600 dark:text-white"
            >
              {product.name}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
            >
              ${product.price.toFixed(2)}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl group-hover/card:shadow-xl"
                  alt={product.name}
                />
              </div>
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                className="flex items-center px-3 py-1 rounded-xl text-sm font-normal dark:text-white"
              >
                <IconStar className="h-4 w-4 text-yellow-400 mr-1" />
                <span>{product.rating}</span>
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-3 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
              >
                Add to Cart
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

export default ProductGrid3D;