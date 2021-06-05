import React, { useMemo } from 'react'
import Table from '../../components/table'
import DashboardLayout from '../../components/DashboardLayout'
import DashboardNavbar from '../../components/DashboardNavbar'

const GetRelevantData = ({ promoters }) => {
  var result = []
  promoters.forEach(promoter => {
    result.push({
      id: promoter.attributes.id,
      email: promoter.attributes.email,
      name: promoter.attributes.name,
      organization: promoter.attributes.organization
    })
  })
  return result
}

export default function Promoters(props) {
  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id'
    },
    {
      Header: 'EMAIL',
      accessor: 'email'
    },
    {
      Header: 'NAME',
      accessor: 'name'
    },
    {
      Header: 'ORGANIZATION',
      accessor: 'organization',
    },
  ], [])
  const promoters = useMemo(() => GetRelevantData(props), [])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Table columns={columns} data={promoters} />
    </DashboardLayout>
  )
}

export async function getServerSideProps() {
  const result = await fetch(`${process.env.DATABASE_URL}/api/v1/promoters`)
  const json = await result.json()
  const promoters = json.data

  if (!promoters) {
    return {
      notFound: true,
    }
  }

  return {
    props: { promoters }, // will be passed to the page component as props
  }
}