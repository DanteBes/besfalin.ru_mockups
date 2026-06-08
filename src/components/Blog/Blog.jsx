import styles from "./Blog.module.css"

function Blog() {
    return (
        <section className={styles.blogSection}>
            <div className={styles.blogContainer}>
                <div className={styles.blogHeader}>
                    <h1 className={styles.blogTitle}>
                        Мой блог
                    </h1>
                </div>

                <div className={styles.blogList}>
                    <h2 className={styles.blogItem}>
                        01 Как я начал кодить
                    </h2>
                    <h2 className={styles.blogItem}>
                        02 Сломался планшет
                    </h2>
                    <h2 className={styles.blogItem}>
                        03 Мне выпал ЛЕОН!!!
                    </h2>
                </div>

                <div className={styles.blogFooter}>
                    <p className={styles.blogDescription}>
                        Здесь я пишу о том что меня беспокоит или мне нравится и так далее бла бла
                    </p>
                    <a className={styles.blogLink} href="#">
                        Читать далее 👉
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Blog