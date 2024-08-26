interface ActiveIndicatorProps {
	isCollapsed: boolean;
}

export const ActiveIndicator = ({ isCollapsed }: ActiveIndicatorProps) => {
	return (
		<>
			{isCollapsed ? (
				<div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-4 top-1/2 -translate-y-1/2" />
			) : (
				<div className="absolute w-[calc(100%+0.5rem)] h-1 bg-blue-500 rounded-md left-1/2 -translate-x-1/2" />
			)}
		</>
	);
};
