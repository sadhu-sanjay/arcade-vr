import { ImagePlaceHolder } from "~/components/templates/image-placeholder"

type PresenterProps = {
    setIsFullScreen: (flag: boolean) => void;
    items: Array<any>;
    currentImageIndex: number;
    className: string
}

const ImageSlider: React.FC<ImageSlideProps> = ({setIsFullScreen, items, currentImageIndex, className}) => {

return (
    <div
          onClick={() => {
              setIsFullScreen(!isFullScreen);
          }}
          className={`relative h-full overflow-hidden bg-gray-100 dark:bg-gray-900 ${className}`}
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
                <img src="/vite.svg" className={"w-full h-full"} />
              </div>
            ))}
          {!items && <ImagePlaceHolder />}
        </div>)
}

export { ImageSlider }
