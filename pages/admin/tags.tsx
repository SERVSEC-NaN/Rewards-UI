import React from "react"
import Layout from "../../components/layout"
import Table from '../../components/table'
import { useRouter } from 'next/router'
import tags from '../tags.json'
import Logout from '../../components/logout'

export default function Tags() {
  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'NAME', accessor: 'name' },
  ]
  return (
    <Layout>
      <h1>Welcome</h1>
      <p>Here is your user information:</p>
      
      <Table column_names={columns} info={tags} />
      <Logout />
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const res = await fetch(`${process.env.DATABASE_URL}/api/v1/tag`)
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