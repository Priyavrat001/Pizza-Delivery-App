import React from 'react'

const HomeMenu = () => {
    return (
        <>
            <section className='flex flex-col items-center flex-col-reverse justify-center'>
                <div>
                    <img className='w-[100px]' src="https://i.pinimg.com/564x/d1/e2/a9/d1e2a9c45ae8746c20b326c49414f663.jpg" alt="" />
                </div>
                <div className='text-center my-10 f'>
                    <h3 className='text-grya-500 uppercase font-semibold'>Check Out</h3>
                    <h2 className='text-primary font-bold text-4xl italic'>Menu</h2>
                </div>
            </section>
        </>
    )
}

export default HomeMenu