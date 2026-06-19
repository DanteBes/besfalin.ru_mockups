import styles from "./Main.module.css"
import ava from "../../assets/ava.png"
import { 
	FaTelegramPlane, 
	FaVk, 
	FaYoutube 
} from "react-icons/fa"

function Main() {
    return (
        <main className={styles.previewMain}>
            <div className={styles.previewMainContent}>
		    <div className={styles.previewLogo}>
			<h2 className={styles.previewSubtitle}>Всем привет с вами</h2>
			<h1 className={styles.previewTitle}>Ярослав Бесфалин</h1>
			<p className={styles.previewParagraph}>
				Я разработчик, который работает не в стандартных условиях, энтузиаст, исследователь технологий. Делаю веб-проекты и делюсь опытом в блоге.
			</p>

			<ol className={styles.previewMainList}>
			    <li className={styles.previewListObject}>
				<a className={styles.previewLink}>
				    <FaVk size={50}/>
				</a>
			    </li>
			    <li className={styles.previewListObject}>
				<a className={styles.previewLink}>
				    <FaTelegramPlane size={50}/>
				</a>
			    </li>
			    <li className={styles.previewListObject}>
				<a className={styles.previewLink}>
				    <FaYoutube size={50} />
				</a>
			    </li>
			</ol>
		     </div>

		     <div className={styles.objF}>
			<img className={styles.ava} src={ava} alt="А где картинка?"/>
		     </div>
             </div>
        </main>
    )
}

export default Main
