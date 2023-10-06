"use client";
import { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="text-center mt-10 ">
      <h1>Something went wrong</h1>
      <button onClick={() => reset()} className="hover:text-amber-500">
        Try again
      </button>
    </div>
  );
}

export default Error;
