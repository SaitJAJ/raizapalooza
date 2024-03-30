'use client'
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";

export default function SearchBar(props){
    let {placeholder = "Search by Email",disabled=false} = props
    const searchParams= useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    // let{onChange = ()=>{}}=props
    const handleSearch=useDebouncedCallback((e)=>{
        let params = new URLSearchParams(searchParams)
        if(e.target.value !== ""){
            params.set('query',e.target.value)
        }else{
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`,{scroll:false});
    },300)
    return(
        <input className={'w-full text-2xl border-2 border-blue-400 text-center rounded-md px-3 py-2'} disabled={disabled} placeholder={placeholder} defaultValue={searchParams.get('query')?.toString()} onChange={handleSearch} autoFocus={true} />
    )
}