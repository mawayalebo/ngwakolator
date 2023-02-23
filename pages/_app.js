import 'tailwindcss/tailwind.css'
import { Provider} from "react-redux"
import { store } from "../app/store"
import Landing from '../comps/Landing'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [changer, setChanger] = useState(true);
  
  setTimeout(() => {
    setChanger(false);
  }, 3000);

  return(
    <Provider store={store}>
      {
        changer? <Landing/> : <Component {...pageProps} />
      }
    </Provider>
  )
}

export default MyApp
