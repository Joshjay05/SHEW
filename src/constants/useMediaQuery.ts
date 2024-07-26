import { useState, useEffect } from "react";

// Define the type for the query parameter
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    // Set initial state based on the media query
    setMatches(media.matches);

    // Define a listener function
    const listener = () => setMatches(media.matches);

    // Add the listener to the media query
    media.addEventListener("change", listener);

    // Clean up the listener on component unmount
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
