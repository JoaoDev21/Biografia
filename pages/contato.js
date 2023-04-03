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
            <Menu/><hr></hr>
            <h1>Contatos:</h1><hr></hr>
            <h3><dd>jooao_1999@otmail.com</dd></h3>
            <h3><dd>(11) 9 9731-1132 | (11) 9 8831-5916</dd></h3>
            <h3><dd>jooao_1999@otmail.com</dd></h3>




            
        </div>
    )
}
export default sobre;

// Para startar o programa no terminal (" npm run dev ")