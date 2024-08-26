import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMemberProps {
	image: string;
	role: string;
	name: string;
	linkedInUrl: string;
}

export const TeamMember = ({
	image,
	role,
	name,
	linkedInUrl,
}: TeamMemberProps) => {
	return (
		<div className="flex flex-col-reverse items-center lg:flex-row-reverse">
			<div className="text-lg max-w-96 p-8 h-full lg:-translate-x-2 rounded-r shadow-md border-white/40 bg-gradient-to-b from-white/60 to-white/40">
				Bio - Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum
				impedit doloremque unde nihil explicabo maxime, magni quaerat accusamus
				minus aliquid incidunt ex nesciunt soluta, corrupti nobis ut molestias
				reiciendis!
			</div>
			<div className="relative h-full w-full max-w-[400px] flex flex-col place-self-center border border-white/40 bg-gradient-to-b from-white/40 to-white/20 backdrop-blur-sm px-6 py-12 shadow-xl rounded-lg">
				<div className="flex-1 w-full h-full flex justify-center">
					<img
						src={image}
						alt={`${name} Headshot`}
						className="object-cover w-full h-full rounded-sm"
					/>
				</div>
				<div className=" flex flex-col gap-2 mt-6">
					<div>
						<div className="w-fit mx-auto h-fit">
							<div className="font-semibold text-2xl">{name}</div>
						</div>
					</div>
					<div className="w-full text-center">{role}</div>
				</div>
				<a href={linkedInUrl} target="_blank" referrerPolicy="no-referrer">
					<motion.div
						className="py-1 px-2 rounded bg-[#0072b1] w-fit h-fit absolute bottom-2 right-2"
						whileHover={{ filter: "brightness(1.25)" }}
					>
						<FontAwesomeIcon icon={faLinkedinIn} color="white" />
					</motion.div>
				</a>
			</div>
		</div>
	);
};
