import Announcement from '../../Components/Announcement'
import Header from '../../Components/Header'
import NewItems from '../../Components/NewItems'
import RecentlyViewed from '../../Components/RecentlyViewed'
import StatusOrder from '../../Components/StatusOrder'
import CategoryHome from '../../Components/CategoryHome'
export default function Home() {

  return (
    <div>
      <Header />
      <Announcement
        tittle={'Anunciar'}
        descripton={
          'Promova seus produtos de maneira simples e eficaz. Anuncie agora !!'
        }
        link={'/announce'}
      />
      <Announcement
        tittle={'Agendar'}
        descripton={
          'Promova seus produtos de maneira simples e eficaz. Anuncie agora !!'
        }
        link={'/schedule'}
      />
      <RecentlyViewed />
      <StatusOrder />
      <NewItems
        title={'Novos produtos'}
        evento={'Ver mais'}
        link={'/newitems'}
      />
      <CategoryHome
        title={'Categorias'}
        evento={'Ver mais'}
        link={'/category'}
      />
    </div>
  )
}
