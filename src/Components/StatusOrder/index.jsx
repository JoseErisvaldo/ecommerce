import './style.css'

export default function StatusOrder() {
  return (
    <div className="container-view-order">
      <h3>Status dos pedidos</h3>
      <div className="card-status">
        <div className="order-status">
          <div className="relative"></div>Pagar
        </div>
        <div className="order-status">
          <div className="relative"></div>
          Receber
        </div>
        <div className="order-status">Rever</div>
      </div>
    </div>
  )
}
