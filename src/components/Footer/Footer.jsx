import styles from './Footer.module.css'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTextContainer}>
          <span className={styles.footerText}>© 2026 Dante Besfalin</span>
          <a href="/dev" className={styles.devButton}>Для разрабов</a>
        </div>
        <ul className={styles.footerList}>
          <li className={styles.footerObject}>
            <a className={styles.footerLink}>
              <FaGithub />
            </a>
          </li>
          <li className={styles.footerObject}>
            <a className={styles.footerLinkFrend}>
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
