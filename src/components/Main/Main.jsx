import styles from "./Main.module.css"
import ava from "../../assets/ava.png"

function Main() {
    return (
        <main className={styles.previewMain}>
             <div className={styles.previewLogo}>
                <h2 className={styles.previewSubtitle}>Всем привет это сайт,</h2>
                <h1 className={styles.previewTitle}>Ярослава Бесфалина</h1>
                <p className={styles.previewParagraph}>
                    Разработчик, энтузиаст, исследователь технологий.Делаю веб-проекты и делюсь опытом в блоге.
                </p>

                <ol className={styles.previewMainList}>
                    <li className={styles.previewListObject}>
                        <a className={styles.previewLink}>
                            🏙️ VK
                        </a>
                    </li>
                    <li className={styles.previewListObject}>
                        <a className={styles.previewLink}>
                            🏙️ TG
                        </a>
                    </li>
                    <li className={styles.previewListObject}>
                        <a className={styles.previewLink}>
                            🏙️ YT
                        </a>
                    </li>
                </ol>
             </div>

             <div className={styles.objF}>
                <img src={ava} alt="А где картинка?"/>
             </div>
        </main>
    )
}

export default Main