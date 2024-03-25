export default function BgWrapper({children}){
    return(
        <div className={"fixed h-[200vh] w-full -z-[10] bg-[url('/backgrounds/Background3.png')] bg-[rgba] bg-cover bg-repeat "}>
            <div>
                {children}
            </div>
        </div>
    )
}