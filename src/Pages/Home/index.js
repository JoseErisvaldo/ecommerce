import { Link } from 'react-router-dom'
import Announcement from '../../Components/Announcement'
import Header from '../../Components/Header'
import NewItems from '../../Components/NewItems'
import RecentlyViewed from '../../Components/RecentlyViewed'
import StatusOrder from '../../Components/StatusOrder'

export default function Home() {
  return (
    <div>
      <Header />
      <Announcement />
      <RecentlyViewed />
      <StatusOrder />
      <NewItems
        title={'Novos produtos'}
        evento={'Ver mais'}
        link={'/newitems'}
      />
    </div>
  )
}
