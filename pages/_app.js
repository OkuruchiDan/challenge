import '../styles/globals.css'
import App from 'next/app'

function MyApp({ Component, pageProps, dataFromApp, exampleJson,query, error }) {
  return <Component {...pageProps} dataFromApp={dataFromApp} exampleJson={exampleJson} query={query} error={error} />
}

MyApp.getInitialProps = async (appContext) => {
  try {
    const appProps = await App.getInitialProps(appContext);
    const res = await fetch(process.env.HASURA_API_URL + '/all_data', {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
      }
    })
    const data = await res.json()
    return {
      ...appProps,
      dataFromApp: data.long_tails,
      exampleJson: data.exampleJson.example,
      query: appContext.router.query
    }
  } catch (e) {
    return { error: e }
  }
}

export default MyApp
