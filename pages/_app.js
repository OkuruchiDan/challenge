import '../styles/globals.css'
import App from 'next/app'

function MyApp({ Component, pageProps, dataFromApp, exampleJson,query }) {
  return <Component {...pageProps} dataFromApp={dataFromApp.long_tails} exampleJson={exampleJson} query={query} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch(process.env.HASURA_API_URL + '/long_tails', {
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
    }
  })
  const data = await res.json()
  const exampleJson = require('../example.json')
  return { ...appProps, dataFromApp: data, exampleJson, query: appContext.router.query }
}

export default MyApp
