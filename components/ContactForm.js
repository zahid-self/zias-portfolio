import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form action="#">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="col-span-full">
                    <input className='w-full h-[56px] border border-[#B8B8B8] py-4 px-5 font-Inter text-base text-[#707070] bg-transparent rounded-none focus:ring-0 focus:outline-none ' type="text" name='YourName' id='YourName' placeholder='Name' />
                </div>
                <div>
                    <input className='w-full h-[56px] border border-[#B8B8B8] py-4 px-5 font-Inter text-base text-[#707070] bg-transparent rounded-none focus:ring-0 focus:outline-none ' type="email" name='YourEmail' id='YourEmail' placeholder='Email' />
                </div>
                <div>
                    <input className='w-full h-[56px] border border-[#B8B8B8] py-4 px-5 font-Inter text-base text-[#707070] bg-transparent rounded-none focus:ring-0 focus:outline-none ' type="text" name='YourPhone' id='YourPhone' placeholder='Phone' />
                </div>
                <div className="col-span-full">
                    <textarea className='w-full h-[150px] border border-[#B8B8B8] py-4 px-5 font-Inter text-base text-[#707070] bg-transparent rounded-none focus:ring-0 focus:outline-none resize-none' name="YourMessage" id="YourMessage" cols="30" rows="10" placeholder='Provide your project brief here...'></textarea>
                </div>
            </div>
            <button className='min-w-[140px] px-8 h-[60px] inline-flex justify-center items-center border border-[#B8B8B8] text-center text-lg font-semibold capitalize text-white gap-x-2 hover:bg-[#292929] hover:text-white hover:stroke-[#b8b8b8]' type='submit'>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm