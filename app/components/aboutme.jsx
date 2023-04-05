import { BsGithub, BsLinkedin } from 'react-icons/bs'

export default function AboutMe() {
    return (
    <section id='aboutMe' className='mb-12'>
          <div className='grid grid-cols-1 grid-rows-3 gap-y-5'>
            <h1 className={`font-PlayfairDisplay text-[3.1rem] leading-snug font-semibold text-center flex flex-col`}>
            <span>Hello<span className='font-OpenSans'>!</span> I'm </span><span className='text-color10 text-7xl'>Arquímedes V.</span> a self taught web developer.
            </h1>
            <div className='grid grid-rows-1 grid-cols-2 w-full justify-items-center items-center'>
            <a href="https://www.linkedin.com/in/arquimedes-vasquez-668964238/" target={'_blank'} rel='noopener noreferrer'>
              <BsLinkedin className='text-color10 h-36 w-auto hover:text-color30' />
            </a>
            <a href="https://github.com/Reniactor" target={'_blank'} rel='noopener noreferrer'>
              <BsGithub className='text-color10 h-36 w-auto hover:text-color30'/>
            </a>
            </div>
            <p className={`font-RobotoSerif text-3xl font-light text-center`}>
            I strive to deliver an excellent product, it’s a top priority for me to provide a balance between a robust <span className='text-color10'>UX</span> and an appealing <span className='text-color10'>UI</span>.
            </p>
          </div>
    </section>
    )
}