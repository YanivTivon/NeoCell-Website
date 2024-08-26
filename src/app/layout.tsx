import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import cn from "../utilities/cn";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NeoCell Technologies",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(montserrat.className, "bg-sky-blue-500")}>
				{children}
			</body>
		</html>
	);
}
