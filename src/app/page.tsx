import styles from './page.module.css'

const ping = async () => {
  const res = await fetch('http://localhost:3000/api/ping')
  return res.json()
}

const HomePage = async () => {
  const pong = await ping()

  return (
    <>
      <div className={styles.pong}>{pong}</div>
    </>
  )
}

export default HomePage
