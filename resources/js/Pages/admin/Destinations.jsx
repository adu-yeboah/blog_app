import React from 'react'
import AdminLayout from '../../layout/adminLayout'
import Head from '../../components/ui/Head'
import Table from '../../components/Table'
import { destinationColumn } from '../../constants/destinationTable'
import { blogPosts } from '../../constants/blog'

export default function Destinations() {
  return (
    <AdminLayout>
      <div className="m-6">
        <Head title={"Destinations"} />
        <Table columns={destinationColumn} data={blogPosts} />
      </div>
    </AdminLayout>
  )
}
