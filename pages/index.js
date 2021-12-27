import Bottom from "@/components/Bottom"
import Layout from "@/components/Layout"
import MeetingImages from "@/components/MeetingImages"
import Showcase from "@/components/Showcase"

export default function HomePage() {
  return (
    <>
      <Layout title='meet | Landing Page' description='Welcome to meet Landing Page!'>
        <Showcase />
        <hr />
        <MeetingImages />
        <hr />
        <Bottom />
      </Layout> 
    </>
  )
}
