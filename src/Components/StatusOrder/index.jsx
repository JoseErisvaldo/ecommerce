import './style.css'

export default function StatusOrder({componentUm, componentDois, componentTres}) {
  return (
    <div className="container-view-order">
      <h3>Status dos pedidos</h3>
      
      <div className="card-status">
        <div className="order-status">
          <div className="relative"></div>
          {componentUm}
        </div>
        <div className="order-status">
          <div className="relative"></div>
          {componentDois}
        </div>
        <div className="order-status">{componentTres}</div>
      </div>
    </div>
  )
}
