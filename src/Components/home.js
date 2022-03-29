import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style2.css';
import { Card } from "react-bootstrap";
import axios from "axios";
import Footer from "./footer";





const Home = () => {
    const [products, setProd] = React.useState([]);
    const [searchInp,setSearch]=React.useState('');
    React.useEffect(() => {
        axios.get(`http://localhost:3001/PList`)
            .then(response => {
                const posts = response.data;
                setProd(posts);
            })
    }, []);

    const ProdCards = (val, index) => {
        console.log(val.url);
        return (
            <Card style={{ width: '17rem' }} key={index}>
                <Card.Img variant="top" src={val.url} width="284px" height="207px" />
                <Card.Body>
                    <Card.Title>{val.proName}<br/><b>Price</b> Rs. {(parseInt(val.price)/parseInt(val.quantity)).toFixed(2)}</Card.Title>
                    
                </Card.Body>
            </Card>
        );
    };
    return (
        <>
            <img src={'assets/img/7.jpg'} height="620px" width="100%" className="respon img1" alt="img.." />
            <h1 className="display-6 center2">Welcome To</h1> <h1 className="display-6 center3">Products Inventory Application</h1><br /><br />
            <button className="center1 btn btn-primary"><a href="#search" style={{ color: 'white', textDecoration: 'none' }}
                onClick={e => {
                    let hero = document.getElementById("search");
                    e.preventDefault();
                    hero && hero.scrollIntoView();
                }
                }>Search the Products</a></button>
            <div id="search"></div><br /><br /><br /><br />
            <div>
                <form className="example" style={{ margin: 'auto', maxWidth: '300px' }}>
                    <input type="text" placeholder="Search the Product" name="search2" onChange={(ev)=>{setSearch(ev.target.value)}}/>
                    <button onClick={(ev)=>{ev.preventDefault()}}><i className="fa fa-search"></i></button>
                </form>
            </div>
            <center>
                <div className="row">
                    {products.filter((val)=>{
                        if(searchInp===""){
                            return val
                        } else if(val.proName.toLowerCase().includes(searchInp.toLowerCase())){
                                return val
                        }
                        return null
                    }).map(ProdCards)}
                </div></center>
            <br /><br /><br />
            <Footer/>
        </>
    )
}
export default Home;