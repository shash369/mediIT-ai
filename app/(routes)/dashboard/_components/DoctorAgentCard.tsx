import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
type doctorAgent={
    id:number,
    specialist:string,
    description:string,
    image:string,
    agentPrompt:string,
    // voiceId:string,
}
type prop={
  doctorAgent:doctorAgent
}
function DoctorAgentCard({doctorAgent}:prop) {
  return (
    <div>
      <Image src={doctorAgent.image} alt={doctorAgent.specialist}
       width={150}
       height={250}
       className='w-full h-[250px] object-cover rounded-md'
       />
      <h2 className='font-bold'>{doctorAgent.specialist}</h2>
      <p className='line-clamp-2 text-sm text-gray-500'>{doctorAgent.description}</p>
      <Button className='mt-2 w-full'>Consult</Button>
    </div>
  )
}

export default DoctorAgentCard