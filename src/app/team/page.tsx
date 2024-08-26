"use client";

import { Section } from "@/components/section";
import { TeamMember } from "@/components/team-member";

const Team = () => {
	return (
		<Section
			id="meet-the-team"
			bgColor="bg-sky-50"
			className="flex flex-col justify-center gap-12"
		>
			<h1 className="text-center">Meet The Team</h1>
			<div className="flex flex-col gap-12">
				<TeamMember
					image="/YanivHeadshot.png"
					name="Dr. Yaniv Tivon"
					role="Founder"
					linkedInUrl="https://www.linkedin.com/in/yanivtivon/"
				/>
				<TeamMember
					image="/GilbertHeadshot.png"
					role="Co-Founder"
					name="Gilbert Brook"
					linkedInUrl="https://www.linkedin.com/in/gilbert-brook-a11353169/"
				/>
				<TeamMember
					image="/JasonLohmueller.png"
					role="Advisor"
					name="Jason Lohmueller"
					linkedInUrl="https://www.linkedin.com/in/jason-lohmueller-1663b551/"
				/>
			</div>
		</Section>
	);
};

export default Team;
