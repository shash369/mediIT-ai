import { AIDoctorAgents } from '@/shared/list'
import DoctorAgentCard from './DoctorAgentCard'
import React from 'react'

function DoctorAgentList() {
  return (
    <div className='mt-10'>
        <h2 className='font-bold text-xl mb-3'>
            Specialist Doctors Agent
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-9'>
            {AIDoctorAgents.map((doc)=>(
                <div key={doc.id}>
                     <DoctorAgentCard doctorAgent={doc}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DoctorAgentList