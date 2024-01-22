// import design3d from "../src/assets/header.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <head>
        <title>Games</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* <header className="h-56 flex flex-col items-center justify-center w-full bg-red-200">
        <img
          src={design3d}
          alt="Bami Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }}
        />
      </header> */}

      <main className="bg-red-900 flex flex-col items-center justify-center flex-1 px-4 w-full">
        {/* <div className="bg-blue-900 flex flex-col items-center justify-center w-full flex-1 px-4"> */}
          {children}
        {/* </div> */}
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
