import React, {useMemo}from "react"
import DashboardLayout from "../../components/DashboardLayout"
import Table from '../../components/table'
import DashboardNavbar from '../../components/DashboardNavbar'

const Badge = ({ values }) => {
  return (
    <>
      {values.map((value, idx) => {
        return (
          <span key={idx} className="px-5 mx-2 bg-green-300 rounded-lg py-1">
            {value}
          </span>
        );
      })}
    </>
  );
};

const GetRelevantData = ({ tags }) => {
  var result = []
  tags.forEach(tag => {
    result.push({
      id: tag.attributes.id,
      name: tag.attributes.name,
      promotions: tag.include.promotions
    })
  })
  return result
}

export default function Tags(props) {
  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id'
    },
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'PROMOTIONS',
      accessor: 'promotions',
      Cell: ({ cell: { value } }) => <Badge values={value} />
    },
  ], [])
  const data = useMemo(() => GetRelevantData(props), [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Table columns={columns} data={data} />
    </DashboardLayout>
  )
}

export async function getServerSideProps () {
  const result = await fetch(`${process.env.DATABASE_URL}/api/v1/tags`)
  const json = await result.json()
  const tags = json.data

  if (!tags) {
    return {
      notFound: true,
    }
  }

  return {
    props: { tags }, // will be passed to the page component as props
  }
}