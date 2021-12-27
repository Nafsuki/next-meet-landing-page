import styles from '@/styles/Bottom.module.css'

export default function Bottom() {
  return (
    <>
      <div className={styles.bottomContainer}>
        <h2>Experience more<br />together</h2>
          <p>Stay connected with reliable HD meetings<br/>
          and unlimited one-on-one and group<br/>
          video sessions.</p>
          <button 
          className='btn secondary'>
            Download
          <span>v1.3</span>
          </button>
        <div className={styles.bottom}>
        </div>
      </div>
    </>
  )
}
