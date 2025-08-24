import React from 'react'
import HistoryList from './_components/HistoryList'
import { Button } from '@/components/ui/button'
import DoctorAgentList from './_components/DoctorAgentList'

function Dashboard() {
  return (
    <div>
         <div className='flex justify-between items-center'>
            <h2 className='font-bold text-2xl'>my dashboard</h2>
            <Button>+talk with doc</Button>
        </div>
         <HistoryList/>
         <DoctorAgentList/>
    </div>
    
  )
}

export default Dashboard