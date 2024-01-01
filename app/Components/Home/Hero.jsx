import React from 'react'
import RightIcon from '../icons/RightIcon'

const Hero = () => {
    return (
        <>
            <section className='hero center items-center justify-center'>
                <div className='py-8 w[50%] ml-[13vw]'>

                    <h1 className='text-4xl font-semibold'>Every thing is better with a <span className='text-primary'>Pizza</span></h1>
                    <p className='my-4 text-gray-500'>Pizza is the missing peace of that makes everyday complete, a simple yet delious joy.</p>
                </div>
                
                <div className='relative w[50%]'>

                    <img src="https://i.pinimg.com/564x/26/c6/4b/26c64bef44546cdc05bc2233168f32ac.jpg" layout={'fill'} objectFit={'content'} alt="pizza" />

                 
            
            {/* <img className='w-[30px]' src="https://i.pinimg.com/564x/eb/cb/b9/ebcbb960d5d992314b90ba13029e05b3.jpg" alt="" />  */}
                </div>
                <div className='flex gap-4 ml-[13vw]'>

                <button 
                className='bg-primary text-white py-2 px-4 rounded-full flex gap-2 uppercase'
                >Order Now
                <RightIcon/>
                </button>
                <button className='flex items-center gap-2 font-semibold'>
                    Learn More
                    <RightIcon/>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Hero