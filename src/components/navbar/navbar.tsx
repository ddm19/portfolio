import './navbar.scss';
import AnimatedIconLink from './components/animatedIconLink';
import { IconProp } from "@fortawesome/fontawesome-svg-core";



interface navbarItem {
    href: string;
    icon: IconProp;
    label: string;
    title?: string;

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
                    {items.map(({ href, icon, label, title }) => (
                        <li key={label} className="navMenu__item animate__animated animate__backInDown">
                            <AnimatedIconLink
                                href={href}
                                icon={icon}
                                label={label}
                                className="navMenu__link"
                                isBlank={!isFloating}
                            />
                            <span className="navMenu__title">{title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;