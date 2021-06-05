import React, { useMemo } from 'react'
import Table from '../../components/table'
import DashboardLayout from '../../components/DashboardLayout'
import DashboardNavbar from '../../components/DashboardNavbar'

const GetRelevantData = ({ subscribers }) => {
  var result = []
  subscribers.forEach(subscriber => {
    result.push({
      id: subscriber.attributes.id,
      phone: subscriber.attributes.phone,
    })
  })
  return result
}

export default function Subscribers(props) {
  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id'
    },
    {
      Header: 'PHONE',
      accessor: 'phone'
    },
  ], [])
  const subscribers = useMemo(() => GetRelevantData(props), [])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Table columns={columns} data={subscribers} />
    </DashboardLayout>
  )
}

export async function getServerSideProps() {
  const request = await fetch(`${process.env.DATABASE_URL}/api/v1/subscribers`)
  const json = await request.json()
  const subscribers = json.data

  if (!subscribers) {
    return {
      notFound: true,
    }
  }

  return {
    props: { subscribers }, // will be passed to the page component as props
  }
}