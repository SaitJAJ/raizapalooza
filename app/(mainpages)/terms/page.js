'use server'
export default async function Page(){
    return(
        <div className={'px-8'}>
            <h2 className={'text-center'}>Raizapalooza Terms and Conditions</h2>
            <p className={"my-4 text-center"}>
                The following terms and conditions apply to the use & function of Raizapalooza.com, and the emails that are generated from the use of this website.
            </p>
            <p className={"my-4 text-center"}>
                This website only uses cookies for essential function. Despite this, we have provided the ability to preemptively disable additional cookies & Data collection. Our Terms & Conditions will be updated as our policies are.
            </p>
            <p className={"my-4 text-center"}>
                We do not collect any data on our users for marketing or other services. All information collected is required for the function of this website or acquired by the request of services used to manage this website. Listed below:<br/>
            </p>
            <ul>
                <li className={"my-4 text-center list-disc mx-8"}>
                    We use the Square Payment API to securely manage payment. Their terms & conditions can be found <a href={'https://squareup.com/ca/en/legal/general/ua'}>Here</a>
                    <br/>
                </li>
            </ul>
            <p className={"my-4 text-center"}>
                All ticket purchases are final, meaning we will not provide any compensation for tickets purchased. If you have any questions about this, please email Raizapalooza@gmail.com
            </p>
            <p className={"my-4 text-center"}>
                If you have any issues with the content or service of this website, Simply close this browser. You are not required to access this site for any reason, including purchasing of tickets to Raizapalooza. (You may purchase with cash at the door).
                <br/>
            </p>
            <p className={"my-4 text-center"}>
                By using this website, you acknowledge that the information provided is not guaranteed to be correct, and that the features/function of this website is not guaranteed.
                <br/>
            </p>
            <p className={"my-4 text-center"}>
                This website was developed by a small team, and has not been deemed secure by any Internet Security professionals. </p>
            <p className={'my-4 text-center'}>
                This website has not been developed by contract, nor paid for. This means that there is no guarantee that It will continue to function up to or during the event listed. Everything is subject to change.

            </p>
        </div>
    )
}