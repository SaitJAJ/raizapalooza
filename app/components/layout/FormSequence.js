import InfoForm from "@/components/InfoForm";
import SquarePayment from "@/components/SquarePayment";
import {ErrorBoundary} from "react-error-boundary";

export default function FormSequence(){


    return(
        <div className={'border-2 border-black w-[80%] h-[80vh] my-20 mx-auto'} >
            <InfoForm/>
            <ErrorBoundary fallback={<div className={'w-1/2 my-80 mx-auto text-center border-2 rounded-sm px-20 py-5'}>You are missing the required ENV Variables for square payments.</div>}>
                {/*<SquarePayment/>*/}
            </ErrorBoundary>

        </div>
    )
}