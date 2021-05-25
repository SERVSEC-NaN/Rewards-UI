import Layout from '../../components/layout'

export default function Subscribers() {
  return (
    <Layout>
      <h1>This is Subscribers page</h1>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const res = await fetch(`${process.env.DATABASE_URL}/api/v1/subscriber`)
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