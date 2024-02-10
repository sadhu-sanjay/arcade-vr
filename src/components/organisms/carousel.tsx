import { useEffect, useState, useRef, useCallback } from "react";
import { ImagePlaceHolder } from "~/components/templates/image-placeholder";

//@ts-expect-error i can't find the types for this
import useSound from "use-sound";
import hoverSound from "/hover.wav";
import { ThumbNailSlider } from "~/components/organisms/thumbnail-slider"

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
    }, 3000);
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
        <SlideShow
            items={images}
            setIsFullScreen={setIsFullScreen}
            currentImageIndex={currentImageIndex}
            />
        <ThumbNailSlider 
            componentRef={gridRef}
            images={images}
            selectedIndex={currentImageIndex}
            onClick={(index) => setCurrentImageIndex(index)}
        />            
         
      </div>
    </>
  );
};

export default ImageSlider;

type SlideShowProps = {
    setIsFullScreen: (flag: boolean) => void;
    items: Array<any>;
    currentImageIndex: number;
}

const SlideShow: React.FC<SlideShowProps> = ({setIsFullScreen, items, currentImageIndex}) => {

return (
    <div
          onClick={() => {
              setIsFullScreen(!isFullScreen);
          }}
          className="relative h-full w-full overflow-hidden bg-gray-100 dark:bg-gray-900"
        >
          {items &&
            items?.map((item: any, index: number) => (
              <div
                key={index}
                className={`duration-700 ease-in-out ${
                  index === currentImageIndex ? "block" : "hidden"
                }`}
              data-carousel-item
              >
                <img 
                    src="/vite.svg"
                    className={"w-full h-full"}
                    />

              </div>
            ))}
          {!items && <ImagePlaceHolder />}
        </div>)
}
