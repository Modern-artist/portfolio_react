import React from "react";
import NavBar from "../../components/NavBar";
import EachAch from "../../components/EachAch";

      var achiveDetails = [
        { title: "Winner of SIH 2022 Software Edition.", about:"Our team PRGRAMMERIX, representing BIT SINDRI, emerged victorious in the SIH2022 Grand Final. Over 36 intense hours, we competed against numerous talented teams, ultimately winning in our assigned problem statement, RS924, under the Department of Social Justice and Empowerment.Our task was to develop a web application that would simplify the selection process for students seeking education. Additionally, we aimed to address delays in the funding process. Our solution focused on connecting these students with suitable coaching institutes and financial assistance. Through our dedication and collaboration, we created a user-friendly web application that effectively tackled the core challenges in the problem statement. This victory is a testament to my team work, perseverance, and commitment to making a positive impact on society."},
        { title: "Qualified for an International Competion COFAS" },
        { title: "Contrubuted in our College wedsite" },
      ];

const AllAchivements = () => {
  return (
    <div className="AllAchivements">
      <NavBar />
      <div className="achiveBgText">
        <span>Achivements</span>
      </div>
      <div className="ScrollAch">
        {achiveDetails.map((x, i) => (
          <EachAch title={x.title} about={x.about} index={i} />
        ))}
      </div>
    </div>
  );
};

export default AllAchivements;
