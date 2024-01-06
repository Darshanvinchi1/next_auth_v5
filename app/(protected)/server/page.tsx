import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const SeverPage = async () => {
	const user = await currentUser();

	return <UserInfo label='💻 Server Component' user={user} />;
};

export default SeverPage;
