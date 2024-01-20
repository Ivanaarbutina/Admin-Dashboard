import React from "react";

export type ProductType = {
  id: number | string;
  title: string;
  img?: string;
  status: string;
  price: number;
  openModal: () => void;
};

export type ProductColumnType = {
  field: string;
  headerName: string;
  width: number;
  renderCell?: (params: { row: ProductType }) => React.ReactNode;
};

export const productsColumns: ProductColumnType[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
