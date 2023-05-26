import './App.css'
import Dashboard from './Components/Dasboard/Dashboard'
import Phonebar from './Components/PhoneBar/Phonebar'
import PriceList from './Components/PriceList/PriceList'
import Nav from './Components/nav/nav'

function App() {


  return (
    <div>
      <Nav> </Nav>
      <h2 className='text-4xl text-center pt-20 font-bold'>Price List Of Our Service</h2>

      <PriceList>  </PriceList>

      <Dashboard> </Dashboard>

      <Phonebar>  </Phonebar>

    </div>
  )
}

export default App
