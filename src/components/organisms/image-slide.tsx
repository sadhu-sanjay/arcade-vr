import { ImagePlaceHolder } from "~/components/templates/image-placeholder"
import { Game } from "~/models/Game"
import React from "react"

type ImageSliderProps = {
    items: Array<Game>;
    currentImageIndex: number;
    className: string
    isFullScreen: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({items, currentImageIndex, className, isFullScreen}) => {


return (
  <div
    className={`relative h-full overflow-hidden ${className}`}
  >
    {items &&
      items?.map((game: Game, index: number) => (
        <div
          key={index}
          className={`transition-opacity w-full h-full absolute  duration-500 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          data-carousel-item
        >
          {index === currentImageIndex && (
            <video autoPlay playsInline className={`object-cover w-full h-full `}>
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
