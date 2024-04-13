'use client'
export default function TextInput(props){
    const {
        type = "text",
        value=undefined,
        label="",
        id="",
        placeHolder ="",
        defaultValue=null,
        onChange=()=>{},
        required=false,
        disabled=false,
        readOnly = false,
        focus=false
    } = props;
    return(
        <label  className={'grid md:flex select-none h-fit my-2 text-left'}>
            <p className={'my-auto md:text-xl text-base sm:min-w-[250px]'}>{label}</p>
            {value===undefined?
                <input className={"justify-end rounded-s md:text-lg text-base h-[1lh] md:h-[1.5lh] w-full text-center grow py-2 "} defaultValue={defaultValue} readOnly={readOnly} autoFocus={focus} disabled={disabled} required={required} id={id} name={id} autoComplete={"on"} type={type} placeholder={placeHolder}/>
            :
                <input className={"justify-end rounded-s md:text-lg text-base h-[1lh] md:h-[1.5lh] w-full text-center grow py-2 "} autoFocus={focus} readOnly={readOnly} disabled={disabled} value={value} onChange={onChange} required={required} id={id} name={id} autoComplete={'on'} type={type} placeholder={placeHolder}/>
            }
        </label>
    )
}