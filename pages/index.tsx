import Head from 'next/head'
import DefaultLayout from '@/layouts/default'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <DefaultLayout>
        <div>Hello, World!</div>
      </DefaultLayout>
    </div>
  )
}

export default HomePage
