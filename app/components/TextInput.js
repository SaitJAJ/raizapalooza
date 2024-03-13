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
        <label  className={'flex justify-between select-none my-2 text-left'}>
            {label}
            {value===undefined?
                <input className={"border-2 border-blue-400  rounded-sm text-center min-w-[300px] py-2 "} defaultValue={defaultValue} readOnly={readOnly} autoFocus={focus} disabled={disabled} required={required} id={id} name={id} autoComplete={(type === "text"?"on":"current-password")} type={type} placeholder={placeHolder}/>
            :
                <input className={"border-2 border-blue-400 rounded-sm text-center min-w-[300px] py-2 "} autoFocus={focus} readOnly={readOnly} disabled={disabled} value={value} onChange={onChange} required={required} id={id} name={id} autoComplete={(type === "text"?"on":"current-password")} type={type} placeholder={placeHolder}/>
            }
        </label>
    )
}