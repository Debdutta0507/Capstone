import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import { Link} from "react-router-dom";
import './prodlog.css';
import Alloperations from "../CRUD/Alloperations";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
function ProdLog(){
    const [prods, setProd] = React.useState([]);
    const [Citems,setCitems]=React.useState([]);
    const [searchInp,setSearch]=React.useState('');
    const [hideId,setID]=React.useState(false);
    const [hideName,setName]=React.useState(false);
    const [hideQuantity,setQuantity]=React.useState(false);
    const [hidePrice,setPrice]=React.useState(false);
    const Checkboxes = [
        { key: "id", label: "ID" },
        { key: "productName", label: "Product Name" },
        { key: "quantity", label: "Quantity" },
        { key: "price", label: "Price" }
    ];
    useEffect(() => {
        Alloperations.getAllProducts().then(
            res=>{
                setProd(res);
            }
        )
    }, []);
   const toggleCheck = (ev, item) => {
       let checked=ev.target.checked;
        if (checked) {
            let arr = Citems;
            arr.push(item.id);
            setCitems(arr);
        } else {
            Citems.splice(Citems.indexOf(item.id), 1);
            setCitems(Citems);
            setProd(prods);
        }
    }

   const deleteMultipleRows = () => {
        if (Citems.length > 0) {
            const confirm = window.confirm(`Are you sure you want to delete the product(s)?"`);
            if (confirm) {
                Alloperations.deleteProductByIds(Citems).then(res => {
                    const resp = [];
                    const response = resp.push(res);
                    console.log(Citems);
                    if (response) {
                        alert('Deleted Successfully!!!');
                        Alloperations.getAllProducts().then(res=>{
                            setProd(res);
                            setCitems(false);
                        })
                    }
                })
            }
        } else {
            alert("Please select atleast one Product to delete");
        }
    }
   const headerChecked = (event, val2) => {
        const value = event.target.checked;
        if (val2 === "id" && value ) {
            setID(value);
        } else if (val2 === "productName" && value) {
            setName(value);
        } else if (val2 === "quantity" && value) {
            setQuantity(value);
        } else if (val2 === "price" && value) {
            setPrice(value);
        } else if (val2 === "id" && !value) {
            setID(value);
        } else if (val2 === "productName" && !value) {
            setName(value);
        } else if (val2 === "quantity" && !value) {
            setQuantity(value);
        } else if (val2 === "price" && !value) {
            setPrice(value);
        } 
        console.log(hideId,+" "+hideName+" "+hidePrice+" "+hideQuantity);

    }
    const ProdTable=(val,index)=>{
        return(<tr key={index}>
            <td><input type="checkbox" className="form-check-input" onChange={(ev)=>toggleCheck(ev,val)}/></td>
            {!hideId &&<td>{val.id}</td>}
            {!hideName&&<td><Link to={`/ProdDetails/${val.id}`}>{val.proName}</Link></td>}
            {!hideQuantity&&<td>{val.quantity}</td>}
            {!hidePrice&&<td>{val.price}</td>}
         <center><td className="btn btn-md bg-warning"><i className="fa fa-pencil"><Link to={`/editProduct/${val.id}`}>Update</Link></i></td></center>
            </tr>)
    }
    let renderHideColumns = Checkboxes.map((item, index) => {
        return (<>
            <input className="form-check-input" type="checkbox" name={item.key} key={index}
                onChange={(e) => headerChecked(e, item.key)} style={{ marginRight: "5px" }} />
            <label className="form-check-label" htmlFor={item.key} style={{ marginRight: "20px", fontWeight: "500" }}>{item.label}</label>
        </>)
    })
    return(<>
    <br/><br/>
    <center>
    <input type="text" placeholder="Search the Product" name="search2" onChange={(ev)=>{setSearch(ev.target.value)}} size="30"/>
    <button disabled={true} className="btn-sm bg-info"><i className="fa fa-search"></i></button></center><br/><br/>
    <div className="row">
                <div className="col-md-12">
                    <h4 className="mb-2">Select to hide columns</h4>
                    <div className="col-md-12">
                        {renderHideColumns}
                    </div>
                </div>

            </div>
    <br/><br/>
    <div className="row mt-3">
                        <div className="col-md-12" style={{ textAlign: "left" }}>
                            <button className="btn btn-success mt-3 ms-2" type="submit">
                                <Link to="/add" style={{textDecoration:'none',color:'white'}}>Add</Link>
                            </button>
                            <button className="btn btn-danger mt-3 ms-2" onClick={deleteMultipleRows}>Delete</button>
                        </div>
                    </div>
    <Table striped bordered hover responsive>
        <thead className="bg-primary">
            <tr>
                <th></th>
                {!hideId&&<th>ID</th>}
                {!hideName&&<th>Product Name</th>}
                {!hideQuantity&&<th>Quantity</th>}
                {!hidePrice&&<th>Price</th>}
               <center><th colSpan="2">Update Products</th></center>
            </tr>
        </thead>
        <tbody>
            {prods.filter((val)=>{
                        if(searchInp===""){
                            return val
                        } else if(val.proName.toLowerCase().includes(searchInp.toLowerCase())){
                                return val
                        }
                        return null
                    }).map(ProdTable)}
        </tbody>
    </Table>
    </>)
}
export default ProdLog;