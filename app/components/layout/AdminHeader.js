'use client'
import Button from "@/components/Button";
import FancyTitle from "@/components/FancyTitle";

export default function AdminHeader({origin='',title}){
    return(
        <div className={'w-full flex justify-between p-8'}>
            <Button value={'Home'} navTo={"/admin/home"}/>
                <FancyTitle title={title}/>
            <Button value={'Tickets'} navTo={"/admin/tickets"}/>
        </div>
    )
}