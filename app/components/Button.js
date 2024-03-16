'use client'
export default function Button(props){
    const {
        type = "button",
        value="",
        label="",
        id="",
        onClick=()=>{},
        disabled=false,
        className='py-2 px-8 rounded-md hover:cursor-pointer h-full hover:outline hover: ',
    } = props;
    return(
        <label className={''}>
            {label}
            <input  className={className} type={type} value={value} disabled={disabled} id={id} onClick={onClick}/>
        </label>
    )
}