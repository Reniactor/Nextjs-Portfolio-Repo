import { BsGithub, BsMailbox } from "react-icons/bs"
import { CgMail } from "react-icons/cg"
import { SiLinkedin, SiWhatsapp } from "react-icons/si"


export default function ContactMe() {
    return (
        <section id="contactMe" className="flex flex-col gap-y-4 w-full h-fit mb-14">
            <h1 className="text-5xl font-OpenSans font-bold w-full mb-4 lg:ml-60">Contact <span className="text-color10 font-RobotoSerif text-[3.2rem]">me</span></h1>
            <ul className="flex w-full text-xl font-RobotoSerif justify-evenly">
                <li>
                    <a href="https://github.com/Reniactor" target="_blank" rel="noopener noreferrer" className="flex items-center color hover:text-color10"><BsGithub className="mr-2 text-color10" /> Github</a>
                    </li>
                <li>
                    <a href="https://www.linkedin.com/in/arquimedes-vasquez-668964238/" target="_blank" rel="noopener noreferrer" className="flex items-center color hover:text-color10"><SiLinkedin className="mr-2 text-color10" /> LinkedIn</a>
                    </li>
                <li>
                    <a href="https://wa.me/+584248582445" target={`_blank`} className="flex items-center color hover:text-color10"><SiWhatsapp className="mr-2 text-color10" /> Whatsapp</a>
                    </li>

                    
                {/* <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">Pending</a>
                    </li> */}
                <li>
                    <a href="mailto:arquimedes_elio16@hotmail.com" className="flex items-center color hover:text-color10"><BsMailbox className="mr-2 text-color10" /> Mail</a>
                    </li>
            </ul>

        </section>
    )
}