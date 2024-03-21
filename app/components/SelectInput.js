'use client'
export default function SelectInput(props){
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
        focus=false,
        options = []
    } = props;
    return(
        <label  className={'grid md:flex select-none my-2 grow text-left'}>
            <p className={'my-auto sm:text-xl text-base md:min-w-[250px]'}>
                {label}
            </p>
            <select defaultValue={defaultValue} id={id} className={'w-full h-[1.5lh] grow'} required={required} onChange={onChange}>
                <option id={defaultValue} className={'text-center'} value={defaultValue}>{defaultValue}</option>
                {options.map(option=>{
                    return (
                        <option className={'text-center'} key={option.id} value={option.id}>{option.value}</option>
                    )
                })}
            </select>
        </label>
    )
}