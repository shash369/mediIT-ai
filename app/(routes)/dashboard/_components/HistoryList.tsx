'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HistoryList() {
  const [historyList, setHistoryList] = useState([])
  return (
    <div className=' mt-3'>
      {historyList.length==0?
      <div className='flex items-center flex-col justify-center p-7 border-3 border-dashed rounded-sm'>
         <Image src={'/medical-assistance.png'} alt='empty state'
          height={150}
          width={150}
         />
         <h2 className='font-bold text-xl'>No Recent Consultations</h2>
         <p>it looks like you haven't consulted with a doc yet</p>
         <Button className='mt-2'>
          + Start a new Convo
         </Button>
      </div>
      :
      <div>
          List
      </div>}
    </div>
  )
}
