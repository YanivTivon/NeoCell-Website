import { Section } from "@/components/section";
import cn from "@/utilities/cn";

const TEXT_CLASSES = {
	container: "w-full flex flex-col gap-4 lg:gap-8 justify-center items-center",
	base: "text-center drop-shadow-md",
};

const CONTAINER_CLASSES = "h-svh w-full overflow-x-hidden";

const LandingPage = () => {
	return (
		<Section
			id=""
			className={cn(TEXT_CLASSES.container, TEXT_CLASSES.base, "-mt-32")}
		>
			<h1>Unlocking Clinical Support for Cell and Gene Therapies</h1>
			<h2>Monitor cell and gene therapy patients through PET imaging</h2>
		</Section>
	);
};

export default LandingPage;
