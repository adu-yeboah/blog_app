import React from 'react'
import AdminLayout from '../../layout/adminLayout'
import Summary from '../../components/Summary'
import Chart from '../../components/Chart'
import EmailsList from '../../components/emailsList'

export default function Dashboard() {
  return (
    <AdminLayout>
      <Summary />

      <div className="flex justify-between gap-4 container mx-auto">
        <Chart />
        <EmailsList />
      </div>

    </AdminLayout>
  )
}
