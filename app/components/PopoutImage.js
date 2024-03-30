'use client'
import Image from 'next/image'

export default function PopoutImage({alt='img',src,fill=true ,className,callBack=()=>{}}){
    return(
        <div onClick={()=>callBack(src)}>
            <Image alt={alt} src={src} fill={fill} className={className}/>
        </div>
    )
}