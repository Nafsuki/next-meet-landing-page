import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; meet 2021</p>
      <p>
        <span>Coded using Next.js by </span>
        <Link href='https://github.com/Nafsuki'>
          <a>Nafsuki</a>
        </Link>
      </p>
    </footer>
  )
}
