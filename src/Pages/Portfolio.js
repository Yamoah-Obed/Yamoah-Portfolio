import React from "react";
import "../AllCss/Portfolio.css";
import { PortfolioList } from "../Component/PortfolioList";
import Project from "../Component/Project";

const Portfolio = () => {
  return (
    <section className="Portfolio">
      <div className="PortfolioContainer">
        <div className="PortfolioTitle">
          <h2>PORTFOLIO</h2>
        </div>
        <div className="PortfolioLineContainer">
          <div className="PortfolioLine"></div>
        </div>
        <p style={{ textAlign: "center" }}>CHECK OUT SOME OF MY PROJECTS</p>
      </div>
      <div className="p">
        <div className="portfolioListContainer">
        <div className="portfolioList">
          {PortfolioList.map((projects, key) => {
            return (
              <Project key={key} pic={projects.pic} name={projects.name} />
            );
          })}
        </div>
      </div></div>
      
    </section>
  );
};

export default Portfolio;
