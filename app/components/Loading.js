
export default function Loading({loading, children, message}){
    return(
        <div className={'h-fit flex justify-center'}>
            {loading?
                <div className={'grid '}>
                    {message}
                    <div className="lds-ellipsis ">
                        <div className={'h-fit'}></div>
                        <div className={'h-fit'}></div>
                        <div className={'h-fit'}></div>
                        <div className={'h-fit'}></div>
                    </div>
                </div>
                :
                children
            }
        </div>
    )
}