import logo from '../public/logo.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
        <nav className="flex items-center h-[50px] p-[50px] bg-black">
            <Image src={logo} className='w-[300px] h-[150px]'/>
            <ul className='flex text-white ml-[30%] gap-[30px] text-[20px] '>
                <a className='' href='/'>Home</a>
                <a href='/Index2'>Films</a>
                <li>Register</li>
                <li>About us</li>
                <li>Contacts</li>
            </ul>
            <button className='bg-[red] h-[40px] w-[100px] rounded-[25px] text-white ml-[3%] text-[20px]'>sing in</button>
        </nav>
    </>
  )
}

export default Navbar