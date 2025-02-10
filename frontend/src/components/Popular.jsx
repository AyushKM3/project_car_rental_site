import React from 'react'
import Car1 from '../assets/Car1.png'
import Car2 from '../assets/car2.png'
import Car3 from '../assets/Car3.PNG'

const Popular = () => {
      const CarList = [
        {
          name: "Jeep Compass",
          price: 5000,
          image: Car1,
          aosDelay: 100
        },
        {
          name: "Porsche 911",
          price: 8000,
          image: Car2,
          aosDelay: 200
        },
        {
          name: "Vintage Car",
          price: 6000,
          image: Car3,
          aosDelay: 300
        }
      ]
      
  return (
    <div className='bg-slate-200 text-black dark:bg-[#0d0a06] dark:text-white duration-100'>
        <div className=' min-h-[600px] p-14 '>
            <div>
            <h2 data-aos='fade-up' className='md:text-6xl text-4xl font-extrabold text-center py-4'>Popular Models</h2>
            </div>
            <div>
                <p data-aos='fade-right' className='py-5 sm:text-left text-center md:text-xl text-lg'>Explore our most sought-after vehicles that blend style, comfort, and performance. 
                    Whether you're seeking luxury or practicality, these models stand out as customer favorites for a reason:</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 '>
               {
                CarList.map((v,i)=>{
                    return(
                    <div data-aos='fade-up'  data-aos-once='false' key={i} className='border-2 text-center p-4 flex justify-center items-center rounded-2xl  duration-1000 group'>
                        <div>
                        <img   className='w-full translate-x-[-50px] group-hover:translate-x-[5px] duration-1000' src={v.image} alt=""/>
                        </div>
                        <div  data-aos='fade-right' data-aos-duration='1000' data-aos-once='false' data-aos-delay={v.aosDelay} className='space-y-6'>
                            <h3 className='font-bold md:text-xl text-2xl'>{v.name}</h3>
                            <p className='text-center font-extrabold'>₹{v.price}/DAY</p>
                            <button className='text-sm cursor-pointer'>Click for more Details</button>
                        </div>

                    </div>
                    )
                })
               }
            </div>

           <div className='flex justify-center items-center'>
            <h1 data-aos='fade-up' data-aos-delay='1500' className='text-4xl my-10 text-center font-extrabold text-amber-400'>
            Book Your Ride Today 
           </h1> 
           </div>
        </div>
    </div>
  )
}

export default Popular