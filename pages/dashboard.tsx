import DashboardTemplate from "src/Templates/Dashboard";
import DashboardLayout from "src/Layouts/DashboardLayout";
import SideNav from "src/Templates/Dashboard/SideNav";
import SearchTemplate from "src/Templates/Search";
import AppProvider from "src/Context";
export default function Dashboard() {
	return (
		<AppProvider>
			<DashboardLayout
				MainPanel={DashboardTemplate}
				SidePanel={SideNav}
				RightPanel={SearchTemplate}
			/>
		</AppProvider>
	);
}
