import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <p>Copyright &copy; meet 2021</p>
      <p>
        <Link href='https://github.com/Nafsuki'>
          <a>Coded by Nafsuki</a>
        </Link>
      </p>
    </footer>
  )
}
