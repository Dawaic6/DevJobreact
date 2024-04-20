import React, { useEffect, useState } from "react";
import logo from "../assets/desktop/logo.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
import BgImg from "../assets/desktop/bg-pattern-header.svg";
import search from "../assets/desktop/icon-search.svg";
import location from "../assets/desktop/icon-location.svg";

// JobCard component
const JobCard = ({ job }) => {
  const { logo, logoBackground, postedAt, contract, position, company, location } = job;

  return (
    <div className="relative flex flex-col items-start bg-slate-300 rounded-md p-[20px] pt-8 md:w-[18rem]  mb-[2rem] h-[13rem]">
      <div className={`absolute top-[-10px] bg-${logoBackground} flex items-center justify-center p-1 w-8 h-8 rounded-md overflow-hidden`}>
        <img src={logo} alt="Logo" width="40px" height="40px r"  />
      </div>
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col items-start gap-4 text-custom-darkGrey ">
          <h4 className="text-sm">{postedAt} . {contract}</h4>
          <h3 className="font-bold text-custom-darkBlue hover:text-custom-darkGrey text-left cursor-pointer">{position}</h3>
          <h4 className="text-sm">{company}</h4>
        </div>
        <h5 className="text-custom-violet text-sm">{location}</h5>
      </div>
    </div>
  );
};

// DevJob component
const DevJob = () => {
  const [theme, setTheme] = useState("light");

  // Change to dark or light mode when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    // Toggle between light and dark mode
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Placeholder data for jobs
  const jobs = [
    {
      id: 1,
      logo:"/assets/logos/scoot.svg",
      logoBackground: "white",
      postedAt: "5h",
      contract: "Full Time",
      position: "Senior Software Engineer ",
      company: "scoot ",
      location: "United Kingdom ",
    },
    {
        id: 2,
        logo:"../assets/logos/blogr.svg",
        logoBackground: "white",
        postedAt: "20h ago",
        contract: "Part Time",
        position: "Haskell abd PureScript Dev ",
        company: "Blogr ",
        location: "United States ",
      }, {
        id: 3,
        logo:"../assets/logos/vector.svg",
        logoBackground: "white",
        postedAt: "1d ago",
        contract: "Part Time",
        position: "Midlevel Back End Engineer ",
        company: "Vector ",
        location: "Russsia ",
      }, {
        id: 4,
        logo:"../assets/logos/officelite.svg",
        logoBackground: "white",
        postedAt: "2d ago",
        contract: "Full Time",
        position: "Senior Application Engineer ",
        company: "OfficeLite ",
        location: "Japan ",
      }, {
        id: 5,
        logo:"../assets/logos/pod.svg",
        logoBackground: "white",
        postedAt: "2d ago",
        contract: "Part Time",
        position: "Remote DevOps Engineer ",
        company: "Pod ",
        location: "Thailand ",
      }, {
        id: 6,
        logo:"../assets/logos/creative.svg",
        logoBackground: "white",
        postedAt: "4d ago",
        contract: "Part Time",
        position: "Desktop Support Manager ",
        company: "Creative ",
        location: "Germany",
      }, {
        id: 7,
        logo:"../assets/logos/pomodoro.svg",
        logoBackground: "white",
        postedAt: "1w ago",
        contract: "Full Time",
        position: "iSO Engineer ",
        company: "Pomodoro ",
        location: "United States ",
      }, {
        id: 8,
        logo:"../assets/logos/maker.svg",
        logoBackground: "white",
        postedAt: "1w ago",
        contract: "Full Time",
        position: "Senior UJB Developer ",
        company: "maker ",
        location: "United Kingdom ",
      }, {
        id: 9,
        logo:"../assets/logos/coffeeroasters.svg",
        logoBackground: "white",
        postedAt: "1w ago",
        contract: "part Time",
        position: "Senior Frontend Developer ",
        company: "Coffeeroasters ",
        location: "Singapore ",
      }, {
        id: 10,
        logo:"../assets/logos/mastercraft.svg",
        logoBackground: "white",
        postedAt: "2w ago",
        contract: "Freelance",
        position: "App & Website Designer ",
        company: "Mastercraft",
        location: "United States ",
      },
      {
        id: 11,
        logo:"../assets/logos/crowdfund.svg",
        logoBackground: "white",
        postedAt: "1m ago",
        contract: "Part Time",
        position: "Fullstack Developer ",
        company: "Crowdfund ",
        location: "New Zeeland ",
      },
      {
        id: 12,
        logo:"../assets/logos/typemaster.svg",
        logoBackground: "white",
        postedAt: "1m ago",
        contract: "Part Time",
        position: "Technical Lead Enginner ",
        company: "Typemaster ",
        location: "United Kingdom ",
      },
    // Add more job objects here...
  ];

  return (
    <>
      <div className="h-40 w-full flex items-center justify-center">
        <img
          src={BgImg}
          alt="bg-img"
          className="-z-10 absolute bg-no-repeat w-full h-40"
        />
        <div className="flex mt-[-10px] gap-[42rem] ml-[-140px]">
          <div className="logo mx-[8rem] w-[100px]">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center gap-4">
            <img src={sunIcon} alt="Sun-Icon" className="size-5" />
            <div
              className={`${
                theme === "dark" ? "bg-VeryDarkBlue" : "bg-white"
              } rounded-2xl w-12 h-6 p-[5px] flex items-center justify-end`}
              onClick={handleThemeSwitch}
            >
              <div
                className={`${
                  theme === "dark" ? "bg-PrimaryViolet" : ""
                } w-4 h-4 rounded-full cursor-pointer`}
              ></div>
            </div>
            <img src={moonIcon} alt="Moon-Icon" className="size-4" />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="container mx-auto pl-10 p-6 ">
          <div className="ra w-[20px] h-[15px]"></div>
        </div>
        <div
          className={`absolute mt-[-90px] ml-[120px] flex items-center w-[80%] ${
            theme === "light" ? "bg-slate-300" : "bg-custom-darkBlue"
          } pl-2 pr-2 rounded-sm justify-between`}
        >
          <div className="flex items-center gap-3 pt-3 pb-3">
            <img src={search} width="17px" height="17px" />
            <input
              type="text"
              className={`border-none outline-none w-64 text-custom-lightGrey ${
                theme === "light" ? "bg-white" : "bg-custom-darkBlue"
              }`}
              placeholder="Filter by title, companies, expertise…"
            />
          </div>
          <div className="flex items-center gap-3 pt-3 pb-3 pl-4 border-l border-custom-darkGrey">
            <img src={location} width="12px" height="12px" />
            <input
              type="text"
              className={`border-none outline-none text-custom-lightGrey ${
                theme === "light" ? "bg-white" : "bg-custom-darkBlue"
              }`}
              placeholder="Filter by location"
            />
          </div>
          <div className="flex items-center gap-5 pt-3 pb-3 pl-4 border-l border-custom-darkGrey">
            <input type="checkbox" />
            <h4 className="text-custom-darkBlue font-semibold">Full Time Only</h4>
          </div>
          <button className="bg-[#5964E0] w-[150px] h-[35px] rounded-md">
            Search
          </button>
        </div>
      </div>
      
      {/* Job Cards */}
      <div className="container  grid grid-cols-3 ml-[7.5rem]  w-[85%] " >
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        {/* Load more button */}
        {/* ... */}
        <button className="bg-[#4e58c2] w-[150px]  h-[35px] rounded-md  ml-[35rem]  ">
            LoadMore
          </button>
    </>
  );
};

export default DevJob;
