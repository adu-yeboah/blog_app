import React from 'react'
import Head from './ui/Head'
import Widgets from './Widgets'

export default function Summary() {
  return (
    <div className="bg-white rounded-2xl p-5 m-12">
        <Head title={"Summary"} />

        {/* <div className='flex flex-row justify-evenly'> */}
            <Widgets />
        {/* </div> */}

    </div>
  )
}
