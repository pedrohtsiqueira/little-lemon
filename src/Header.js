import Nav from './Nav';


export default function Header() {
    return (
        <header>
            <img className="item" src='.\Logo.svg'/>
            <Nav className="item" />
        </header>
    );
}