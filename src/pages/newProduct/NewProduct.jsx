import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../Redux/apiCalls";

export default function NewProduct() {
  const [file, setFile] = useState(null);
  const [input, setInput] = useState({});
  const [cat, setCat] = useState([]);
  const [num,setNum]=useState({})

  const handleSubmit = (e) => {
    e.preventDefault();

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("upload is running");
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          addProduct({ img: downloadURL, ...input, ...cat,...num });
        });
      }
    );
  };
  const handleChange = (e) => {
    setInput(() => {
      return { ...input, [e.target.name]: e.target.value };
    });
  };

  const handleArray = (e) => {
    const splitted = e.target.value.split(/[, ]/);
    setCat(() => {
      return { ...cat, [e.target.name]: splitted };
    });
  };
  const handleNumber=(e)=>{
    let convertedNum=parseInt(e.target.value)
    setNum(()=>{
      return {...num,[e.target.name]:convertedNum}})
    
  }
  console.log(num)

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="description"
            type="text"
            placeholder="tell the details about the product"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input
            type="text"
            name="quantity"
            placeholder="123"
            onChange={handleNumber}
          />
        </div>

        <div className="addProductItem">
          <label>price</label>
          <input
            type="text"
            placeholder="prize"
            name="price"
            onChange={handleNumber}
          />
        </div>
        <div className="addProductItem">
          <label>Category(min 5 items )</label>
          <input
            type="text"
            placeholder="color,brand "
            onChange={handleArray}
            name="category"
          />
        </div>
        <div className="addProductItem">
          <label>Size Available</label>
          <input
            type="text"
            placeholder="6,7,8,9"
            onChange={handleArray}
            name="size"
          />
        </div>
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
