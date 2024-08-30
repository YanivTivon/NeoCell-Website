import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

interface TeamMemberProps {
	image: string;
	role: string;
	name: string;
	children: React.ReactNode;
	linkedInUrl: string;
}

export const TeamMember = ({
	image,
	role,
	name,
	linkedInUrl,
	children,
}: TeamMemberProps) => {
	return (
		<div className="flex flex-col-reverse items-center lg:flex-row-reverse">
			<div className="text-justify flex flex-col justify-center gap-4 max-w-[400px] -translate-y-2 lg:max-w-2xl p-8 h-full lg:-translate-x-2 lg:translate-y-0 rounded-b lg:rounded-r shadow-md border-white/40 bg-gradient-to-b from-white/60 to-white/40">
				{children}
			</div>
			<div className="relative h-full w-full max-w-[400px] lg:max-w-[300px] flex flex-col place-self-center border border-white/40 bg-gradient-to-b from-white/40 to-white/20 backdrop-blur-sm px-6 py-12 shadow-lg rounded-t lg:rounded-l">
				<div className="flex-1 w-full h-full flex justify-center">
					<img
						src={image}
						alt={`${name} Headshot`}
						className="object-cover w-full h-full rounded-sm"
					/>
				</div>
				<div className="flex flex-col gap-2 mt-6">
					<div>
						<div className="w-fit mx-auto h-fit">
							<div className="font-semibold text-2xl">{name}</div>
						</div>
					</div>
					<div className="w-full text-center">{role}</div>
				</div>
				<a href={linkedInUrl} target="_blank" referrerPolicy="no-referrer">
					<motion.div
						className="shadow py-1 px-2 rounded bg-[#0072b1] w-fit h-fit absolute bottom-2 right-2"
						whileHover={{ filter: "brightness(1.25)" }}
					>
						<FontAwesomeIcon icon={faLinkedinIn} color="white" />
					</motion.div>
				</a>
			</div>
		</div>
	);
};
