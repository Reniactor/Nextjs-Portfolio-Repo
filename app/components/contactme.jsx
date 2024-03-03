import { BsGithub, BsMailbox } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function ContactMe() {
  return (
    <section
      id="contactMe"
      className="flex flex-col gap-y-4 w-full h-fit mb-14 duration-200 transform transition-all"
    >
      <h1 className="text-5xl  ml-10 md:ml-24 max-[414px]:ml-2 max-[414px]:text-3xl font-OpenSans font-bold w-full mb-4 lg:ml-60">
        Contact{" "}
        <span className="text-color10 font-RobotoSerif text-[3.8rem] max-[414px]:text-[2.5rem]">
          me
        </span>
      </h1>
      <ul
        className=" flex 
                            w-full 
                            font-RobotoSerif 
                            justify-between 
                            text-xl
                            max-[414px]:text-xs  
                            sm:text-2xl
                            md:justify-around
                            md:w-3/4  
                            md:text-3xl 
                            lg:justify-evenly"
      >
        <li>
          <a
            href="https://github.com/Reniactor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center color hover:text-color10 duration-200"
          >
            <BsGithub className="mr-1 text-color10" /> Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/arquimedes-vasquez-668964238/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center color hover:text-color10 duration-200"
          >
            <SiLinkedin className="mr-1 text-color10" /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+573015157686"
            target={`_blank`}
            className="flex items-center color hover:text-color10 duration-200"
          >
            <SiWhatsapp className="mr-1 text-color10" /> Whatsapp
          </a>
        </li>

        {/* <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">Pending</a>
                    </li> */}
        {/* <li>
                    <a href="mailto:arquimedes_elio16@hotmail.com" className="flex items-center color hover:text-color10 duration-200"><BsMailbox className="mr-1 text-color10" /> Mail</a>
                    </li> */}
      </ul>
    </section>
  );
}
