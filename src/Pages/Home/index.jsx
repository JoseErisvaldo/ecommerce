import Cards from '../../Components/Cards'
import Header from '../../Components/Header'
import NewItems from '../../Components/NewItems'
import RecentlyViewed from '../../Components/RecentlyViewed'
import StatusOrder from '../../Components/StatusOrder'
import CategoryHome from '../../Components/CategoryHome'
import './style.css'

export default function Home() {

  return (
    <div>
      <Header />
      <div className='card-home'>
        <Cards
          tittle={'Anunciar'}
          descripton={
            'Promova seus produtos de maneira simples e eficaz. Anuncie agora !!'
          }
          link={'/announce'}
        />
        <Cards
          tittle={'Agendar'}
          descripton={
            'Promova seus produtos de maneira simples e eficaz. Anuncie agora !!'
          }
          link={'/schedule'}
        />
        <Cards tittle={'Ver agendamentos'} descripton={"Gerenciar meus agendamentos"} link={'/myschedule'} />
        <Cards tittle={'Gerenciar estoque'} descripton={'Aqui voce gerencia seu estoque de forma facil e pratica !!'} link={'/stock'}/>
      </div>
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
