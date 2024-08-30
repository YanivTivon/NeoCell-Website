"use client";

import { Paragraph } from "@/components/Paragraph";
import { Section } from "@/components/section";
import { TeamMember } from "@/components/team-member";

const Team = () => {
	return (
		<Section
			id="meet-the-team"
			bgColor="bg-sky-50"
			className="flex flex-col justify-center gap-12 mb-12"
		>
			<h1 className="text-center">Meet The Team</h1>
			<div className="flex flex-col gap-12">
				<TeamMember
					image="/YanivHeadshot.png"
					name="Dr. Yaniv Tivon"
					role="Founder"
					linkedInUrl="https://www.linkedin.com/in/yanivtivon/"
				>
					<Paragraph size="sm">
						<strong>Dr. Yaniv Tivon</strong> has over 7 years of experience in
						cell therapy development in both academic and industry settings. His
						graduate research at the University of Pittsburgh was focused on
						engineering a CAR T cell therapy that can be turned in case severe
						toxicities emerge.
					</Paragraph>
					<Paragraph size="sm">
						He later joined Legend Biotech, where he advanced cell therapies
						that target difficult-to-treat tumors. At another company, BlueRock
						Therapeutics, he designed and executed projects aimed to develop
						stem cell therapies to treat Parkinson’s Disease. His experience in
						early-stage research and project management are integral to
						developing the company’s platform technology.
					</Paragraph>
				</TeamMember>
				<TeamMember
					image="/GilbertHeadshot.jpg"
					role="Co-Founder"
					name="Gilbert Brook"
					linkedInUrl="https://www.linkedin.com/in/gilbert-brook-a11353169/"
				>
					<Paragraph size="sm">
						<strong>Gilbert Brook</strong> is NeoCell Technologies’ business
						lead and has 8 years of experience in the healthcare sector. He
						began his career in immuno-oncology research at the Children’s
						Hospital of Philadelphia, working on research for Stand Up to
						Cancer. Then, he worked in investment banking at Locust Walk,
						advising biotechnology and biopharmaceutical companies through
						strategic and financial decisions.
					</Paragraph>
					<Paragraph size="sm">
						He later joined Sandbox Advisers, a management consulting firm that
						advises large U.S. healthcare payers, primarily focused on creating
						new lines of business and evaluating growth opportunities. His
						healthcare and business experience will be integral to the
						development of the company and the commercialization strategy of its
						products. 
					</Paragraph>
				</TeamMember>
				<TeamMember
					image="/JasonLohmueller.png"
					role="Advisor"
					name="Jason Lohmueller"
					linkedInUrl="https://www.linkedin.com/in/jason-lohmueller-1663b551/"
				>
					<Paragraph size="sm">
						<strong>Dr. Jason Lohmueller</strong> serves as NeoCell
						Technologies’ Scientific Advisor. As an assistant professor in the
						department of surgery in the University of Pittsburgh Medical
						Center, he has over a decade of experience in engineering cell
						therapies.
					</Paragraph>
					<Paragraph size="sm">
						His lab is focused on the development and preclinical assessment of
						promising CAR T cell technologies, and he previously collaborated
						with Dr. Yaniv Tivon on the development of a multi-antigen targeting
						CAR T cell platform (now licensed to Coeptis Therapeutics for
						clinical development). His expertise in CAR T cell design and
						evaluation are essential to NeoCell Technologies’ success.
					</Paragraph>
				</TeamMember>
			</div>
		</Section>
	);
};

export default Team;
