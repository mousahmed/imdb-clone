import React from "react";
import NavbarItem from "./navbar-item";

interface Props {}

function Navbar({}: Props) {
  return (
    <div className="flex justify-center space-x-2 dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
