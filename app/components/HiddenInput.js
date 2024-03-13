export default function HiddenInput({value,id}){
    return(
        <input type={'password'} hidden readOnly={true} value={value} id={id} name={id}/>
    )
}