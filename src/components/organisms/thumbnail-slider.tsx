import { Game } from "~/models/Game";
import { GridItem2 } from "~/components/molecules/grid-item-2"

type SliderProps = {
    componentRef: React.RefObject<HTMLDivElement>;
    images: Array<Game>;
    selectedIndex: number;
    onSelect: (index: number) => void
    className: string
    isFullScreen: boolean
}

// GridItem2 const and pass tabindex onfocus aria-current -slide and aria-label as props

const ThumbNailSlider: React.FC<SliderProps> = ({componentRef, images, selectedIndex, onSelect, className, isFullScreen}) => {
    
    return (
      <>
        <div
          ref={componentRef}
          className={`z-30 space-x-3 bottom-5 rounded-xl 
            p-8 bg-gray-100/10 dark:bg-gray-800/10 overflow-hidden ${className}`}
        >
          {images?.map((item, index) => (
            <GridItem2
              onSelect={onSelect}
              selectedIndex={selectedIndex}
              key={index}
              index={index}
            >
                <div className={`flex flex flex-row items-center justify-space-between 
                 gap-4 w-full h-full ${isFullScreen ? '' :'pr-4' } overflow-hidden`}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className={`${isFullScreen ? 'w-full rounded-xl' : 'w-1/3 rounded-l-xl'} h-full object-cover overflow-hidden `}
                    />
                    {!isFullScreen && <h3 className="text-start w-2/3 text-4xl font-semibold text-white"> {item.title}</h3>}
                </div>
            </GridItem2>
          ))}
        </div>
      </>
    );
}

export { ThumbNailSlider }
