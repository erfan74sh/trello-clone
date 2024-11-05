import { OrganizationSwitcher } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const OrganizationIdPage = async () => {
	const { userId, orgId } = await auth();
	return <div>organization page</div>;
};

export default OrganizationIdPage;
