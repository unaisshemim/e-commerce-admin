import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect} from "react";

import { getProduct, removeProduct } from "../../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

export default function ProductList() {
const dispatch=useDispatch();
const product=useSelector(state=>state.product.products)

useEffect(()=>{
  getProduct(dispatch)
},[dispatch])

const handleDelete=(id)=>{
  removeProduct(dispatch,id)

}

  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "quantity", headerName: "Stock", width: 200 },
   
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => 
                handleDelete(params.row._id)
                
                
              }
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      <DataGrid
      
        rows={product}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row)=>row._id}
      />
    </div>
  );
}
