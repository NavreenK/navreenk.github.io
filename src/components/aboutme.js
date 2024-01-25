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
                  I’m a Front-End/UX developer based in Seattle, WA.
                  I am passionate about building things from scratch and developing accessible user interfaces to empower people. 
                  I love combining my knowledge in 
                  <strong> engineering </strong> 
                  with my interest for <strong> design. </strong>
                  <br></br><br></br>
                  I want to use my skills to enhance peoples lives which is why 
                  I am also passionate about how artificial intelligence can be used to positively impact user experiences! 
                  <br></br><br></br>
                  When I'm not in front of a computer screen, I enjoy baking, playing Tears of the Kingdom, and riding my bike.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
