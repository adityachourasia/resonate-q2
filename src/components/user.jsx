import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state.user = []
    }
    state = { user: [] }
    
    render() {
        return (
            // <React.Fragment>
                <tr>
                    <td>{this.props.userInfo.id}</td>
                    <td>{this.props.userInfo.name}</td>
                    <td>{this.props.userInfo.username}</td>
                    <td>{this.props.userInfo.email}</td>
                    <td>{this.props.userInfo.phone}</td>
                    <td>{this.props.userInfo.website}</td>
                    <td>{this.props.userInfo.address.city}</td>
                    <td>{this.props.userInfo.company.name}</td>
                    <td>
                        <button onClick={this.props.delete}>Delete</button>
                    </td>
                </tr>
            // </React.Fragment>
        );
    }
}

export default User;


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