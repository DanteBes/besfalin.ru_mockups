import styles from "./Main.module.css"

function Main() {
    return (
        <main className={styles.main}>
             <div>
                <h2>Всем привет это сайт,</h2>
                <h1>Ярослава Бесфалина</h1>
                <p>
                    Разработчик, энтузиаст, исследователь технологий.Делаю веб-проекты и делюсь опытом в блоге.
                </p>
             </div>

             <div className={styles.objF}>
                <img src="" alt="А где картинка?"/>
             </div>
        </main>
    )
}

export default Main