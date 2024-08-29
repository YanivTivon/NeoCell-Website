"use client";

import { LandingVid } from "@/components/landing-vid";
import { NavBar } from "@/components/nav-bar";
import { ActiveLinkProvider } from "@/context/ActiveLinkProvider";
import { AnchorLinkClickProvider } from "@/context/AnchorLinkClick";
import Head from "next/head";

import About from "./about";
import LandingPage from "./landing-page";
import Team from "./team";
import Technology from "./technology";

const description =
	"Neo Cell Technologies empowers healthcare professionals and researchers with precise monitoring and analysis, enabling informed clinical decisions and advancing medical research. Our innovative approach identifies cell therapy patients at risk of treatment failure or toxicity, providing timely insights for effective intervention.";
const title = "NeoCell Technologies";

export default function Home() {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="twitter:title" content={title} />
				<meta property="og:title" content={title} />
				<meta name="description" content={description} />
				<meta property="og:description" content={description} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<main>
				<ActiveLinkProvider>
					<AnchorLinkClickProvider>
						<NavBar />
						<LandingVid />
						<LandingPage />
						<About />
						<Technology />
						<Team />
					</AnchorLinkClickProvider>
				</ActiveLinkProvider>
			</main>
		</>
	);
}
