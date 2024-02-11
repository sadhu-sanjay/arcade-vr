import { Game } from "~/models/Game";

type SliderProps = {
    componentRef: React.RefObject<HTMLDivElement>;
    images: Array<Game>;
    currentImageIndex: number;
    onSelect: (index: number) => void
    className: string
}
const ThumbNailSlider: React.FC<SliderProps> = ({componentRef, images, currentImageIndex, onSelect, className}) => {
    
    return (
        <>
          <div 
          ref={componentRef}
          className={`z-30 space-x-3 bottom-5 
            px-4 py-4 bg-gray-100/10 dark:bg-gray-800/10 overflow-hidden ${className}`}>
            {images?.map((item, index) => (
              <div
                key={index}
                 // onFocus={play}
                 tabIndex={index + 0}
                style={{outline: "none", backgroundImage: `url(${item.image})`, backgroundSize: "cover"}}
                // style={{outline: "none", backgroundImage: `url(http://localhost:5173/space.gif)`, backgroundSize: "cover"}}
                 className={`focus:shadow-2xl focus:scale-105 focus:border-collapse 
                 focus:shadow-amber-701 focus:border-amber-700 
                  min-h-[131px] min-w-[250px] 
                 shadow-lg  border rounded-xl relative 
                 transform ease-in-out transition-transform duration-400
                 `}
                aria-current={index === currentImageIndex}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(index)
                }}
              >
              </div>
            ))}
          </div>
        </>)

}

export { ThumbNailSlider }
