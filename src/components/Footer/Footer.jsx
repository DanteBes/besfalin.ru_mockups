import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <span className={styles.footerText}>
                    © 2026 Dante Besfalin
                </span>
            </div>
        </footer>
    )
}

export default Footer
