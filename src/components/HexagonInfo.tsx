import Image from "next/image";

interface HexagonInfoProps {
	icon: React.ReactNode;
}

export const HexagonInfo = ({ icon }: HexagonInfoProps) => {
	return (
		<div className="flex justify-end items-center">
			<div className="relative">
				<img
					src="/Hexagon.png"
					alt=""
					className="w-full max-w-60 h-auto aspect-auto"
				/>
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-50">
					{icon}
				</div>
			</div>
		</div>
	);
};
