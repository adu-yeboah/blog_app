import React from 'react'
import AdminLayout from '../../layout/adminLayout'
import Summary from '../../components/Summary'
import Chart from '../../components/Chart'

export default function Dashboard() {
  return (
    <AdminLayout>
      <Summary />
      <Chart />
    </AdminLayout>
  )
}
