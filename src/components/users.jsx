import React, { Component } from 'react';
import User from "./user"
import Table from 'react-bootstrap/Table';

class Users extends Component {

    state = {
        usersInfo: []
    }



    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ usersInfo: data })
                // console.log("From Users", data)
            })
            .catch(err => {
                console.log(err);
            })

    }

    handleDelete=(id)=>{
        // console.log("Deleting",id);

//   console.log("Deleting");
        let newUserInfo=this.state.usersInfo.filter(x=>x.id!==id)
        this.setState({ usersInfo:newUserInfo})

    }

    render() {
        return (
            <React.Fragment>

                <h1>Contact Details</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Address/City</th>
                            <th>Company Name</th>
                            {/* <th>Action</th> */}

                        </tr>
                    </thead>
                    <tbody>

                {
                    this.state.usersInfo.map((user) => {
                        // console.log("here",user.id)
                        return <User key={user.id} userInfo={user} delete={()=>{this.handleDelete(user.id)}}></User>
                        
                    })
                }
                </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

export default Users;


// userInfo=
// {
//     "id": "",
//     "name": "",
//     "username": "",
//     "email": "",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }