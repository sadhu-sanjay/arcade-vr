import rainbow from "/rainbow.png";

export default function Layout({ children }: { children: React.ReactNode }) {

  // const toggleFullScreen = () => {
  //   if (!document.fullscreenElement) {
  //     document.documentElement.requestFullscreen();
  //   } else {
  //     if (document.exitFullscreen) {
  //       document.exitFullscreen();
  //     }
  //   }
  // };

  /**
   * Main Application Layout
   *
   */
  return (
    <main className="flex flex-col items-center justify-center min-h-screen h-screen ">
      {/* <button className="z-[100] absolute left-4 top-4" onClick={toggleFullScreen}>
        F
      </button> */}
      <img
        className="absolute bottom-0 right-0 object-cover "
        src={rainbow}
        alt="3d bg Design"
      />
      <div className="relative flex flex-col items-center justify-streach flex-1  w-full h-full">
          {children}
      </div>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="
            "
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </main>
  );
}
