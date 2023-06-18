import React, { useEffect } from "react";
import "../HomeStyle.css";
import ProCard from "../../components/ProCard";
import NavBar from "../../components/NavBar";

 var proDetails = [
   {
     title: "Winner of SIH 2022 Software Edition.",
     about:
       "Our team PRGRAMMERIX, representing BIT SINDRI, emerged victorious in the SIH2022 Grand Final. Over 36 intense hours, we competed against numerous talented teams, ultimately winning in our assigned problem statement, RS924, under the Department of Social Justice and Empowerment.Our task was to develop a web application that would simplify the selection process for students seeking education. Additionally, we aimed to address delays in the funding process. Our solution focused on connecting these students with suitable coaching institutes and financial assistance. Through our dedication and collaboration, we created a user-friendly web application that effectively tackled the core challenges in the problem statement. This victory is a testament to my team work, perseverance, and commitment to making a positive impact on society.",
     link: "https://github.com/Modern-artist/Ananta",
   },
   { title: "Qualified for an International Competion COFAS" },
   { title: "Contrubuted in our College wedsite" },
 ];

const Project = () => {
  return (
    <div>
      <NavBar />
      <div className="allProject">
        {proDetails.map((x, i) => (
          <ProCard title={x.title} about={x.about} link={x.link} />
        ))}
      </div>
    </div>
  );
};

export default Project;
