import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';
import AnimatedIconLink from './components/animatedIconLink';

const NAV_ITEMS = [
    { href: 'https://www.linkedin.com/in/dani-domenech-moreno-05aa011a8', icon: faLinkedin, label: 'LinkedIn' },
    { href: 'mailto:domenechmorenodaniel@gmail.com', icon: faEnvelope, label: 'Email' },
    { href: 'https://wa.me/34653582886', icon: faWhatsapp, label: 'WhatsApp' },
    { href: 'https://github.com/ddm19', icon: faGithub, label: 'GitHub' },
];

const Navbar = () => (
    <nav className="nav animate__animated animate__slideInDown">
        <div className="navContainer">
            <div className="logo">
                <img src="/logo.svg" alt="logo" className="logo__img" />
                <h2 className="logo__text">
                    The<span className="logo__text--highlight">DM</span>
                </h2>
                <p className="logo__text--small">Dani Domenech</p>
            </div>
            <ul className="navMenu">
                {NAV_ITEMS.map(({ href, icon, label }) => (
                    <li key={label} className="navMenu__item animate__animated animate__backInDown">
                        <AnimatedIconLink
                            href={href}
                            icon={icon}
                            label={label}
                            className="navMenu__link"
                        />
                    </li>
                ))}
            </ul>
        </div>
    </nav>
);

export default Navbar;
