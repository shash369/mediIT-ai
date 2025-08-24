import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const menu=[
  {
    id:1,
    name:'Home',
    path:'/home'
  },{
    id:2,
    name:'History',
    path:'/history'
  },{
    id:3,
    name:'Pricing',
    path:'/pricing'
  },{
    id:4,
    name:'Profile',
    path:'/profile'
  }
]
export default function AppHeader() {
  return (
    <div className='flex items-center justify-between p-4 shadow px-10 md:px-20 lg:px-40'>
        <Image src={'/logo.svg'} alt='logo' width={120} height={90} />
        <div className='hidden md:flex gap-12 items-center'>
             {menu.map((e)=>(
                 <div key={e.id}>
                       <h2 className='hover:font-bold cursor-pointer transition-all' >{e.name}</h2>
                  </div>
             ))}
        </div>
        <UserButton/>
    </div>
  )
}
