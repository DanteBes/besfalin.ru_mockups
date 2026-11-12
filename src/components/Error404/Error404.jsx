import styles from './Error404.module.css'

function Error404() {
  return (
    <main className={styles.preview}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subTitle}>Страница не найдина</h2>
        <p className={styles.text}>Тут должны быть контакты, но разработчик потерял…</p>
      </div>
      <a href="/" className={styles.goHome}>
        На главную
      </a>
    </main>
  )
}

export default Error404
