'use client'
export default function Ticket({select,selected = false,children,notice}){
    const selectedStyle=' h-[275px] w-[200px] md:h-[450px] md:w-[300px] lg:h-[600px] lg:w-[375px] grow border-2 bg-background grow translate-x-[10px] translate-y-[-10px] transition-all relative'
    const unselectedStyle = ' h-[275px] w-[200px] md:h-[450px] md:w-[300px] lg:h-[600px] lg:w-[375px]  grow bg-background border-2 box-border transition-all grayscale relative '
    const style = 'w-fit h-fit border-2 m-4'
    return(
        <div className={'grid'}>
            <div className={style} onClick={select}>
                <div className={selected?selectedStyle:unselectedStyle} onClick={select}>
                    <div className={selected?selectedStyle:unselectedStyle} onClick={select}>
                        <div className={selected?selectedStyle:unselectedStyle} onClick={select}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <h3 className={'py-2 w-[200px] md:w-[300px] lg:w-[375px] text-center'}>{notice}</h3>
        </div>
        )
}