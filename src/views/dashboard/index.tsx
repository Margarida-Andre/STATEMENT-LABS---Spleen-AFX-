import { Layout } from "../../components/layout";
import Sidebar from "../../components/sidebar";


const Dashboard = () => {
  return (
    <div className="flex bg-gray-800 min-h-screen">
      <Sidebar />
      <Layout>
        Hello
      </Layout>
    </div>
  );
};

export default Dashboard;
