import './App.css'
import AppRouter from './Router'
/* este codigo, serve para rederizar a pagina !! */
function App() {
  return (
    <div className="container-master">
      <div className='container-response'>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
