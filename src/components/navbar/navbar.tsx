import './navbar.scss';
import AnimatedIconLink from './components/animatedIconLink';



interface navbarItem {
    href: string;
    icon: any;
    label: string;

}

interface navbarProps {
    items: navbarItem[];
    isFloating?: boolean;

}

const Navbar = (props: navbarProps) => {

    const { items, isFloating } = props;

    return (
        <nav className={`nav animate__animated animate__slideInDown ${isFloating ? 'nav--floating' : ''}`}>
            <div className="navContainer">
                <ul className="navMenu">
                    {items.map(({ href, icon, label }) => (
                        <li key={label} className="navMenu__item animate__animated animate__backInDown">
                            <AnimatedIconLink
                                href={href}
                                icon={icon}
                                label={label}
                                className="navMenu__link"
                                isBlank={!isFloating}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;