import styles from '@/styles/MeetingImages.module.css'
import Image from 'next/image'

export default function MeetingImages() {
  return (
    <div className={styles.meetingImages}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image
            alt="image woman in video call"          
            src="/assets/desktop/image-woman-in-videocall.jpg"
            width={255}
            height={242}
          />
        </div>
        <div className={styles.image}>
          <Image
            alt="image women video chatting"          
            src="/assets/desktop/image-women-videochatting.jpg"
            width={255}
            height={242}
          />
        </div>
        <div className={styles.image}>
          <Image
            alt="image men in meeting"          
            src="/assets/desktop/image-men-in-meeting.jpg"
            width={255}
            height={242}
          />
        </div>
        <div className={styles.image}>
          <Image
            alt="image mantexting"          
            src="/assets/desktop/image-man-texting.jpg"
            width={255}
            height={242}
          />
        </div>
      </div>

      <div className={styles.message}>
        <p className='overline'>
          Built for modern use
        </p>
        <h2>Smarter meetings, all<br/>in one place</h2>
        <p className={styles.text}>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with<br/>invite-only team access, data encryption, and data export.</p>
      </div>
    </div>
  )
}
