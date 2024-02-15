import Cards from '../../../Components/Cards';
import Header from '../../../Components/Header';
import StatusOrder from '../../../Components/StatusOrder';

export default function HomeSeller() {

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
          tittle={'Ver Anúncios'}
          descripton={
            'Gerenciar meus anuncios!!'
          }
          link={'/managead'}
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
      <StatusOrder componentUm={'Pagar'} componentDois={'Rever'} componentTres={'Devoluções'}/>
      <h2>Vai ser um dash com a performance das vendas !!</h2>
    </div>
  )
}
