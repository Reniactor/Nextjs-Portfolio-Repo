import { TbBrandNextjs } from 'react-icons/tb'
import { DiMongodb, DiReact, DiCss3, DiHtml5, DiJavascript1, DiNodejs } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'
import Card from './card'


export default function Skills() {
    return (
        <section id='skills' className='w-full flex flex-col items-center gap-4 mb-24 min-[805px]:pt-36'>
            <h1 className='text-7xl font-PlayfairDisplay font-bold mb-8'>Skills</h1>
                <div className='grid-container grid grid-cols-2 gap-x-14 gap-y-4 max-[377px]:gap-x-3 max-[378px]:gap-y-[4rem] max-[378px]:grid-cols-1 w-full'>
                    <Card
                    icon={<DiReact className="text-color10 w-[4.5rem] h-auto min[805px]:w-[7.8rem] max-[414px]:w-[3rem] max-[300px]:w-[2.5rem]"/>}
                    name='ReactJs'
                    description='1.5 years of experience (As a matter of fact, this page was built with it!)'
                    />
                    <Card
                    icon={<TbBrandNextjs className="text-color10 w-[4.5rem] h-auto min[805px]:w-[7.8rem] max-[414px]:w-[3rem] max-[300px]:w-[2.5rem]"/>}
                    name='NextJs'
                    description='1 year of experience (This page also used NextJs, along with TailWindCss)'
                    />
                    <Card
                    icon={<DiHtml5 className="text-color10 w-[4.5rem] h-auto min[805px]:w-[7.8rem] max-[414px]:w-[3rem] max-[300px]:w-[2.5rem]"/>}
                    name='HTML'
                    description="3 years of experience, i have used it all over every web project i've ever had"
                    />
                    <Card
                    icon={<DiCss3 className="text-color10 w-[4.5rem] h-auto min[805px]:w-[7.8rem] max-[414px]:w-[3rem] max-[300px]:w-[2.5rem]"/>}
                    name='CSS'
                    description="3 years of experience, i have used it all over every web project i've ever had"
                    />
                    <Card
                    icon={<DiJavascript1 className="text-color10 w-[4.5rem] h-auto min[805px]:w-[7.8rem] max-[414px]:w-[3rem] max-[300px]:w-[2.5rem]"/>}
                    name='JavaScript'
                    description='3 years of experience, including the use of a wide variety of libraries'
                    />
                    <Card
                    icon={<DiNodejs className="text-color10 w-[4.5rem] h-auto min[805px]:w-[7.8rem] max-[414px]:w-[3rem] max-[300px]:w-[2.5rem]"/>}
                    name='NodeJs'
                    description='1.5 years of experience. Mainly by building automation tools for startups'
                    />
                    <Card
                    icon={<SiExpress className="text-color10 w-[4.5rem] h-auto min[805px]:w-[7.8rem] max-[414px]:w-[3rem] max-[300px]:w-[2.5rem]"/>}
                    name='Express'
                    description="1 year of experience. Used along with NodeJs projects i've had ever since i learnt it"
                    />
                    <Card
                    icon={<DiMongodb className="text-color10 w-[4.5rem] h-auto min[805px]:w-[7.8rem] max-[414px]:w-[3rem] max-[300px]:w-[2.5rem]"/>}
                    name='MongoDB'
                    description="0.7 years of experience. Lowest experience since i haven't had the opportunity to use it as often"
                    />

                </div>
        </section>
    )
}
