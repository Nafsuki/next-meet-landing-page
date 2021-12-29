import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image
            alt="logo"
            src="/assets/logo.svg" 
            width={119}
            height={28} />
          </a>
        </Link>
      </div>
    </header>
  )
}
