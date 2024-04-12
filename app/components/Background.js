import "../globals.css";

export default function Background(props) {
  return (
    <>
        <div className="relative w-full h-[100vh] bg-[url('../public/LandingBackground.png')] bg-repeat bg-opacity-50 -z-5">
          <div className="">{props.children}</div>
        </div>
    </>
  );
}