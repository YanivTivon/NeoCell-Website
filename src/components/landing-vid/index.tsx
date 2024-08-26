"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "usehooks-ts";

const setOpacity = (opac1: number, opac2: number) => Math.max(opac1, opac2);

export const LandingVid = () => {
	const { scrollYProgress } = useScroll();
	const [opacityByWidth, setOpacityByWidth] = useState(0);
	const [opacityByScroll, setOpacityByScroll] = useState(0);
	const [coverOpacity, setCoverOpacity] = useState(0);

	const { width } = useWindowSize();
	const [translateX, setTranslateX] = useState(0);

	const videoRef = useRef<HTMLVideoElement>(null);

	useMotionValueEvent(scrollYProgress, "change", (latest): void => {
		setOpacityByScroll(latest * 2);
	});

	useEffect(() => {
		if (width < 1360 && videoRef.current) {
			const videoWidth = videoRef.current?.getBoundingClientRect().width;
			setTranslateX(((width - videoWidth) * -1) / 2);
			const opacity = translateX / 1000;
			setOpacityByWidth(opacity + 0.2);
		} else {
			setTranslateX(0);
		}
	}, [width, translateX]);

	useEffect(() => {
		const maxOpacity = Math.max(opacityByWidth, opacityByScroll);
		setCoverOpacity(maxOpacity);
	}, [opacityByWidth, opacityByScroll]);

	return (
		<div className="fixed top-0 left-0 landing-page flex justify-center h-svh w-svw -z-50">
			<div
				className="fixed top-0 left-0 h-full w-full bg-white backdrop-blur-lg"
				style={{ opacity: coverOpacity }}
			/>
			{coverOpacity < 1 && (
				<motion.video
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={`h-full w-full min-w-[1360px] object-cover -z-10 brightness-110 saturate-[1.3] `}
					autoPlay
					loop
					muted
					preload="auto"
					style={{
						x: translateX,
					}}
					ref={videoRef}
					controls={false}
					playsInline
				>
					<source src="/NeoCellLandingPage.mp4" type="video/mp4" />
				</motion.video>
			)}
		</div>
	);
};
