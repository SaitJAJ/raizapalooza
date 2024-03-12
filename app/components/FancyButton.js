'use client'
export default function FancyButton({children,onClick,hoverColor = 'hover:bg-green-200'}){

    return(
        <button type={"button"} onClick={onClick} className={'w-[50%] border-2 border-black hover:cursor-pointer p-3 m-1 '+hoverColor}>
            {children}
        </button>
    )
}