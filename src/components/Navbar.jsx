import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Início' },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/certificados', label: 'Certificados' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__marca">
          Luis<span>.</span>Carlos
        </NavLink>
        <nav className="navbar__menu">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--ativo' : 'navbar__link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
