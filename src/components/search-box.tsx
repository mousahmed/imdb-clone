"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (search) router.push(`/search/${search}`);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-7xl mx-auto justify-between items-center px-5"
      >
        <input
          type="text"
          placeholder="Search keywords...."
          className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          disabled={!search}
          type="submit"
          className="text-amber-600 disabled:text-gray-400"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
