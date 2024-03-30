export default function BgWrapper({children}){
    return(
        <>
            <div className={"fixed h-[200vh] w-full -z-[10] bg-[url('/backgrounds/Background1.png')] bg-[rgba] bg-cover bg-repeat "}/>
            {/*<div className={"fixed h-[200vh] w-full -z-[10] bg-[url('/backgrounds/Background2.png')] bg-[rgba] bg-cover bg-repeat "}/>*/}
                    {children}
        </>
        )
}