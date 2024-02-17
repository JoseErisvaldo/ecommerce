import './style.css'
export default function BtnSubmit({ onClickSubmit, submit }) {
  return (
    <div className="card-submit">
      <button onClick={onClickSubmit} className="btn-submit">
        {submit}
      </button>
    </div>
  )
}
