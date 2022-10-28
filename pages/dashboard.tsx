import DashboardTemplate from "src/Templates/Dashboard";
import DashboardLayout from "src/Layouts/DashboardLayout";
import Profile from "src/Templates/Dashboard/Profile";
export default function Dashboard() {
	return <DashboardLayout MainPanel={DashboardTemplate} SidePanel={Profile} />;
}
