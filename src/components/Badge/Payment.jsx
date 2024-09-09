// eslint-disable-next-line no-unused-vars
import React from 'react'
import { LuShieldCheck } from 'react-icons/lu'
import { MdPayment } from 'react-icons/md'

export default function Payment() {
  return (
    <div className='flex flex-col rounded-md border-[#E5E7EB] border-[2px] text-[#6B7280] dark:text-[#948d7f] '>
      <div className='flex gap-4 p-3 border-b-[2px] md:min-h-[8vh]'>
        <MdPayment size={32} />
        <p>
          <b>Payment.</b> Payment upon receipt of goods, Payment by card in the department, Google Pay,
          Online card, -5% discount in case of payment
        </p>
      </div>
      <div className='flex gap-4 p-3 md:min-h-[8vh]'>
        <LuShieldCheck size={32} /> 
        <p>
          <b>Warranty.</b> The Consumer Protection Act does not provide for the return of this product of proper
          quality.
        </p>
      </div>
    </div>
  )
}
