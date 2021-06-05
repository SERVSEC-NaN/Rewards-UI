import Layout from '../../components/PageLayout'

export default function Subscriptions() {
  return (
    <Layout>
      <h1>This is Subscriptions page</h1>
    </Layout>
  )
}

export async function getServerSideProps () {
  const result = await fetch(`${process.env.DATABASE_URL}/api/v1/subscriptions`)
  const json = await result.json()
  var data = json.data

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}