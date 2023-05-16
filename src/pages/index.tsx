import Head from 'next/head'
import DefaultLayout from '@/layouts/default'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <DefaultLayout>
        <div>Hello, World!</div>
      </DefaultLayout>
    </>
  )
}

export default HomePage
