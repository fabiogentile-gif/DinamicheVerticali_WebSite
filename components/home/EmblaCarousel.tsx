"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [
      Autoplay({
        delay: 6000,          // ogni 3 secondi
        stopOnInteraction: false, // continua anche dopo swipe
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* container */}
        <div className="flex">
          <div className="min-w-full flex justify-center items-center bg-red-300 h-64">
            Slide 1
          </div>
          <div className="min-w-full flex justify-center items-center bg-blue-300 h-64">
            Slide 2
          </div>
          <div className="min-w-full flex justify-center items-center bg-green-300 h-64">
            Slide 3
          </div>
        </div>
      </div>

      {/* controlli */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1"
      >
        Prev
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1"
      >
        Next
      </button>
    </div>
  );
}