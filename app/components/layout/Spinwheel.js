export default function Spinwheel(){
    const slices=2;


    return(
        <div className={'h-48 border-2 flex justify-center'}>
            <div className={'w-32 h-32 border-2 m-auto rounded-full animate-spin bg-gradient'}>
                <div className={'h-1/2 absolute wedge'}>

                </div>
                <div className={'h-1/2'}>

                </div>
            </div>

        </div>
    )
}