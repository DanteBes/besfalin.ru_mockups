import styles from './Contacts.module.css'

function Contacts() {
  return (
    <main className={styles.contacts}>
      <div className={styles.contactsContent}>
        <p className={styles.contactsText}>Контакты текст</p>
      </div>
    </main>
  )
}

export default Contacts
