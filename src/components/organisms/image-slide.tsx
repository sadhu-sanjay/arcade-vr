
type ImageSlideProps = {
    setIsFullScreen: (flag: boolean) => void;
    items: Array<any>;
    currentImageIndex: number;
}

const ImageSlide: React.FC<ImageSlideProps> = ({setIsFullScreen, items, currentImageIndex}) => {

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

export { ImageSlide }
