'use client'
import React from 'react'
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger 
}from "@/components/ui/dialog";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
function AddNewSessionDialog() {
  const [note,setNote]=useState<string>();
  return (
      <Dialog>
        <DialogTrigger asChild>
            <Button className='cursor-pointer mt-2'> + Start a new Consultation</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Add Basic Details</DialogTitle>
            <DialogDescription asChild>
                <div>
                      <h2>Add Symptons or any other Detail</h2>
                      <Textarea className='h-[200px] mt-2' placeholder='Add your Details ..'
                        onChange={(e)=>setNote(e.target.value)}
                      />
                </div>
            </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <DialogClose className='cursor-pointer' asChild><Button variant={'outline'}>Cancel</Button></DialogClose>
                 <Button className='cursor-pointer' disabled={!note}>Start</Button>
            </DialogFooter>
        </DialogContent>
       </Dialog>
  )
}

export default AddNewSessionDialog