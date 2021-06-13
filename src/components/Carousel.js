import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: './assets/images/maxwell.jpg',
    altText: 'Maxwell',
    name: "Maxwell",
    caption: 'Outstanding service!! Highly recommended! Will definitely use again and again!.'
  },
  {
    src: './assets/images/pets.jpg',
    altText: 'Elvis, Ella, Bruno, Donatello',
    name: "Elvis, Ella, Bruno, Donatello",
    caption: 'Updated us everyday with text messages and pictures. Pets were super happy!.'
  },
  {
    src: './assets/images/leroy.jpg',
    altText: 'Leroy',
    name: "Leroy",
    caption: 'I had a wonderful experience with pet concierge! I couldn’t ask for a more wonderful experience!.'
  }
];

const CarouselMain = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
        <CarouselCaption className="carousel-caption" captionText={item.caption} captionHeader={item.name} />
      </CarouselItem>
    );
  });

  return (
    <Carousel className="carousel"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselMain;