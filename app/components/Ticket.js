'use client'
export default function Ticket({select,selected = false}){
    const style = selected?'max-w-[36vw] grow border-2 border-black my-[4vh] h-[60vh] transition-all hover:':'max-w-[28vw] my-15 grow border-2 border-black my-[7vh] h-[54vh] transition-all duration-[400ms]'
    return(
        <div className={style} onClick={select}>

        </div>
    )
}