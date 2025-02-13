import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import Cafe from "../assets/images/Cafe.png";
import food from "../assets/images/food.png";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        As a passionate developer and designer, I have worked on diverse projects
        ranging from UI/UX design to full-stack development. My projects include
        designing an admin dashboard, building a super responsive website for a
        clothing brand, and developing an e-commerce platform during my
        internship. Additionally, I have explored Android development, creating
        basic applications as part of my internship at EduSkill. Through these
        projects, I have gained experience in frontend and backend technologies,
        responsive design, and user-centered development.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container" style={{ width: "10rem", height: "6rem" }}>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div
                className="btn-front"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  
                }}
              >
                <img
                  src={project.image} // ✅ Using local images
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
    </section>
  );
};

export default Projects;
