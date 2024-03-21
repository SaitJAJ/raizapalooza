import Button from "@/components/Button";

export default function FancyHeader(){
    return(
        <div className={'fixed flex justify-between w-full top-0 p-8 border-2'}>
            <Button value={'Tickets'} navTo={'tickets'}/>

            <Button/>
        </div>
    )
}