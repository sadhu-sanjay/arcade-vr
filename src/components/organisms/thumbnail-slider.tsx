import { Game } from "~/models/Game";
import { GridItem2 } from "~/components/molecules/grid-item-2"

type SliderProps = {
    componentRef: React.RefObject<HTMLDivElement>;
    images: Array<Game>;
    selectedIndex: number;
    onSelect: (index: number) => void
    className: string
}

// GridItem2 const and pass tabindex onfocus aria-current -slide and aria-label as props

const ThumbNailSlider: React.FC<SliderProps> = ({componentRef, images, selectedIndex, onSelect, className}) => {
    
    return (
      <>
        <div
          ref={componentRef}
          className={`z-30 space-x-3 bottom-5 
            px-4 py-4 bg-gray-100/10 dark:bg-gray-800/10 overflow-hidden ${className}`}
        >
          {images?.map((item, index) => (
            <GridItem2
              onSelect={onSelect}
              selectedIndex={selectedIndex}
              key={index}
              index={index}
            >
                <div className="flex flex flex-row items-center justify-space-between
                 gap-4 w-full h-full pr-4 overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-1/3 h-full object-cover overflow-hidden rounded-xl shadow-lg border-2 border-gray-100/10 dark:border-gray-800/10"
                    />
                    <h3 className="w-2/3 text-5xl font-bold text-white">
                        {item.title}
                    </h3>
                </div>
            </GridItem2>
          ))}
        </div>
      </>
    );
}

export { ThumbNailSlider }
