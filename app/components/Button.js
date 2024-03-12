'use client'
export default function Button(props){
    const {
        type = "button",
        value="",
        label="",
        id="",
        onClick=()=>{},
        disabled=false,
        hoverColor=disabled?"hover:bg-yellow-100 ":"hover:bg-green-100 ",
        className='border-2 bg-white py-2 px-8 rounded-md hover:cursor-pointer h-full '+hoverColor,
    } = props;
    return(
        <label className={''}>
            {label}
            <input  className={className} type={type} value={value} disabled={disabled} id={id} onClick={onClick}/>
        </label>
    )
}