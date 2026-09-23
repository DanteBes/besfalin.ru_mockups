import styles from './Header.module.css'
import ava from '../../assets/ava.png'
import { IoLanguage } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa'
import { CiMenuBurger } from 'react-icons/ci'
import { GoChevronLeft } from 'react-icons/go'
import { useState } from 'react'

const randomSubTitle = ['web-debugger', 'разработчик сайта']

function subTitle() {
  const subLogo = Math.floor(Math.random() * randomSubTitle.lenght)
  const textRandom = rSubtitle[subLigo]
}

function Header() {
  //храним состояние ismenushow и меняем через сет
  const [isMenuShow, setIsMenuShow] = useState(false)

  const handleOpenMenu = () => {
    setIsMenuShow(true)
  }

  const handleCloseMenu = () => {
    setIsMenuShow(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a href="/" className={styles.nameBlock}>
          <img className={styles.headerLogo} src={ava} alt="А где картинка?" />
          <div className={styles.headerName}>
            <h1 className={styles.headerTitle}>Ярослав Бесфалин</h1>
            <span className={styles.headerSubTitle}>{textRandom}</span>
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
        <CiMenuBurger onClick={handleOpenMenu} className={styles.headerBurger} />
      </div>
      {isMenuShow && <HeaderMenu onClose={handleCloseMenu} />}
    </header>
  )
}

function HeaderMenu({ onClose }) {
  return (
    <nav className={styles.menu}>
      <button onClick={onClose} className={styles.menuClose}>
        <GoChevronLeft />
        <span>назад</span>
      </button>
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
            <a className={styles.menuLink} href="/projects">
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
