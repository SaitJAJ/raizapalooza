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
        <label  className={'grid sm:flex select-none my-2 text-left'}>
            <p className={'my-auto sm:text-xl text-base sm:min-w-[250px]'}>{label}</p>
            {value===undefined?
                <input className={"justify-end rounded-s w-full text-center grow py-2 "} defaultValue={defaultValue} readOnly={readOnly} autoFocus={focus} disabled={disabled} required={required} id={id} name={id} autoComplete={(type === "text"?"on":"current-password")} type={type} placeholder={placeHolder}/>
            :
                <input className={"justify-end rounded-s w-full text-center grow py-2 "} autoFocus={focus} readOnly={readOnly} disabled={disabled} value={value} onChange={onChange} required={required} id={id} name={id} autoComplete={(type === "text"?"on":"current-password")} type={type} placeholder={placeHolder}/>
            }
        </label>
    )
}