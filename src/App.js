import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import AboutMe from './components/aboutme';

function App() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-orange-50/[.50] px-6 py-24 sm:py-32 lg:py-16 lg:overflow-visible lg:px-0">
        <div className="m-auto max-w-2xl max-w-screen-lg lg:items-start lg:gap-y-10">
          <div className="sm:p-12 p-4 lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div className="lg:pr-4 lg:mx-auto lg:grid justify-self-center lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-12">
              <div className="lg:max-w-3xl">
                <p className="centerText text-base font-semibold leading-7 text-rose-500">Hello! 👋</p>
                <h1 className="headerFont projectLink w-fit mt-2 text-4xl font-bold text-zinc-800 sm:text-5xl">navreen kaur</h1>
                <p className="centerText textFont mt-6 text-xl leading-8 text-zinc-800 tracking-tight">
                  I'm Navreen Kaur, a design-minded front-end developer passionate about developing pixel-perfect user interfaces and experiences for all 👩🏽💻
                </p>
              </div>
              <div className="group justify-center grid xs:flex mt-8">
                <div className="self-center">
                <a className="hidden font-medium text-zinc-800 rounded-full bg-amber-400 hover:bg-amber-500 px-7 py-2.5" href="https://navreenk.github.io/resume.pdf" type="application/pdf" target="_blank">view resume</a>
                <a className="font-medium text-zinc-800 rounded-full bg-amber-400 hover:bg-amber-500 px-7 py-2.5 ml-2 xs:ml-4 smallScreenButton" href="https://navreenkaur.notion.site/navreenkaur/Navreen-s-Work-edbb3866c86f44a392b8bb4fb15fbc42" target="_blank">project archive</a>
                </div>
                <div className="xs:mt-0 mt-8">
                <a href="https://github.com/NavreenK" target="_blank">
                <span className="fa-layers fa-fw ml-6">
                  <FontAwesomeIcon icon={faCircle} className="text-stone-200" size="3x"/>
                  <FontAwesomeIcon className="h-6 p-[.80em] mr-4 xs:ml-6 rounded-full text-zinc-800 hover:text-rose-500" icon={faGithub} />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/navreen-kaur-8b3098a3/" target="_blank">
                <span className="fa-layers fa-fw ml-12">
                  <FontAwesomeIcon icon={faCircle} className="text-stone-200" size="3x"/>
                  <FontAwesomeIcon className="h-6 p-3.5 mr-4 text-zinc-800 hover:text-rose-500" icon={faLinkedinIn} />
                  </span>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutMe></AboutMe>
      </div>
    </div>
  );
}

export default App;
