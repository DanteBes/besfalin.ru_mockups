import styles from './Header.module.css'
import ava from '../../assets/ava.png'
import { IoLanguage } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.nameBlock}>
          <img className={styles.headerLogo} src={ava} alt="А где картинка?" />
          <div className={styles.headerName}>
            <h1 className={styles.headerTitle}>Ярослав Бесфалин</h1>
            <span className={styles.headerSubTitle}>web-developer</span>
          </div>
        </div>
        <div className={styles.boxlink}>
          <ol className={styles.listlink}>
            <li className={styles.objlink}>
              <a className={styles.link} href="#">
                Обо мне
              </a>
            </li>
            <li className={styles.objlink}>
              <a className={styles.link} href="#">
                Контакты
              </a>
            </li>
            <li className={styles.objlink}>
              <a className={styles.link} href="#">
                Проекты
              </a>
            </li>
          </ol>
        </div>
        <div className={styles.blockBtns}>
          <ul className={styles.listSettings}>
            <li className={styles.linkSettings}>
              <a className={styles.linkSetting}>
                <IoLanguage />
              </a>
              <a className={styles.linkSetting}>
                {/*<CgDarkMode />*/}
                <FaMoon />
              </a>
              {/*<a className={}>
            <CgFormatJustify />
            </a>*/}
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
