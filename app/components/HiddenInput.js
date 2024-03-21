export default function HiddenInput({value,id,label,hidden=true}){
    return(
        <label>
            {label}
            <input className={'border-0 outline-0 hidden'} type={'text'} hidden={hidden} readOnly={true} value={value} id={id} name={id}/>
        </label>
    )
}