import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'
import Logo from '../../img/costs_logo.png'

import Container from './Container'

function NavBar () {
    return (
        <div className={styles.navbar}>
            <Container>
                <Link to='/' >
                    <img src={Logo} alt="Logo-Costs" />
                </Link>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='projects'>Projetos</Link></li>
                    <li><Link to='/company'>Empresa</Link></li>
                    <li><Link to='/contact'>Contato</Link></li>
                </ul>

            </Container>
        </div>
    )
}

export default NavBar