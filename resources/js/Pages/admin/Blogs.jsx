import React from 'react'
import AdminLayout from '../../layout/adminLayout'
import Table from '../../components/Table'
import { blogColumn } from '../../constants/blogTable'
import { blogPosts } from '../../constants/blog'
import Head from '../../components/ui/Head'

export default function Blogs() {
  return (
    <AdminLayout>
      <div className="m-6">
        <Head title={"Blogs"}/>
        <Table columns={blogColumn} data={blogPosts} />
      </div>
    </AdminLayout>
  )
}
