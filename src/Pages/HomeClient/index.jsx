import Header from '../../Components/Header'
import NewItems from '../../Components/Seller/NewItems'
import RecentlyViewed from '../../Components/RecentlyViewed'
import StatusOrder from '../../Components/StatusOrder'
import CategoryHome from '../../Components/CategoryHome'
import './style.css'

export default function HomeClient() {

  return (
    <div>
      <Header />
      <RecentlyViewed />
      <StatusOrder componentUm={'Pagar'} componentDois={'Rever'} componentTres={'Devolução'} />
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
