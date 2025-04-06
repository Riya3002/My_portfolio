import React from "react";
import Card from "@/components/cards/webcard";
import ECard from "@/components/cards/embedded";
import Work from "@/components/Work";
import Navbar from "@/components/Navbar";
const Projects = () => {
  return (
    <>
      <Navbar />
      <div
        className=" text-white "
        style={{
          backgroundImage: `url('/bg_project.jpeg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div>
          <Work />
        </div>
        <div>
        <div>
          <div className=" flex  justify-center text-[30px] py-8 underline">
            Embedded Systems Projects and Contributions
          </div>
          <div className="flex flex-wrap row justify-center gap-6 p-8">
            <ECard
              title={["Nanonavigator"]}
              content="Using cutting-edge sensors, precision motors and advanced control algorithms, our micromouse was
programmed to efficiently explore and intricate maze layouts autonomously.
Tech: STM32F1xxx, Buck/Boost Converters, DC motors, L293D, IR and Ultrasonic Sensors"
              src={"/robo.jpg"}
            />
            <ECard
              title={["Human Fall Detection System"]}
              content="Wearable device for real-time fall detection and prevention, featuring multi-level alerts and
data synchronization for emergency response.Tech: ESP32, MPU6050, BMP180, Hall Effect Sensor, GPS, IoT, Mobile App"
              src={"/robo.jpg"}
            />
            <ECard
              title={["Faraday Station"]}
              content="Prototype for charging the moving electric vehicles by a chain of induction plates under the roads
Tech: Copper inductive coils, Rectifiers, Converters"
              src={"/robo.jpg"}
            />
            <ECard
              title={["Morse Code based Authentication System"]}
              content="Back door for authentication system using morse code for unlock"
              src={"/robo.jpg"}
            />
            <ECard
              title={["Bionic Prosthetic Arm"]}
              content="A fully functional patient specific 3D printed transradial bionic prosthetic arm, capable of identifying gestures to be performed, through a hybrid signal acquisition system with EEG cap and EMG sensors"
              src={"/robo.jpg"}
            />
          </div>
        </div>
          <div className=" flex justify-center text-[30px] py-8 underline">
            Website Development Projects and Contributions
          </div>
          <div className="flex row justify-evenly p-8">
            <Card
              title={[" Jugaad Robotics Club", "UIET,PU"]}
              content="Tech stack include: Nextjs,typescript, tailwindcss, framermotion, mongoDB "
              linkUrl="https://jugaadclub.vercel.app/"
            />
            <Card
              title={["Software Freedom Day", "Website"]}
              content="Tech stack include: Nextjs,typescript, tailwindcss,css "
              linkUrl="https://softwarefreedomday.in/"
            />
            <Card
              title={["My Portfolio"]}
              content="Tech Stack Included: NextJS, Typescript, TailwindCSS, CSS, ThreeJS"
              linkUrl="/"
            />
            <Card
              title={["Design Innovation Centre", " Panjab University"]}
              content="Tech Stack Included: Wordpress"
              linkUrl="https://dicpu.in/"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
