type ButtonProps = {
    onClick: (e) => void;
    isFullScreen: boolean
}

const NextButton: React.FC<ButtonProps> = ({ onClick, isFullScreen }) => {
    
    return (
        <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(e)
            }}
            type="button"
            className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-auto px-4 cursor-pointer group focus:outline-none"
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
    )
}

export {NextButton}
