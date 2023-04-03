import Head from "next/head";
import Menu from "../components/Menu";
import Link from "next/link";

function sobre(){

    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="robots" content="index, follow"/>
                <meta name="description" content="Biografia João Silva"/>
                <meta name="author" content="João silva"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <title>Biografia - João Silva</title>
            </Head>
            <Menu/>
            <h1>Sobre João silva</h1>
            
        </div>
    )
}
export default sobre;

// Para startar o programa no terminal (" npm run dev ")