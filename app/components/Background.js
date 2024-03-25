import "../globals.css";

export default function Background(props) {
  return (
    <>
        <div className="absolute top-0 left-0 -z-10 w-full min-h-full bg-[url('../public/LandingBackground.png')] bg-repeat">
          <div className="relative z-10">{props.children}</div>
        </div>
    </>
  );
}