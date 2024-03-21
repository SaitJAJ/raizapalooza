'use client'
import {useEffect, useRef, useState} from "react";

export default function NumberInput(props){

    let{label="Number",min=0,initial=min,max=min-1,onChange=()=>{},id="number"}=props
    const [tokens,setTokens]=useState(initial)
    const numRef = useRef()

    useEffect(() => {
        const form = document.getElementById('form')
        const resetCount=() =>{
            setTokens(initial)
            onChange(initial)
        }
        form.addEventListener('reset',resetCount)
        return()=>{
            form.removeEventListener('reset',resetCount)
        }
    }, [initial, onChange]);

    useEffect(()=>{
        setTokens(initial)
    },[initial])
    const updateTokens=(e)=>{
        e.stopPropagation()
        switch(e.target.id){
            case('number'):
                const val = parseInt(e.target.value);
                setTokens(val > min?val <= max? val : max:min)
                onChange(val > min?val <= max? val : max:min)

                break
            case('inc'):
                setTokens(prevState => prevState===max?prevState : prevState + 1)
                onChange(tokens === max?tokens :tokens+ 1)

                break
            case('dec'):
                setTokens(prevState => prevState > min?parseInt(prevState) - 1:prevState)
                onChange(tokens > min?tokens - 1:tokens)
                break
        }
    }
    return(
        <label htmlFor={'number'} className={'grid sm:flex flex-wrap justify-between select-none  text-left'}>
            <p className={'my-auto text-xl'}>{label}</p>
            <div className={'grid'}>
                <div className={'flex'}>
                    <input className={'h-full px-4 '} type={"button"} id={"dec"} value={"-"} onClick={updateTokens}/>
                    <input className={'text-center w-14 h-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'} ref={numRef} name={id} id={id} min={min} type={'number'} value={tokens} onFocus={()=>numRef.current.select()} onChange={updateTokens}/>
                    <input className={'h-full px-4'} type={"button"} id={"inc"} value={"+"} onClick={updateTokens}/>
                </div>
                <div className={'w-full text-right'}>
                    {props.children}
                </div>
            </div>
        </label>
    )

}