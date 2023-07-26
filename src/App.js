import './App.css';
import { LinkIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Projects from './components/projects';

function App() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-stone-100 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div className="lg:pr-4 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-pink-600">Hello! 👋</p>
                <a href="https://www.linkedin.com/in/navreen-kaur-8b3098a3/" target="_blank"><h1 className="projectLink w-fit mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Navreen Kaur</h1></a>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  I'm Navreen Kaur, a design-minded, front-end developer passionate about developing pixel-perfect user interfaces and experiences 👩🏽💻
                </p>
              </div>
              <div className="h-6 ml-1 mt-2.5">
                <a href="https://github.com/NavreenK" target="_blank"><FontAwesomeIcon className="h-6 mr-4 hover:text-pink-600" icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/navreen-kaur-8b3098a3/" target="_blank"><FontAwesomeIcon className="h-6 mr-4 hover:text-pink-600" icon={faLinkedin} /></a>
              </div>
            </div>
{/*             <nav class="nav hidden lg:block" aria-label="In-page jump links">
            <div className="lg:pr-4 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
              <ul>
                <li><a href="#projects">------ Projects</a></li>
                <li><a href="#aboutMe">------ About Me</a></li>
              </ul>
            </div>
            </nav> */}
{/*             <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt=""
            /> */}
          </div>
          <Projects></Projects>
        </div>
      </div>
    </div>
  );
}

export default App;
