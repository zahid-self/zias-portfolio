import React from 'react'

const SectionTitle = ({title, subtitle}) => {
  return (
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 items-end mb-10 md:mb-[90px]'>
        <div>
            <h2 className='text-4xl md:text-6xl lg:text-[84px] lg:leading-[84px] font-extrabold uppercase text-white'>{title}</h2>
        </div>
        <div className='border-b border-[#707070] pb-3'>
            <p className='text-lg font-medium text-white'>{subtitle}</p>
        </div>
    </div>
  )
}

export default SectionTitle