import styles from './Contacts.module.css'

function Contacts() {
  return (
    <main className={styles.previewContacts}>
      <div className={styles.previewContactsContent}>
        <h1 className={styles.previewContactTitle}>404</h1>
        <h2 className={styles.previewContactSubTitle}>Страница не найдина</h2>
        <p className={styles.contactsText}>Тут должны быть контакты, но разработчик потерял…</p>
      </div>
    </main>
  )
}

export default Contacts
