import SquarePayment from "@/components/SquarePayment";
import FormSequence from "@/components/layout/FormSequence";
import CurrentTickets from "@/components/CurrentTickets";

export default function Page(){
    return(
        <div className={''}>
            {/*<CookieDev/>*/}
            {/*<InfoForm/>*/}
            <CurrentTickets/>
            {/*<SquarePayment/>*/}
            <FormSequence/>
        </div>
    )
}