import React from 'react'
import { CONTACT } from '../constants'
function Contact() {
  return (
    <div className='mb-6'>
        <h2 className='text-4xl text-center'>Contact Details</h2>
        <div className='text-center mt-4'>
            <p>{CONTACT.address}</p>
            <p>{CONTACT.phoneNo}</p>
            <p>{CONTACT.email}</p>
        </div>
      </div>
  )
}

export default Contact
