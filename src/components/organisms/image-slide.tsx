import { ImagePlaceHolder } from "~/components/templates/image-placeholder"
import { Game } from "~/models/Game"
import React from "react"

type ImageSliderProps = {
    items: Array<Game>;
    currentImageIndex: number;
    className: string
    isFullScreen: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({items, currentImageIndex, className }) => {

return (
  <div
    className={`bg-red-900 relative h-full w-full overflow-hidden rounded-xl ${className}`}
  >
    {items &&
      items?.map((game: Game, index: number) => (
        <div
          key={index}
          className={`transform transition-opacity w-full h-full absolute duration-250 ease-in-out `}
          data-carousel-item
        >
          {index === currentImageIndex && (
            <video autoPlay playsInline className={` w-full h-full object-cover `}>
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
