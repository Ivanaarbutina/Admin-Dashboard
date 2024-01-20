import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./../../components/datatable/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { ProductType, productsColumns } from "./productData";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import ProductModal from "./productModal";

// ... (import statements)

const Products = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [currentProduct, setCurrentProduct] = useState<ProductType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductModal = (product: ProductType) => {
    console.log("Opening Product Modal:", product);
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setCurrentProduct(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "products"),
      (snapShot) => {
        let list: ProductType[] = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() } as ProductType);
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, ["products"]);

  const handleDelete = async (id: number) => {
    try {
      await deleteDoc(doc(db, "products", id.toString()));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn: GridColDef<ProductType>[] = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: GridRenderCellParams) => {
        console.log("Button Clicked for Row:", params.row);
        return (
          <div className="cellAction">
            {/* <Link
              to={`/products/${params.row?.id}`}
              style={{ textDecoration: "none" }}
            > */}
            <div
              className="viewButton"
              onClick={() => openProductModal(params.row?.id)}
            >
              View
            </div>
            {/* </Link> */}

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
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">
            Add New Product
            <Link to="/products/new" className="link">
              Add New
            </Link>
          </div>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              className="datagrid"
              rows={data}
              columns={[...productsColumns, ...actionColumn]}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
            {isModalOpen && (
              <ProductModal
                isOpen={isModalOpen}
                closeModal={closeProductModal}
                product={currentProduct}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
