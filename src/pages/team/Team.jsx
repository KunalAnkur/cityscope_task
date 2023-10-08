import React from "react";
import "./Team.css";
import { teamData } from "../../data";
import { TeamCard } from "../../components";
const Team = () => {
  return (
    <div className="team-page">
      <h2 className="intro-topic">
        Without bonding and coordination, every project is a failure. Look at
        who makes KICKSUP great. ;)
      </h2>
      <div className="team-list">
        {teamData.map((team, index) => (
          <TeamCard key={index} name={team.name} designation={team.designation} imageSource={team.imageSource} links={team.links} />
        ))}
        <div className="backgroud-pattern">
          <div className="strip"></div>
          <div className="strip"></div>
        </div>
      </div>
      <h2 className="intro-topic">
        and you! ;)
      </h2>
    </div>
  );
};

export { Team };
