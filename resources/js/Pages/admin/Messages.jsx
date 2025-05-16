import React from 'react'
import AdminLayout from '../../layout/adminLayout'
import Head from '../../components/ui/Head'
import Table from '../../components/Table'
import { messageData } from '../../constants/message'
import { messageColumn } from '../../constants/messageTable'

export default function Messages() {
  return (
    <AdminLayout>
      <div className="m-6">
        <Head title={"Messages"} />
        <Table data={messageData} columns={messageColumn} />
      </div>
    </AdminLayout>
  )
}
