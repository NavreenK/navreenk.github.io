import { LinkIcon } from '@heroicons/react/20/solid'
import aboutMeImg from '../nkDesign.png'

function AboutMe() {
  return (
    <div id="aboutMe" className="m-auto grid grid-cols-1 md:grid-cols-2 max-w-2xl max-w-screen-lg">
      <div className="lg:col-start-1 lg:row-start-1 justify-self-center">
      <img className="max-h-[500px]" src={aboutMeImg} loading="lazy" />
      </div>
      <div className="lg:row-start-1 lg:col-start-2 lg:ml-5 m-4">
      <h2 className="headerFont mt-16 text-3xl font-bold text-zinc-800">about me</h2>
        <p className="textFont text-zinc-800 mt-6">
                  I’m a mission-driven Software Engineer based in Seattle, WA.
                  I am passionate about creating intuitive user experiences that clearly communicate complex ideas and leave a lasting impact on users.
                  I love combining my knowledge in 
                  <strong> engineering </strong> 
                  with my interest for <strong> design. </strong>
                  <br></br><br></br>
                  I care deeply about how technology can enhance people’s lives, which is why I’m especially interested in how artificial intelligence can be used to positively shape user experiences.
                  <br></br><br></br>
                  Outside of code, I’m endlessly curious and creative, from writing and photography to exploring how technology can shape human experiences. 
                  At the core, I care about using software to tell stories, connect people, and make everyday interactions simpler and more meaningful.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
