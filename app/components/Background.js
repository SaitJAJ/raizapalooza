import "../globals.css";

export default function Background(props) {
  return (
    <>
        <div className="relative w-full min-h-full bg-[url('../public/LandingBackground.png')] bg-repeat bg-opacity-50 -z-10">
          <div className="">{props.children}</div>
        </div>
    </>
  );
}