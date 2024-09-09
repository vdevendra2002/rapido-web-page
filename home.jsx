import Header from "../components/header/header";
import Impact from "../components/header/impact";
import Page from "../components/header/page";
import Road from "../components/header/road";


import Safety from "../components/header/safety";

export default function Home()
{
    return(
        <>
            <Header/>
            <Safety/>
            <Road/>
            <Page/>
            <Impact/>
            
            
            
        </>
    )
}