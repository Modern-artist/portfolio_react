import React from "react";
import NavBar from "../../components/NavBar";
import EachAch from "../../components/EachAch";

      var achiveDetails = [
        {
          title: "Winner of SIH 2022 Software Edition.",
          about:
            "Our team PRGRAMMERIX, representing BIT SINDRI, emerged victorious in the SIH2022 Grand Final. Over 36 intense hours, we competed against numerous talented teams, ultimately winning in our assigned problem statement, RS924, under the Department of Social Justice and Empowerment.Our task was to develop a web application that would simplify the selection process for students seeking education. Additionally, we aimed to address delays in the funding process. Our solution focused on connecting these students with suitable coaching institutes and financial assistance. Through our dedication and collaboration, we created a user-friendly web application that effectively tackled the core challenges in the problem statement. This victory is a testament to my team work, perseverance, and commitment to making a positive impact on society.",
          imgUrl:
            "https://images.collegedunia.com/public/image/d278e1faec516ba09db0206632e389d6.png?tr=w-636,h-400,c-force",
        },
        {
          title: "Qualified for an International Competion COFAS",
          about:
            "More than twenty professors from diverse academic fields and universities will discuss how they integrate their vocation in science with a life of faith and virtue. In doing so, they – and all Christians – are called to bring the shalom of God to all of life. The very word “virtue” may strike the modern or postmodern ear as “quaint” or “naive,” a concept thought to have been debunked by the relativistic skepticism that dominates our culture. It was precisely this relativism that C.S. Lewis sought to counter in his brief but brilliant book The Abolition of Man. Lewis’s argument for objective value and his warnings about the dangerous consequences of science without virtue are even more relevant today than when he first presented his lectures in 1943.Almost eighty years later, at COFAS 2022, we will consider the relationship between science and the Christian virtues of Faith, Hope, and Love, as well as other virtues of Wisdom, Humility, and Peace.",
          imgUrl:
            "https://diariofarma.com/wp-content/uploads/2022/10/20221020-FORO-COFAS-PONENTES1.jpg",
        },
        {
          title: "Contributed in our College website",
          about:
            "I am proud to have contributed to the design of our college website. As a member of the web design team, I utilized my creative skills and technical expertise to enhance the user experience and visual appeal. Collaborating with my team, we revamped the layout, implemented intuitive navigation, and incorporated modern design elements. The result was a more engaging and user-friendly platform that effectively showcased our college's offerings. It was a fulfilling experience to contribute to our college's digital presence and create a visually appealing website that represents our institution effectively. The opportunity to collaborate with talented individuals on this project allowed me to refine my skills, learn new techniques, and gain a deeper understanding of the importance of effective design in conveying information and creating a strong online presence.",
          imgUrl:
            "https://www.bitsindri.ac.in/old/images/slide/2022/EE6DCBE6-20FD-4B0E-8154-EB2166F485E4.jpeg",
        },
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
          <EachAch title={x.title} about={x.about} imgUrl={x.imgUrl} index={i} />
        ))}
      </div>
    </div>
  );
};

export default AllAchivements;
