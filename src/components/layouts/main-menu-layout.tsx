export default function MainMenuLayout({
		children,
		}: {
children: React.ReactNode;
}) {
	// i want a grid with 2 columns
	return <div className="bg-red-300 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 overflow-scroll">{children}</div>;
}
