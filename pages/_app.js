import '../styles/globals.css'
import {useEffect, useState} from "react";


function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://quick-chamois-69.hasura.app/api/rest/long_tails', {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': 'PBrfJoX4uBoedFEObKUFUTq4Cp0FbuDH2wq68zW4JNU1QXCe9VDi61fFsEZnnq1u'
      }
    }).then(res => res.json()).then(data => setData(data.long_tails))

  }, [])
  return <Component {...pageProps} dataFromApp={data || []} />
}

export default MyApp
