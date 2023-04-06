import { BsGithub, BsLinkedin } from 'react-icons/bs'

export default function AboutMe() {
    return (
    <section id='aboutMe' className='mb-12 min-[805px]:pt-60'>
          <div className='grid grid-cols-1 grid-rows-3 gap-y-5'>
            <h1 className={`font-PlayfairDisplay text-[3.6rem] max-[414px]:text-[3rem] max-[354px]:text-[2rem] leading-snug font-semibold text-center flex flex-col`}>
            <span>Hello<span className='font-OpenSans'>!</span> I'm </span><span className='text-color10 text-7xl max-[414px]:text-6xl max-[354px]:text-[2.6rem]'>Arquímedes V.</span> a self taught web developer.
            </h1>
            <div className='grid grid-rows-1 grid-cols-2 w-full justify-items-center items-center'>
            <a href="https://www.linkedin.com/in/arquimedes-vasquez-668964238/" target={'_blank'} rel='noopener noreferrer'>
              <BsLinkedin className='text-color10 h-28 w-auto hover:text-color30 max-[414px]:h-16 max-[300px]:h-12' />
            </a>
            <a href="https://github.com/Reniactor" target={'_blank'} rel='noopener noreferrer'>
              <BsGithub className='text-color10 h-28 w-auto hover:text-color30 max-[414px]:h-16 max-[300px]:h-12'/>
            </a>
            </div>
            <p className={`font-RobotoSerif text-3xl max-[414px]:text-2xl max-[300px]:text-xl px-2 font-light text-center min-[805px]:w-1/2 min-[805px]:justify-self-center`}>
            I strive to deliver an excellent product, it’s a top priority for me to provide a balance between a robust <span className='text-color10'>UX</span> and an appealing <span className='text-color10'>UI</span>.
            </p>
          </div>
    </section>
    )
}