import Layout from '../../components/PageLayout'

export default function Promotions(props) {
  return (
    <Layout>
      <h1>This is Promotions page</ h1>
    </Layout>
  )
}

export async function getServerSideProps() {
  const result = await fetch(`${process.env.DATABASE_URL}/api/v1/promotions`)
  const json = await result.json()
  const promotions = json.data

  if (!promotions) {
    return {
      notFound: true,
    }
  }

  return {
    props: { promotions }, // will be passed to the page component as props
  }
}