import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import React from "react";

interface Card {
    title: string;
    content: string;
}

interface CarouselProps {
    cards: Card[];
    offset: number;
    showArrows: boolean;
    width: string;
    height: string;
    margin: string;
}

export default function CarouselComponent(props: CarouselProps) {
    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState<number>(2);
    const [showArrows, setShowArrows] = useState<boolean>(false);
    const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined); // Change from `null` to `undefined`
    const [cards] = useState<Card[]>(table);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    return (
        <div
            style={{ width: props.width, height: props.height, margin: props.margin }}
        >
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
            />
        </div>
    );
}
