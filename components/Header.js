import styles from '../styles/Header.module.css';
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

function Header() {

    return (
        <div>
            <header className={styles.banner}>

            <Link href='/'><div className={styles.logobanner}>Polisemi</div></Link>

                <div className={styles.bannertext}>
                    <Link href='/calendar'><div className={styles.link}>Calendrier</div></Link>
                    {/* <Link href='/contact'><div className={styles.link}>Contact</div></Link> */}
                    <Link href='https://www.instagram.com/polisemi.paris14/' target="_blank"><FontAwesomeIcon icon={faInstagram} className={styles.picto} size="2xl"/></Link>
                    <Link href='https://twitter.com/polisemi_75014?lang=fr' target="_blank"><FontAwesomeIcon icon={faXTwitter} className={styles.picto} size="2xl"/></Link>
            
                </div>
            </header>

        </div>
    )
}

export default Header ; 