import { useEffect, useState, useRef, useCallback } from "react";
import { ImagePlaceHolder } from "~/components/templates/image-placeholder";

//@ts-expect-error i can't find the types for this
import useSound from "use-sound";
import hoverSound from "/hover.wav";
import { NextButton } from "~/components/molecules/next-button"
import { PrevButton } from "~/components/molecules/prev-button"

type ImageSliderProps = {
  images: any[];
  isFullScreen: boolean;
  setIsFullScreen: (isFullScreen: boolean) => void;
  className: string;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  isFullScreen,
  setIsFullScreen,
  className,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const play = useSound(hoverSound);

  const handleNextClick = useCallback(() => {
    
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);

    const child = gridRef.current?.children[nextIndex] as HTMLElement;
    child.focus();

}, [currentImageIndex, images]);

  const handlePrevClick = useCallback(() => {

    const prevIndex = (currentImageIndex - 1 + images.length) % images.length
    setCurrentImageIndex(prevIndex)

    const child = gridRef.current?.children[prevIndex] as HTMLElement;
    child.focus();

  }, [currentImageIndex, images]);

  /**
   * Handle Keyboard Navigation
   */
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      const items = Array.from(gridRef.current?.children || []);
      const index = items.indexOf(document.activeElement as HTMLElement);
    
      switch (key) {
        case "ArrowUp":
          event.preventDefault();
          handlePrevClick()
          break;
        case "ArrowDown":
          event.preventDefault();
          handleNextClick() 
          break;
        case "ArrowLeft":
          event.preventDefault();
          handlePrevClick()
          break;
        case "ArrowRight":
          event.preventDefault();
          handleNextClick()
          break;
        case "Enter":
          event.preventDefault();
          // eslint-disable-next-line no-case-declarations
          const game = images[index];
          if (game.gameLink) {
            window.open(game.gameLink, "_blank");
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNextClick, handlePrevClick, images]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 30000);
    return () => clearInterval(interval);
  }
  , [handleNextClick]);

  return (
    <>
      <div
        id="default-carousel"
        className={` w-full h-full bg-gray-900 relative`}
        data-carousel="slide"
      >
        <div
          onClick={() => {
              setIsFullScreen(!isFullScreen);
          }}
          className="relative h-full w-full overflow-hidden bg-gray-100 dark:bg-gray-900"
        >
          {images &&
            images?.map((item: any, index: number) => (
              <div
                key={index}
                className={`duration-700 ease-in-out ${
                  index === currentImageIndex ? "block" : "hidden"
                }`}
              data-carousel-item
              >
                <video autoPlay loop playsInline
                  className={`absolute block w-full h-full transition-transform duration-700 ease-in-out transform object-cover
                  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}>
                  <source 
                  src={item.prev ? item.prev : item.image}
                  type="video/webm" />
                  Your browser does not support the video tag.
                </video>

              </div>
            ))}
          {!images && <ImagePlaceHolder />}
        </div>

        <div className={`${images?.length > 1 ? "block" : "hidden"}`}>
          <div 
          ref={gridRef}
          className="absolute z-30 flex space-x-3 bottom-5  
          grid-cols-1 grid-rows-1 gap-2 grid-auto-flow grid-auto-cols-[1fr] grid-auto-rows-[1fr] w-full h-auto px-4 py-4 bg-gray-900/10 dark:bg-gray-800/10 
          overflow-hidden ">
            {images?.map((item, index) => (
              <div
                key={index}
                 // onFocus={play}
                 tabIndex={index + 0}
                style={{outline: "none", backgroundImage: `url(${item.image})`, backgroundSize: "cover"}}
                 className={`focus:shadow-2xl focus:scale-110 focus:border-collapse 
                 focus:shadow-amber-701 focus:border-amber-700 min-h-[131px] 
                 min-w-[250px] shadow-lg  border rounded-xl relative 
                 transform ease-in-out transition-transform duration-400
                 `}
                aria-current={index === currentImageIndex}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
              >
              </div>
            ))}
          </div>
            <PrevButton onClick={handlePrevClick} /> 
          <NextButton onClick={handleNextClick} /> 
        </div>
      </div>
    </>
  );
};

export default ImageSlider;

