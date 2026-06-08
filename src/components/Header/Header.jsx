import styles from "./Header.module.css"
import ava from "../../assets/ava.png"

function Header() {
    return (
        <header>
            <div>
                <img className={styles.headerLogo} src={ava} alt="А где картинка?"/>
                <div className={styles.headerName}>
                    <h1 className={styles.headerTitle}>Yaroslav Besfaln</h1>
                    <span className={styles.headerSubTitle}>veb-developer</span>
                </div>

                <div className={styles.boxlink}>
                    <ol className={styles.listlink}>
                        <li className={styles.objlink}>
                            <a className={styles.link} href="#">
                                about
                            </a>
                        </li>
                        <li className={styles.objlink}>
                            <a className={styles.link} href="#">
                                contacts
                            </a>
                        </li>
                        <li className={styles.objlink}>
                            <a className={styles.link} href="#">
                                projects
                            </a>
                        </li>
                    </ol>

                    <ol className={styles.listSettings}>
                        <li className={styles.linkSettings}>
                            <a className={styles.LinkLanguage}>
                                А/Я
                            </a>
                            <a className={styles.linkTheme}>
                                🌙
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </header>
    )
}

export default Header
