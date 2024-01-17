import React from "react";

export type UserType = {
  id: number | string;
  username: string;
  img: string;
  status: string;
  email: string;
  phone: number;
};

export type UserColumnType = {
  field: string;
  headerName: string;
  width: number;
  renderCell?: (params: { row: UserType }) => React.ReactNode;
};

export const userColumns: UserColumnType[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "username",
    headerName: "User Name",
    width: 160,
    // renderCell: (params) => {
    //   return (
    //     <div className={`cellWithStatus ${params.row.status}`}>
    //       {params.row.status}
    //     </div>
    //   );
    // },
  },
];
