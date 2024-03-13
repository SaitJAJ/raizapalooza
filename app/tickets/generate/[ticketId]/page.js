"use server";
import {Suspense} from "react";
import Loading from "@/components/Loading";
import QrGenerator from "@/components/QrGenerator";

export default async function Page({ params }) {
    return(
        <>
            <Suspense fallback={<Loading loading={true}/>}>
                <QrGenerator ticketId={params.ticketId}/>
            </Suspense>
        </>
    )
}
