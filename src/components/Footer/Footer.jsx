import styles from './Footer.module.css'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span className={styles.footerText}>© 2026 Dante Besfalin</span>
        <ul className={styles.FooterList}>
          <li className={styles.FooterObject}>
            <a className={styles.FooterLink}>
              <FaGithub />
            </a>
          </li>
          <li className={styles.FooterObject}>
            <a className={styles.FooterLinkFrend}>
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
