import Bottom from "@/components/Bottom"
import Layout from "@/components/Layout"
import MeetingImages from "@/components/MeetingImages"
import Showcase from "@/components/Showcase"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <Layout title='meet | Landing Page' description='Welcome to meet Landing Page!'>
        <Showcase />
        <Image 
        src="/assets/01.svg" 
        width={56}
        height={140} />
        <MeetingImages />
        <Image 
        src="/assets/02.svg" 
        width={56}
        height={140} />
        <Bottom />
      </Layout> 
    </>
  )
}
