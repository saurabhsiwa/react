import React from "react";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const history = useHistory();

  const columnDefs = [
    { headerName: "ID", field: "id", sortable: true, filter: true },
    { headerName: "Title", field: "title", sortable: true, filter: true },
    { headerName: "Price", field: "price", sortable: true, filter: true },
    { headerName: "Category", field: "category", sortable: true, filter: false },
  ];

  const rowData = products;

  const showProductDetails = (e) => {
    console.log("e", e);
    history.push("/product/" + e.data.id);
  };

  return (
    <div className="ag-theme-balham" style={{ width: 700, height: 500 }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} rowSelection="multiple" onRowClicked={showProductDetails} />
    </div>
  );
};

export default ProductComponent;
