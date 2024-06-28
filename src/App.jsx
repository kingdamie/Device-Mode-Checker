import { useState, useEffect } from 'react'
import './App.css'
// install - npm install @material-ui/core 
import { useMediaQuery } from "@material-ui/core";

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
	const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");
	const isDesktop = useMediaQuery("(min-width:1025px)");


 const [colorScheme, setColorScheme] = useState("light");

useEffect(() => {
	const handleColorSchemeChange = (event) => {
		setColorScheme(event.matches ? "dark" : "light");
	};

	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	mediaQuery.addEventListener("change", handleColorSchemeChange);

	// Set the initial color scheme
	setColorScheme(mediaQuery.matches ? "dark" : "light");

	// Clean up the event listener when the component is unmounted
	return () => {
		mediaQuery.removeEventListener("change", handleColorSchemeChange);
	};
}, []);
  return (
		<>
			<div>
				{isMobile && <p>You are on a mobile device</p>}
				{isTablet && <p>You are on a tablet device</p>}
				{isDesktop && <p>You are on a desktop device</p>}
			</div>
			<div>
				{colorScheme === "light" ? (
					<p>The users device is in light mode</p>
				) : (
					<p>The users device is in dark mode</p>
				)}
			</div>
		</>
	);
}

export default App
