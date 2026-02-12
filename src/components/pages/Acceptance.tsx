import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { Button } from "../ui/button";

const carouselItems = [
  {
    image: "/assets/chibi.jpg",
    text: "Wear your pink or violet outfits 💕",
  },
  {
    image: "/assets/water-bottle.jpg",
    text: "Bring water to stay hydrated 💧",
  },
  {
    image: "/assets/umbrella.jpg",
    text: "Bring your umbrella 🌂",
  },
  {
    image: "/assets/cards.jpg",
    text: "Bring your creative placards ✨",
  },
];

const Acceptance = () => {
  const [api, setApi] = useState<any>(null);
  const [seenSlides, setSeenSlides] = useState<Set<number>>(new Set());
  const [hasSeenAll, setHasSeenAll] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      setSeenSlides((prev) => {
        const updated = new Set(prev);
        updated.add(selectedIndex);

        if (updated.size === carouselItems.length) {
          setHasSeenAll(true);
        }

        return updated;
      });
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (showFinalPage) {
    return (
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-md font-bold text-[#aa4d69] font-pix">
          See you on the One Billion Rising dance protest ❤️
        </p>
        <img src="assets/happy.jpg" className="h-70 w-70" />

        <p className="text-md font-bold text-[#aa4d69] font-pix">
          🗓️ February 14, 2026
        </p>
        <p className="text-md font-bold text-[#aa4d69] font-pix">🕘 9:30 AM</p>
        <p className="text-md font-bold text-[#aa4d69] font-pix">
          📍 Freedom Park, Roxas Avenue, Davao City
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold text-center font-pix text-[#aa4d69]">
        FEB 14 Starter Pack
      </h1>

      <Carousel
        setApi={setApi}
        opts={{ loop: true }} // ✅ makes it repeatable
        className="w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw]"
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <Card className="h-105 sm:h-120 md:h-130">
                  <CardContent className="flex flex-col items-center justify-between h-full p-6">
                    <img
                      src={item.image}
                      alt={`slide-${index}`}
                      className="h-[70%] w-full object-contain rounded-lg"
                    />
                    <p className="text-center text-lg sm:text-xl font-pix text-[#aa4d69]">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* ✅ Show button only after all slides seen */}
      {hasSeenAll && (
        <Button
          onClick={() => setShowFinalPage(true)}
          className="bg-pink-400 hover:bg-pink-500 text-white mt-4 font-pix"
        >
          I'm Ready 💖
        </Button>
      )}
    </div>
  );
};

export default Acceptance;
