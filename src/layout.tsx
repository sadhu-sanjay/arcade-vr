// import design3d from "../src/assets/header.png";
import design3d from "/header.png";
import rainbow from "/rainbow.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  /**
   * Main Application Layout
   *
   */
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-screen ">
      <button className="absolute left-2 top-2" onClick={toggleFullScreen}>
        Toggle Full Screen
      </button>
      <head>
        <title>Games</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <img
        className="absolute bottom-0 right-0"
        src={rainbow}
        alt="3d bg Design"
      />
      <main className="bg-blue-500 flex flex-col items-center justify-center flex-1  w-full h-full">
          {/*<header className=" flex flex-col items-center justify-center h-[25dvh] ">
            <img
              src={design3d}
              alt="Bami Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </header> */}
          {children}
      </main>

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
    </div>
  );
}
