import DashboardTemplate from "src/Templates/Dashboard";
import DashboardLayout from "src/Layouts/DashboardLayout";
import SideNav from "src/Templates/Dashboard/SideNav";
import SearchTemplate from "src/Templates/Search";
export default function Dashboard() {
	return (
		<DashboardLayout
			MainPanel={DashboardTemplate}
			SidePanel={SideNav}
			RightPanel={SearchTemplate}
		/>
	);
}
