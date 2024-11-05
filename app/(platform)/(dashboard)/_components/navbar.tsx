import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Navbar = () => {
	return (
		<nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center justify-between">
			{/* TODO: Mobile Sidebar */}
			<div className="flex items-center gap-x-4">
				<div className="hidden md:flex">
					<span> Lgoo com</span>
				</div>
				<button>create</button>
			</div>
			<div className="flex gap-x-1">
				<OrganizationSwitcher
					hidePersonal
					afterCreateOrganizationUrl="/organization/:id"
					afterLeaveOrganizationUrl="select-org"
					afterSelectOrganizationUrl="/organization/:id"
					appearance={{
						elements: {
							rootBox: {
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							},
						},
					}}
				/>
				<UserButton
					appearance={{
						elements: {
							avatarBox: {
								height: 30,
								width: 30,
							},
						},
					}}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
