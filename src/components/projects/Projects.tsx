import { v4 as uuidv4 } from "uuid";
import CardNews from "./components/CardContent";
import CarouselComponent from "./components/CarouselComponent";
import React from "react";

export default function Projects() {
  let cards = [
    {
      key: uuidv4(),
      content: <CardNews
        title={"CrimeScene Atlas"}
        link={"https://github.com/AkshithaReddy1899/psycho-search"}
        description={"Explore infamous psychopaths from history on our interactive map, featuring a clickable list for easy exploration and locations associated with their crimes and exploits. Built as a seamless single-page application with React."} />
    },
    {
      key: uuidv4(),
      content: <CardNews
        title={"Budget App"}
        description={"Stay on top of your finances with our Budget app, a comprehensive full-stack application built with Ruby. Easily track your daily expenses across multiple categories, gaining valuable insights into your spending habits and helping you make informed decisions about your financial future."}
        link={"https://github.com/AkshithaReddy1899/Budget-app"}
      />
    },
    {
      key: uuidv4(),
      content: <CardNews title={"Menu App"}
        description={"This innovative digital menu app is designed to cater to the needs of both partners and customers. Built with Flutter, this robust platform utilizes a single codebase to power both the mobile app and responsive web application, enabling effortless menu updates and hassle-free payments."} link={"https://github.com/AkshithaReddy1899/digital_menu"}
      />

    },
    {
      key: uuidv4(),
      content: <CardNews title={"Relational Migration"}
        description={"This project involves migrating data from an SQL database to a NoSQL system. It includes adapting the data structure, ensuring consistency, and optimizing performance for the new system. The goal is to ensure a smooth transition while maintaining data integrity and functionality."}
        link={""}
      />

    },
    {
      key: uuidv4(),
      content: <CardNews title={"Productivity App"}
        description={"A cutting-edge productivity mobile app, built with Flutter, harnesses the power of native features to help you stay focused. Track your screen time and app usage with precision, and block distracting apps to stay on track."}
        link={"https://github.com/akshitha-reddy-yadla/focus"}
      />

    }
  ];
  return (
    <div className="App">
      <CarouselComponent
        cards={cards}
        height="500px"
        width="90%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}
