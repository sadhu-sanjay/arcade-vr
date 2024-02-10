import { useEffect, useState, useRef, useCallback } from "react";
import { ImagePlaceHolder } from "~/components/templates/image-placeholder";

//@ts-expect-error i can't find the types for this
import useSound from "use-sound";
import hoverSound from "/hover.wav";
import { ThumbNailSlider } from "~/components/organisms/thumbnail-slider"
import { ImageSlider } from "~/components/organisms/image-slide"
import { SlideShowLayout } from "~/components/layouts/slide-show-layout"


type MainMenuProps = {
  images: any[];
  isFullScreen: boolean;
  setIsFullScreen: (isFullScreen: boolean) => void;
  className: string;
};

const MainMenu: React.FC<MainMenuProps> = ({
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
        className={`w-full h-full bg-gray-900 relative ${isFullScreen ? '' : 'flex flex-row-reverse gap-4 p-8 border-amber-700 border-4'} `}
        data-carousel="slide"
      >
        <ImageSlider
            items={images}
            setIsFullScreen={setIsFullScreen}
            currentImageIndex={currentImageIndex}
            className={`${isFullScreen ? "w-full " : "w-1/2"}`}
            />
        <ThumbNailSlider 
            componentRef={gridRef}
            images={images}
            selectedIndex={currentImageIndex}
            onSelect={(index) => setCurrentImageIndex(index)}
            className={`${isFullScreen ? "flex flex-row gap-4 w-full absolute p-4" : 
            "w-1/2 flex flex-col gap-4 p-4" }`}
        />  

      </div>
    </>
  );
};

export default MainMenu

    // {Games.map((Game, index) => (
    //             <div
    //             key={Game.id}
    //             onFocus={play}
    //             tabIndex={index + 0}
    //             className="focus:shadow-2xl shadow-lg focus:scale-105 transition-transform duration-100 border
    //             ease-in-out transform focus:border-collapse  focus:shadow-amber-701 focus:border-amber-700
    //             rounded-3xl relative shadow-gray-500 shadow-border-gray-500"
    //             style={{ outline: "none" }}
    //             >
    //             <img
    //             className="h-auto max-w-full object-contain rounded-3xl"
    //             // src="https://flowbite.s2.amazonaws.com/docs/gallery/square/image.jpg"
    //             src={Game.image}
    //             alt={Game.name}
    //             />
    //             </div>
    //             ))}
    // <div className="flex flex-col items-center justify-center w-full h-full">
    //     <h1 className="text-4xl font-bold">Main Menu</h1>
    //     <div className="flex flex-col items-center justify-center w-full h-full">
    //     <button className="w-1/2 h-12 my-2 bg-blue-500 text-white rounded-lg">Start Game</button>
    //     <button className="w-1/2 h-12 my-2 bg-blue-500 text-white rounded-lg">Options</button>
    //     <button className="w-1/2 h-12 my-2 bg-blue-500 text-white rounded-lg">About</button>
    //     </div>
    //     </div>
    //