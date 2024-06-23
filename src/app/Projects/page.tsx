import React from "react";
import Card from "@/components/cards/webcard";
import ECard from "@/components/cards/embedded";
import Work from "@/components/Work";
import Navbar from "@/components/Navbar";
const Projects =()=>{
    return(
        <>
        <Navbar/>
        <div className=" text-white " style={{backgroundImage:`url('/bg_project.jpeg')`, backgroundRepeat: "no-repeat", backgroundSize:'cover', backgroundAttachment:'fixed'}}>
            <div>
                <Work/>
            </div>
            <div>
                <div className=" flex justify-center text-[30px] py-8 underline">Website Development Projects and Contributions</div>
                <div className="flex row justify-evenly p-8">
                    <Card title={[" Jugaad Robotics Club","UIET,PU"]} content="Tech stack include: Nextjs,typescript, tailwindcss, framermotion, mongoDB "  linkUrl="https://jugaadclub.vercel.app/"/>
                    <Card title={['Software Freedom Day','Website']} content="Tech stack include: Nextjs,typescript, tailwindcss,css "  linkUrl="https://softwarefreedomday.in/"/>
                    <Card title={['Design Innovation Centre',' Panjab University']} content="Tech Stack Included: Wordpress" linkUrl="https://dicpu.in/"/>
                    <Card title={["My Portfolio"]} content="Tech Stack Included: NextJS, Typescript, TailwindCSS, CSS, ThreeJS" linkUrl="/"/>
                </div>
            </div>
        <div>
            <div className=" flex justify-center text-[30px] py-8 underline">Embedded Systems Projects and Contributions</div>
            <div className="flex row justify-evenly p-8">
                <ECard title={['Bionic Prosthetic Arm']} content='Operates on bio signals acquired using myoware sensor and EEG cap' src={''}/>
                <ECard title={['Nanonavigator']} content='controlled using STM32 microcontroller, operates on floodfill algorithm and combination of various sensors' src={''}/>
                <ECard title={['Morse Code based Authentication System']} content='Back door for authentication system using morse code for unlock' src={''}/>

            </div>
        </div>
        </div>
        </>
    )
}
export default Projects;