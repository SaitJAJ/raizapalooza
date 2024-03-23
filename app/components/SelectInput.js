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
        <label  className={'grid select-none my-2 grow text-left'}>
            <p className={'my-auto text-base md:text-xl '}>
                {label}
            </p>
            <select value={value} id={id} className={'w-full md:h-[1.5lh] grow'} required={required} onChange={onChange}>
                <option id={''} className={'text-center'} value={''}>{defaultValue}</option>
                {options.map(option=>{
                    return (
                        <option className={'text-center'} key={option.id} value={option.id}>{option.value}</option>
                    )
                })}
            </select>
        </label>
    )
}