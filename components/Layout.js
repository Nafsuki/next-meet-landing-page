import Head from "next/head"
import styles from '@/styles/Layout.module.css'
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({title, keywords, description, children}) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'meet | Group Chat for Everyone',
  description: 'Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.',
  keywords: 'Chat, device, SNS, connect'
}