import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({dataFromApp: long_tails}) {
    return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="challenge" content="app using hasura nextjs and remote postgress db" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="container-80">
            <div className={"divider"}/>
            <div className="button-wrapper-90">
                {long_tails && long_tails.map((tail, i) =>
                        <a className="btn-grad" key={i} target={'_blank'} href={'/' + tail.tail}>{tail.tail}</a>
                )}
            </div>
            <div className={"divider"}/>
        </div>
    </div>
  )
}