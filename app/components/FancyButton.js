'use client'
export default function FancyButton({children,onClick,hoverColor = 'hover:bg-element-2 '}){

    return(
        <button type={"button"} onClick={onClick} className={'w-[50%] border-2 border-black hover:cursor-pointer text-xl font-bold p-3 m-1 hover:text-background '+hoverColor}>
            {children}
        </button>
    )
}