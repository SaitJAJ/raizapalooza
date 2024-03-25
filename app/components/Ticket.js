'use client'
export default function Ticket({select,selected = false,children}){
    const selectedStyle=' h-[450px] w-[300px] grow border-2 bg-background grow translate-x-[10px] translate-y-[-10px] transition-all relative'
    const unselectedStyle = ' h-[450px] w-[300px] grow bg-background border-2 box-border transition-all grayscale relative '
    const style = ' m-[2vw] w-fit h-fit border-2'
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