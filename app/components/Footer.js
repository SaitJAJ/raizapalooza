import Hyperlink from "@/components/Hyperlink";

export default function Footer(){
    return(
        <footer className={'w-full relative flex justify-around h-50 text-center'}>
            <p className={'m-4'}>©2024 RaizaPalooza Inc.</p>
            <Hyperlink href={'/terms'}>Terms & Conditions</Hyperlink>
        </footer>
    )
}