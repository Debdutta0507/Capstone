import { React } from "react";



import { Card, Button } from "react-bootstrap"

import { useHistory } from "react-router-dom"

import "../styles/Profile.css"

const Profile = () => {

    const history = useHistory();

    let loginusers = JSON.parse(localStorage.getItem("login"));




    return (

        <>



            <center>

                <div className="profileback">

                    <Card className="profilecard" style={{ width: '36rem', height: '20rem' }}>

                        <h1><Card.Header style={{ color: "red" }}>User's Profile</Card.Header></h1>

                        <Card.Body>

                            <Card.Title><b>Fullname of the user:</b>{loginusers.fullname}</Card.Title><br />

                            <Card.Title><b>Email address of the user:</b> <i className="para">{loginusers.email}</i></Card.Title><br />

                            <Card.Title><b>Contact Details of the user:</b> {loginusers.phone}</Card.Title><br />

                            <Button variant="primary" onClick={() => history.push("/")}>Go Back to Home </Button>

                        </Card.Body>

                    </Card>

                </div>

            </center>

        </>

    );

};




export default Profile; 