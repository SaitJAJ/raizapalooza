import Hyperlink from "@/components/Hyperlink";

export default function Footer(){
    return(
        <footer className={'w-full flex justify-around h-50 text-center items-center absolute bottom-0 bg-background bg-opacity-50'}>
            <p className={'m-4'}>©2024 RaizaPalooza Inc.</p>
            <Hyperlink href={'/terms'}>Terms & Conditions</Hyperlink>
        </footer>
    )
}