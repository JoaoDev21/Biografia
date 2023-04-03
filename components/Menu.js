import Link from "next/link";
//Estyles components
const StyleLink = {
    marginRight: 15
    
}

//Functions components
const Menu = () => (
    <div>
        <Link href="/">
            <label style={StyleLink}>Home</label>
        </Link>
        <Link href="/sobre">
            <label style={StyleLink}>Sobre</label>
        </Link>
        <Link href="/contato">
            <label style={StyleLink}>Contato</label>
        </Link>
        
    </div>
);



export default Menu;
