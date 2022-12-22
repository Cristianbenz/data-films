import React, { ReactNode } from 'react'

function CategoriesSection({children, title}: {children: ReactNode, title: string}) {
  return (
    <section className='overflow-x-hidden w-max'>
			<h2 className='text-5xl font-bold pb-8'>{title}</h2>
			<section className='overflow-x-scroll h-max pb-5'>
					{children}
			</section>
    </section>
  )
}

export default CategoriesSection