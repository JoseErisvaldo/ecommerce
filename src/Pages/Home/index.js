import Announcement from '../../Components/Announcement'
import Header from '../../Components/Header'
import RecentlyViewed from '../../Components/RecentlyViewed'
import StatusOrder from '../../Components/StatusOrder'

export default function Home() {
  return (
    <div>
      <Header />
      <Announcement />
      <RecentlyViewed />
      <StatusOrder />
    </div>
  )
}
  