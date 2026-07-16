import styles from './Header.module.css'
import ava from '../../assets/ava.png'
import { IoLanguage } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa'
import { CiMenuBurger } from 'react-icons/ci'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a href="/" className={styles.nameBlock}>
          <img className={styles.headerLogo} src={ava} alt="А где картинка?" />
          <div className={styles.headerName}>
            <h1 className={styles.headerTitle}>Ярослав Бесфалин</h1>
            <span className={styles.headerSubTitle}>web-developer</span>
          </div>
        </a>
        <div className={styles.boxlink}>
          <ul className={styles.listlink}>
            <li className={styles.objlink}>
              <a className={styles.link} href="/about">
                Обо мне
              </a>
            </li>
            <li className={styles.objlink}>
              <a className={styles.link} href="/contacts">
                Контакты
              </a>
            </li>
            <li className={styles.objlink}>
              <a className={styles.link} href="/projects">
                Проекты
              </a>
            </li>
          </ul>
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
        <CiMenuBurger className={styles.headerBurger} />
      </div>
      <HeaderMenu />
    </header>
  )
}

function HeaderMenu() {
  return (
    <nav className={styles.menu}>
      <div className={styles.menuLinks}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/about">
              Обо мне
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/contacts">
              Контакты
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.Link} href="/projects">
              Проекты
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.menuBtns}>
        <ul className={styles.menuBtnsList}>
          <li className={styles.menuBtnsItem}>
            <a className={styles.menuBtnsLink}>
              <IoLanguage />
            </a>
          </li>
          <li className={styles.menuBtnsItem}>
            <a className={styles.menuBtnsLink}>
              <FaMoon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
