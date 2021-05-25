import Layout from '../../components/layout'

export default function Subscriptions() {
  return (
    <Layout>
      <h1>This is Subscriptions page</h1>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const res = await fetch(`${process.env.DATABASE_URL}/api/v1/subscription`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}