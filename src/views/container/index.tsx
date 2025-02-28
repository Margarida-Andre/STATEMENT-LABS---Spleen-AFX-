import { Header } from "../../components/header";
import { Layout } from "../layout";
import  { Sidebar } from "../sidebar";
import { containerProps } from "./type";

const Container = ({children}: containerProps) => {
  return (
    <div className="flex bg-gray-800 min-h-screen">
      <Sidebar />
      <Layout>
        <Header />
        <div>{children}</div>
      </Layout>
    </div>
  );
};

export default Container;
