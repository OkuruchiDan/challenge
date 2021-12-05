import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home({dataFromApp }) {
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
                {dataFromApp && dataFromApp.map(tail =>
                    <Link href={`${tail.tail}`}>
                        <a className="btn-grad">{tail.tail}</a>
                    </Link>
                )}
            </div>
            <div className={"divider"}/>
        </div>
    </div>
  )
}