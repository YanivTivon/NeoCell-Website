"use client";

import { Section } from "@/components/section";
import { TextSection } from "@/components/TextSection";

const Technology = () => {
	return (
		<Section
			id="technology"
			className="flex items-center"
			bgColor="page-gradient__flipped"
		>
			<div className="h-full grid grid-cols-1 gap-y-8 gap-x-12 md:grid-cols-2 items-center">
				<TextSection
					headerText="Technology"
					paragraphSize="md"
					headerSize="h2"
					justifyParagraph
				>
					Accurate prognosis of cancer patients receiving cell therapy
					treatments is critical to managing therapy-induced adverse effects,
					which can result in ICU admission or even death. Positron emission
					tomography (PET) scans can be used to anticipate oncoming toxicities
					and enable physicians to administer preventative treatments, but
					creating PET-detectable cell therapies has proven challenging because
					the immune system recognizes them as a foreign pathogen. Our unique
					PET reporter technology is designed to be invisible to the human
					immune system, facilitating clinical progression.
				</TextSection>

				<img
					src="/LabTests.jpg"
					alt=""
					className="rounded h-auto w-full max-w-[600px] md:col-span-1 mx-auto"
				/>
				<div className="col-span-full self-start">
					<h2 className="mb-6 font-medium">Benefits</h2>
					<div className=" grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
						<TextSection
							headerText="Intelligence & Data"
							paragraphSize="sm"
							headerSize="h3"
							justifyParagraph
						>
							Researchers will gain access to a new data source that will help
							inform the next generation of therapies by providing quantitative
							metrics with high level of accuracy. And because PET scans are
							non-invasive, physicians will be able to monitor patient
							populations where other methods (e.g., serial biopsies) are not
							ethical (e.g., children) or possible (e.g., multiple tumor sites).
						</TextSection>
						<TextSection
							headerText="Finance & Operations"
							paragraphSize="sm"
							headerSize="h3"
							justifyParagraph
						>
							Researchers and pharmaceutical companies will be able to reduce
							the cost and time allocated to unsuccessful trials, freeing
							resources for clinical development of successful therapies and
							accelerating their time-to-market.
						</TextSection>
						<TextSection
							headerText="Clinical Efficacy & Patient Safety"
							paragraphSize="sm"
							headerSize="h3"
							justifyParagraph
						>
							Our PET reporter technology will enable physicians monitor
							patients, and employ treatment rescuing or toxicity mitigation
							strategies in a timely manner.
						</TextSection>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Technology;
