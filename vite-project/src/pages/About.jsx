import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';



import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Aditya Pratap Singh
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        I’m a passionate UI/UX designer and full-stack developer with hands-on internship experience.
         My creativity drives me to design intuitive and user-friendly web experiences, and I have worked on both front-end and back-end development for various projects, including e-commerce platforms. 
         I aspire to become a great coder, continuously learning and improving my skills.
Beyond coding, I have a strong background in sports—I was a national football player, representing my school multiple times at the national level.
 My passion for extracurricular activities extends to art and chess, where I love exploring creativity and strategy.
I’m always eager to collaborate, learn, and take on new challenges. Let’s connect and create something impactful together!
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          As a motivated and creative fresher, I have gained hands-on experience through internships and entrepreneurial projects. My background includes UI/UX design, full-stack development, sales and marketing, and Android development. Additionally, 
          I co-founded De Novo, an online street-style clothing brand, showcasing my ability to blend business, design, and technology. My internship experiences across various industries have helped me develop problem-solving, teamwork, and project management skills.
           I am eager to apply my knowledge and creativity to dynamic opportunities in the tech and business domains:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <div
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200' />
      <div className="mt-10 flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/aditya-pratap-singh-179638309/" // Replace with your LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-xl font-bold"
        >
        <img 
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
            alt="LinkedIn" 
            className="w-10 h-10 hover:opacity-80"
          />
        </a>

        <a
          href="https://github.com/dashboard" // Replace with your GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-900 text-xl font-bold"
        >
         <img 
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
            alt="GitHub" 
            className="w-10 h-10 hover:opacity-80"
          />
        </a>

        <a
          href="/Contact" // Replace with your Twitter/X
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 text-xl font-bold"
        >
        <img 
      src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
      alt="Gmail" 
      className="w-10 h-10 hover:opacity-80"
    />
        </a>
      </div>


     

      
    </section>
  );
};

export default About;