
function Blog() {
    return (
        <section className={styles.}>
            <div className={styles.}>
                <div className={styles.}>
                    <h1 className={styles.}>
                        Мой блог
                    </h1>
                </div>

                <div className={styles.}>
                    <h2 className={styles.}>
                        01 Как я начал кодить
                    </h2>
                    <h2 className={styles.}>
                        02 Сломался планшет
                    </h2>
                    <h2 className={styles.}>
                        03 Мне выпал ЛЕОН!!!
                    </h2>
                </div>

                <div className={styles.}>
                    <p className={styles.}>
                        Здесь я пишу о том что меня беспокоит или мне нравится и так далее бла бла
                    </p>
                    <a className={styles.} href="#">
                        Читать далее 👉
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Blog