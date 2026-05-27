import styles from "./Header.module.css"

function Header() {
    return (
        <header>
            <div>
                <img src="" alt="А где картинка?"/>
                <div className={styles.headerloo}>
                    <h1>Yaroslav Besfaln</h1>
                    <span>veb-developer</span>
                </div>

                <div className={styles.boxlink}>
                    <ol className={styles.listlink}>
                        <li className={styles.objlink}>
                            <a className={styles.link} href="#">
                                about
                            </a>
                        </li>
                        <li>
                            <a className={styles.link} href="#">
                                contacts
                            </a>
                        </li>
                        <li>
                            <a className={styles.link} href="#">
                                projects
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </header>
    )
}

export default Header