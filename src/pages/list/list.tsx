import { useLocation } from "react-router-dom";
import DataTable from "../../components/datatable/datatable";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./list.scss";

const List = () => {
  const location = useLocation();
  const isUsersCollection = location.pathname.includes("users");
  const collectionName = isUsersCollection ? "users" : "products";
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable collectionName={collectionName} />
      </div>
    </div>
  );
};

export default List;
