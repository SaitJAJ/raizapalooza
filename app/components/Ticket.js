'use client'
export default function Ticket({select,selected = false,children}){
    const selectedStyle='h-[60vh] border-2 bg-background grow translate-x-[2vw] translate-y-[-2vh] transition-all'
    const unselectedStyle = 'h-[60vh] w-[36vw] w translate-x-[-2px] translate-y-[-2px] bg-background border-2 box-border transition-all grayscale '
    const style = 'max-w-[36vw] max-h-[60vh] mx-[5vh] my-[10vh] border-2 grow'
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