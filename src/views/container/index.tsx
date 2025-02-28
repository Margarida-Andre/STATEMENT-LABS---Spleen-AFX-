import { Header } from "../../components/header";
import { Layout } from "../layout";
import  { Sidebar } from "../sidebar";
import { containerProps } from "./type";

const Container = ({children}: containerProps) => {
  return (
    <div className="flex bg-gray-800 min-h-screen h-screen overflow-hidden">
    <Sidebar />
    <Layout >
      <Header />
      <div className="flex-1 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">{children}</div>
    </Layout>
  </div>
  
  );
};

export default Container;
