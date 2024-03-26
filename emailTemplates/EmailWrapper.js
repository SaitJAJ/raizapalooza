import { Html,Container , } from "@react-email/components";

export const EmailWrapper=({children})=>{
    return(
        <Html lang={'en'} dir={'ltr'}>
            <Container style={{textAlign:"center"}}>
                {children}
            </Container>
        </Html>
    )
}