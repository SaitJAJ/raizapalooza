'use client'
export default function Ticket({select,selected = false,children}){
    const selectedStyle='h-[30vh] md:h-[60vh] grow border-2 bg-background grow translate-x-[10px] translate-y-[-10px] transition-all'
    const unselectedStyle = 'h-[30vh] md:h-[60vh] grow  bg-background border-2 box-border transition-all grayscale '
    const style = ' h-[30vh] md:h-[60vh] mx-[5vw] border-2 grow'
    return(
        <div className={style} onClick={select}>
            <div className={selected?selectedStyle:unselectedStyle} onClick={select}>
                <div className={selected?selectedStyle:unselectedStyle} onClick={select}>
                    <div className={selected?selectedStyle:unselectedStyle} onClick={select}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}