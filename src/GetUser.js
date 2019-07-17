import React, { Component } from 'react';
class GetUser extends Component {
    constructor(){
        super();
        this.state = {
            pics: [],
        }
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=3')
        .then(results => {
            return results.json();
        }).then(data => {
            let pics = data.results.map((pic) => {
                return(
                    <div key={pic.results}>
                    <img src={pic.picture.medium}/>
                    </div>
                )
            })
            this.setState({pics: pics});
            console.log("state: ", this.state.pics);
        })
    }
    render(){
    return (
        <div>
            {this.state.pics}
        </div>
    );
    }
}

export default GetUser;