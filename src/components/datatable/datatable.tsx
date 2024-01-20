import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { UserType, userColumns } from "../../datatablesource";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

const DataTable = ({ collectionName }: { collectionName: string }) => {
  const [data, setData] = useState<UserType[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, collectionName),
      (snapShot) => {
        let list: UserType[] = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() } as UserType);
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(data);

    return () => {
      unsub();
    };
  }, [collectionName]);

  const handleDelete = async (id: number) => {
    try {
      await deleteDoc(doc(db, collectionName, id.toString()));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn: GridColDef<UserType>[] = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row?.id as number)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={[...userColumns, ...actionColumn]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default DataTable;
