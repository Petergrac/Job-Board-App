import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const Mainpage = () => {
  const [active, setActive] = useState('');
  const hide = () => {
    if(active){
      setActive('')
    }
    else{
      setActive('hidden')
    }
  }
  return (
    <div>
      <header className="sticky top-0 z-50">
        <h1 className="md:pr-25 md:hidden text-center p-3 bg-[#2b3452] text-white">
          Job<span className="text-blue-400 font-bold">Seeker</span>
          <button onClick={hide} className="border-1 active:translate-y-1 transform-all pr-0.5 rounded-sm  pl-0.5 right-5 absolute">Menu</button>
        </h1>
        <nav className={`flex flex-col md:flex-row items-center gap-2  md:justify-center md:gap-5 bg-[#2b3452] text-white font-bold pt-2 md:pt-8 md:pb-6 pb-1 ${active}`}>
          <h1 className="md:pr-25 text-2xl hidden md:block">
            Job<span className="text-blue-400 font-bold">Seeker</span>
          </h1>
          <NavLink to={`pages/homepage`} className="lin">Home</NavLink>
          <NavLink to={`pages/jobs`} className="lin">Jobs</NavLink>
          <NavLink to={`pages/categories/`} className="lin">Categories</NavLink>
          <NavLink to={`pages/locations/`} className="lin">Locations</NavLink>
          <NavLink to={`pages/about`} className="lin">About</NavLink>
          <NavLink to={`pages/contacts`} className="lin">Contact</NavLink>
          <NavLink to={`pages/apply/:id`} className="lin">My jobs</NavLink>

        </nav>
      </header>
      <main> 
        <Outlet/>
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default Mainpage;
