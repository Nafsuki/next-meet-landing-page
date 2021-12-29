import styles from '@/styles/Showcase.module.css'
import Image from 'next/image'

export default function Showcase() {
  let version = 'v1.3'
  return (
    <div className={styles.showcase}>
      <div className={styles.tabletImg}>
        <Image
            src="/assets/tablet/image-hero.png" 
            alt="top tablet image" 
            width={820} 
            height={303}
        />
      </div>
      <div className={styles.imgLeft}>
        <Image
          src="/assets/desktop/image-hero-left.png" 
          alt="top image left" 
          width={394} 
          height={303}
        />
      </div>
      <div className={styles.main}>
        <h1>Group Chat
          <br/>
        for Everyone</h1>
        <p>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
        <div className={styles.btns}>
          <button className='btn'>Download
          <span>{version}</span></button>
          <button className='btn secondary'>What is it?</button>
        </div>
      </div>
      <div className={styles.imgRight}>
        <Image
          src="/assets/desktop/image-hero-right.png" 
          alt="top image right" 
          width={394} 
          height={303}
        />
      </div>
      </div>
  )
}
