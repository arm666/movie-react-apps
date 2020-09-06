import React, { useEffect } from "react";

function Sidebar({ setMenu }) {
  // list of menus
  const menus = [
    { title: "Now Playing", url: "/movie/now_playing" },
    { title: "Trending", url: "/trending/movie/day" },
    { title: "Popular", url: "/movie/popular" },
    { title: "Top Rated", url: "/movie/top_rated" },
    { title: "Upcoming", url: "/movie/upcoming" },
    { title: "Discover", url: "/discover/movie" },
  ];

  // is called when menu is selected
  const changeActiveMenu = (index) => {
    // removes menuactive class for all
    const allMenus = document.querySelectorAll(".menu");
    allMenus.forEach((val) => val.classList.remove("menuActive"));
    // adds menuActive class for selected
    allMenus[index].classList.add("menuActive");
    // changes the menu url
    setMenu(menus[index].url);
  };

  useEffect(() => {
    // adds menuActive for first index
    changeActiveMenu(0);
  }, []);

  return (
    <div className="menus">
      {/* displaying menus */}
      <div className="appTitle">MovieApp</div>
      {menus.map((val, index) => (
        <div
          onClick={() => changeActiveMenu(index)}
          className="menu"
          key={"menu" + index}
        >
          <div className="title">{val.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
