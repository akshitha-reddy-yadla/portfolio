import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import React from "react";

// interface Card {
//     title: string;
//     content: string;
// }

// interface CarouselProps {
//     cards: Card[];
//     offset: number;
//     showArrows: boolean;
//     width: string;
//     height: string;
//     margin: string;
// }

export default function CarouselComponent(props) {
    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(undefined); // Change from `null` to `undefined`
    const [cards] = useState(table);

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
