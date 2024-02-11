import { ImagePlaceHolder } from "~/components/templates/image-placeholder"
import { Game } from "~/models/Game"
import React from "react"

type ImageSliderProps = {
    items: Array<Game>;
    currentImageIndex: number;
    className: string
}

const ImageSlider: React.FC<ImageSliderProps> = ({items, currentImageIndex, className}) => {


return (
  <div
    className={`relative h-full overflow-hidden bg-gray-100 dark:bg-gray-900 ${className}`}
  >
    {items &&
      items?.map((game: Game, index: number) => (
        <div
          key={index}
          className={`duration-500 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          data-carousel-item
        >
          {index === currentImageIndex && (
            <video autoPlay playsInline className={"w-full h-full"}>
              <source src={game.prev || game.image} type="video/webm" />
            </video>
          )}
          {/* <img src="/vite.svg" className={"w-full h-full"} /> */}
        </div>
      ))}
    {!items && <ImagePlaceHolder />}
  </div>
);
}

export { ImageSlider }
