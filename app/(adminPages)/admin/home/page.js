'use server'
import FancyTitle from "@/components/FancyTitle";
import Button from "@/components/Button";

export default async function Page() {
    return (
        <div className={'grid text-center justify-around h-[50vh]'}>
            {/*<AdminHeader/>*/}
            <FancyTitle title={'Admin'}/>
            <Button value={'View Tickets'} navTo={'/admin/tickets'}/>
            <Button value={'Send Emails'} navTo={'/admin/emails'}/>
        </div>
    )
}