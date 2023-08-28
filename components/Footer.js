import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-10 lg:py-[60px] bg-Scolor'>
        <div className='container mx-auto px-4'>
            <div className='flex items-center justify-center md:justify-between flex-wrap gap-4'>
                <div>
                    <ul className='flex gap-x-4 items-center text-base text-[#B8B8B8]'>
                        <li><a className='transition-all  hover:text-[#3b5998]' href='https://www.facebook.com/mzur.aflame' target='_blank'>Facebook</a></li>
                        <li><a className='transition-all hover:text-[#d62976]' href='https://www.instagram.com/mdziauddinroman/' target='_blank'>Instagram</a></li>
                        <li><a className='transition-all hover:text-[#0072b1]' href='https://www.linkedin.com/in/md-zia-uddin-613261141/' target='_blank'>LinkedIn</a></li>
                        {/* <li><a className='transition-all hover:text-Pcolor' href='#' target='_blank'>Twitter</a></li> */}
                    </ul>
                </div>
                <div>
                    <p className='text-[#B8B8B8] text-base'>&copy; All rights reserved 2023 | <Link href='/' className='text-[#B8B8B8] transition-all hover:text-Pcolor'>Zia Uddin</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer