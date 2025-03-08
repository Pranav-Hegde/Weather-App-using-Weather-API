import Button from '@mui/material/Button';
import Search from './SearchBox';
import InfoBox from './InfoBox';
import Weather from './Weather';
function App() {
  function button(){
    console.log("Button Clicked!");
  }
  return(
    <>
    <Weather />
    </>
  )
}

export default App
