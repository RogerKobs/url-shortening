import styles from './style.module.scss'

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <img src="./images/logo.svg" alt="logo" />

        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </div>

      <div className={styles.login}>
        <a href="#">Login</a>
        <button>Sign Up</button>
      </div>
    </div>
  )
}
