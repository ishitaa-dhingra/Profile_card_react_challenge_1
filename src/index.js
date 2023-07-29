import { StrictMode } from "react";
import { createRoot } from "react-dom";
import "./styles.css";

const skills = [
  {
    skill: "C++",
    level: "advanced",
    color: "#707070"
  },
  {
    skill: "HTML",
    level: "advanced",
    color: "	#696969"
  },
  {
    skill: "CSS",
    level: "intermediate",
    color: "#A0A0A0"
  },
  {
    skill: "Javascript",
    level: "intermediate",
    color: "#909090"
  },
  {
    skill: "React",
    level: "beginner",
    color: "#989898"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="ishitaa.jpeg" alt="profile_pic" />;
}

function Intro() {
  return (
    <div>
      <h1>Ishitaa Dhingra</h1>
      <p>Hi :)</p>
      <p>
        I'm a prefinal B.Tech student pursuing computer science and an aspiring
        frontend developer. I'm just someone who loves continuous learning and
        currently exploring React.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill">
      <span>{skill} </span>
      <span> {level === "beginner" && "👶"}</span>
      <span> {level === "intermediate" && "👧"}</span>
      <span> {level === "advanced" && "💪"}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
