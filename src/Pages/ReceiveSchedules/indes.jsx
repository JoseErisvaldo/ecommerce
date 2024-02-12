import Header from "../../Components/Header"
import Announcement from "../../Components/Announcement"


export default function ReceiveSchedules () {
  return(
    <div>
      <Header />
      <Announcement
        tittle={'Ver Agendamentos'}
        descripton={
          'Monitorar Status de Agendamentos'
        }
        link={'/statusschedules'}
      />
      <Announcement
        tittle={'Gestão de Estoque'}
        descripton={
          'Gerenciar estoque, eficiência operacional, garantindo que tenhamos os produtos certos, no lugar certo, no momento certo, promovendo a agilidade, a satisfação do cliente e a sustentabilidade financeira'
        }
        link={'/'}
      />
      
    </div>
  )
}
