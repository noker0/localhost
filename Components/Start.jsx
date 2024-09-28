import logo from '../public/c.jpg';
import Image from 'next/image';

const Start = () => {
  return (
    <>
        <div className="">
            <Image src={logo} className='absolute w-[100%] h-[700px] z-[-1]'/>
            <div className="flex justify-center items-center h-[700px]">
                <div className="">
                <p className='text-[60px] text-[white] w-[700px] text-center'>Unlimited movies, TV shows, and more</p>
                <div className="flex gap-[20px] justify-center mt-[20px]">

                <input type="text" className='w-[350px] bg-black border-white border-[2px]' placeholder='Email Adress'/>
                <button className='text-white text-[20px] bg-[red] h-[50px] w-[200px]'>get started</button>
                </div>
                </div>
            
                   

               
            </div>
          
        </div>
    </>
  )
}

export default Start