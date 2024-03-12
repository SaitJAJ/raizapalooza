'use client'
import {Children, useState} from "react";
export default function Tabs(props){
    let [selected,setSelected] = useState(0)
    const changeTab=(e)=>{
       setSelected(e.target.id)
        e.stopPropagation()
    }

    return(
        <>
            <div className={'flex justify-between flex-wrap '}>
                <div className={'flex w-full items-end h-[1.3lh]'}>
                    {Object.values(Children.toArray(props.children)).map((child,index)=>{
                        return <input key={child.props.name} type={"button"} value={child.props.name} id={index} onClick={changeTab} className={parseInt(selected) === index?'h-[1.5lh] w-1/3 bg-lime-100 border-2 border-b-0 border-gray-500 rounded-t transition-all':'w-2/3 h-[1lh] mb-0 content-end border-2 border-b-0 border-gray-500 rounded-t transition-all'} />
                    })}
                </div>


                <hr/>
                {Children.toArray(props.children)[selected]}
            </div>

            {/*{children}*/}
        </>
    )
}