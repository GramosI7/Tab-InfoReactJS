import React, { Component } from 'react';
import json from "./Json/users";
import { NavLink } from 'react-router-dom';
import "./style/App.css"

export default class Tableau extends Component {

    state = {
        users: json
    }

    filterAge = () => {
        this.setState({
            users : json.sort((a, b) => a.age - b.age)
        })
        console.log(this.state.users);
    }

    filterName = () => {
        this.setState({
            users : json.sort((a, b) => a.nom > b.nom)
        })
        console.log(this.state.users);
    }

    filterEmail = () => {
        this.setState({
            users : json.sort((a, b) => a.email > b.email)
        })
        console.log(this.state.users);
    }

    filterVille = () => {
        this.setState({
            users : json.sort((a, b) => a.ville > b.ville)
        })
        console.log(this.state.users);
    }



    render() {
        return (
            <div>
                <div className="container__underheader">
                    <h2 className="container__underheader__title">TITRE LOREM IPSUM</h2>
                    <h5 className="container__underheader__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui maiores error ad sint quaerat eaque iusto laudantium illo assumenda</h5>
                </div>
                <div>
<div className="table-responsive-sm">
<table className="table table-striped tableau_css">
                        <thead>
                            <tr>
                                <th onClick={this.filterName} scope="col">Nom</th>
                                <th onClick={this.filterEmail} scope="col">Email</th>
                                <th onClick={this.filterAge} scope="col">Age</th>
                                <th onClick={this.filterVille} scope="col">Ville</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.nom}</td>
                                            <td>{user.email}</td>
                                            <td>{user.age}</td>
                                            <td>{user.ville}</td>
                                            <td>
                                                <NavLink to={`/info/${index}`} className="nav-link">
                                                    <img src="./static/picto_plus.png" alt="" />
                                                </NavLink>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
</div>
                    
                </div>

            </div>
        )
    }
}
