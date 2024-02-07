import { useEffect, useState } from "react";
import { ImagePlaceHolder } from "~/components/templates/image-placeholder";

type ImageSliderProps = {
  images: any[];
  isFullScreen: boolean;
  setIsFullScreen: (isFullScreen: boolean) => void;
  onImageChange?: (index: number) => void;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  isFullScreen,
  setIsFullScreen,
  onImageChange,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (onImageChange) {
      onImageChange(currentImageIndex);
    }
  }, [currentImageIndex, onImageChange]);


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
                <video autoPlay loop muted playsInline
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
          <div className="absolute z-30 flex space-x-3 bottom-5 transform 
          grid-cols-1 grid-rows-1 gap-2 grid-auto-flow grid-auto-cols-[1fr] grid-auto-rows-[1fr] w-full h-auto px-4 py-2 bg-gray-900/10 dark:bg-gray-800/10 rounded 
          shadow-lg overflow-hidden ">
            {images?.map((item, index) => (
              <button
                key={index}
                type="button"
                style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover"}}
                className={`shadow-sm rounded min-w-[250px] min-h-[131px]
                ${ index === currentImageIndex ? "bg-white" : "bg-gray-300"}
                `}
                aria-current={index === currentImageIndex}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
              >
              </button>
            ))}
          </div>
          <button
            type="button"
            className=" absolute top-1/2 left-0 z-30 flex items-center justify-center h-auto px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={(e: any) => {
              e.stopPropagation();
              handlePrevClick();
            }}
          >
            <span
              className={`${
                isFullScreen ? "w-10 h-10" : "w-8 h-8"
              } inline-flex items-center justify-center rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 
              dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white 
              dark:group-focus:ring-gray-800/70 group-focus:outline-none`}
            >
              <svg
                className="w-4 h-4 text-white dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextClick();
            }}
            type="button"
            className="absolute  top-1/2 right-0 z-30 flex items-center justify-center h-auto px-4 cursor-pointer group focus:outline-none"
          >
            <span
              className={`${
                isFullScreen ? "w-10 h-10" : "w-8 h-8"
              } inline-flex items-center justify-center  rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none`}
            >
              <svg
                className="w-4 h-4 text-white dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;

