
type SliderProps = {
    componentRef: any;
    images: Array<any>;
    currentImageIndex: number;
    onSelect: (index: number) => void
}
const ThumbNailSlider: React.FC<SliderProps> = ({componentRef, images, currentImageIndex, onSelect}) => {
    
    return (<div className={``}>
          <div 
          ref={componentRef}
          className="absolute z-30 flex space-x-3 bottom-5  
          grid-cols-1 grid-rows-1 gap-2 grid-auto-flow grid-auto-cols-[1fr] grid-auto-rows-[1fr] w-full h-auto px-4 py-4 bg-gray-900/10 dark:bg-gray-800/10 
          overflow-hidden ">
            {images?.map((item, index) => (
              <div
                key={index}
                 // onFocus={play}
                 tabIndex={index + 0}
                // style={{outline: "none", backgroundImage: `url(${item.image})`, backgroundSize: "cover"}}
                style={{outline: "none", backgroundImage: `url(http://localhost:5173/space.gif)`, backgroundSize: "cover"}}
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
                  onSelect(index)
                }}
              >
              </div>
            ))}
          </div>
        </div>)

}

export { ThumbNailSlider }
