import React, { useEffect } from "react";
import "../HomeStyle.css";
import ProCard from "../../components/ProCard";
import NavBar from "../../components/NavBar";

 var proDetails = [
   {
     title: "Build and designed Solarway website",
     about:
       "Solarwayz Technologies is a leading provider of solar permit design and proposal layout services in the United States. Our team of experienced engineers, designers, and proposal specialists is dedicated to helping residential and commercial solar energy projects obtain permits and win more business. We offer comprehensive services including site analysis, system design, permit documentation, and custom proposal layouts. Our focus is on delivering exceptional customer service and support throughout the entire process. With a deep understanding of local and state regulations, we ensure compliance and efficient project completion. At Solarwayz Technologies, we are passionate about solar energy and strive to provide tailored solutions that meet the unique needs of each client. Choose Solarwayz Technologies for your solar permit design and proposal layout needs and let us help you achieve your solar energy goals. ",
     link: "https://www.solarwayz.com/index.html",
     imgName: "solar.png",
   },
   {
     title: "Build and designed ANANTA",
     about:
       "ANANTA is a medical website dedicated to combating the organ donation shortage in India. With thousands of patients dying each year due to the lack of donations, ANANTA aims to increase awareness and promote healthy living. Through debunking myths and providing education, the website empowers individuals to make informed decisions about organ donation. ANANTA offers 24/7 medical expert consultation to address concerns and provide guidance. Additionally, it provides detailed information about organ donation procedures and offers personalized health plans. By raising awareness and promoting a healthy lifestyle, ANANTA strives to make a difference in the lives of those in need of organ transplants. ",
     link: "https://github.com/Modern-artist/Ananta",
     imgName: "ananta.png",
   },
   {
     title: "Designed Alankar",
     about:
       "I have created an entertainment website that excels in API handling and prioritizes a captivating UI/UX. Through efficient API integration, the website retrieves and manipulates data from various sources. Meanwhile, the UI/UX design emphasizes a visually appealing layout, intuitive navigation, and interactive elements. The website offers a wide range of entertainment content such as movies, TV shows, and music. The seamless integration of API handling ensures the availability and accuracy of data, while the well-crafted UI/UX enhances user engagement and satisfaction. With a perfect balance between API functionality and user-centered design, the website provides an immersive and enjoyable entertainment experience for its visitors.",
     link: "https://github.com/Modern-artist/entertainmentHub",
     imgName: "alankar.jpeg",
   },
   {
     title: "Designed FIT HOUSE application",
     about:
       "At FIT HOUSE, we are developing a unique digital platform that serves as a social networking hub for health enthusiasts and individuals seeking reliable health information. Our platform stands out as the world's most curated and verified source of health knowledge. We believe in making learning about health engaging and exciting, which is why we have designed special features to help instill healthy habits in our users. With just a click, our platform offers a complete 360-degree health ecosystem. We provide a wealth of carefully curated health information, ensuring that our users have access to accurate and trustworthy resources. Additionally, we foster the formation of health-focused communities, allowing individuals to connect, share insights, and support one another on their wellness journeys.",
     link: "https://github.com/Modern-artist/Ananta",
     imgName: "ejy.jpeg",
   },
   {
     title: "Build and designed Entertainment Website",
     about:
       "I have created an entertainment website that excels in API handling and prioritizes a captivating UI/UX. Through efficient API integration, the website retrieves and manipulates data from various sources. Meanwhile, the UI/UX design emphasizes a visually appealing layout, intuitive navigation, and interactive elements. The website offers a wide range of entertainment content such as movies, TV shows, and music. The seamless integration of API handling ensures the availability and accuracy of data, while the well-crafted UI/UX enhances user engagement and satisfaction. With a perfect balance between API functionality and user-centered design, the website provides an immersive and enjoyable entertainment experience for its visitors.",
     link: "https://github.com/Modern-artist/entertainmentHub",
     imgName: "entertainmantHub.jpeg",
   },
 ];


const Project = () => {
  return (
    <div>
      <NavBar />
      <div className="allProject">
        {proDetails.map((x) => (
          <ProCard title={x.title} about={x.about} link={x.link} imgName={x.imgName} />
        ))}
      </div>
    </div>
  );
};

export default Project;
