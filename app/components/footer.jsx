import { AiFillHeart } from 'react-icons/ai'
import { SiNextdotjs } from 'react-icons/si'

export default function Footer() {
    return(
    <footer className='text-color30 text-center bg-color60 w-full'>
                <p className={`font-RobotoSerif w-full flex gap-3 justify-center items-center text-xl max-[414px]:text-sm`}>Built with <AiFillHeart className='text-color10 h-10 w-auto'/> and <SiNextdotjs className='text-color10 h-10 w-auto' /> </p>
    </footer>
    )
}