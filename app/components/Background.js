import "../globals.css";

export default function Background(props) {
  return (
    <>
        <div className="relative w-full min-h-[100vh] bg-[url('../public/LandingBackground.png')] bg-repeat bg-opacity-50 -z-5 overflow-clip">
          <div className="min-h-[100vh]">{props.children}</div>
        </div>
    </>
  );
}