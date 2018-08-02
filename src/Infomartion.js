import React from "react";
import "./style/Information.css";
import json from "./Json/users.json";
import { NavLink } from 'react-router-dom';


const Information = (props) => {
    const { id } = props.match.params;
    console.log(id);

    return (
        <div className="row container__info">
            <div className="col-lg-2 col-md-0 col-sm-0">
                <img
                    className="rounded-circle img_info"
                    src={`/static/${json[id].img}`}
                    alt=""
                />
            </div>
            <div className="col-lg-10 col-md-0 col-sm-0">
                <h2 className="container__info__title">{json[id].nom}</h2>
                <div className="container__info_details">
                    <p><strong>Email:</strong> {json[id].email}</p>
                    <p><strong>Age:</strong> {json[id].age}</p>
                    <p><strong>Ville:</strong> {json[id].ville}</p>
                </div>
                <div className="text_container">
                    <p>Lorem ipsum, dolor sit amet consecztetur adipisicing elit. Explicabo adipisci fuga nobis alias earum dignissimos voluptates veniam ducimus deserunt minus asperiores reiciendis, consequuntur rerum impedit odio magnam dolore iusto maiores!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis reprehenderit officia alias explicabo temporibus saepe eaque modi fugiat ea, magni facere. Sint magni totam optio consequuntur impedit est delectus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, itaque. Ratione aspernatur reiciendis ullam nobis voluptatum magni quia officiis iusto obcaecati laborum cupiditate eligendi consequatur vitae illo accusamus, rem incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero explicabo tenetur esse. Tempora numquam tempore, ipsa error in incidunt exercitationem eos illo. Beatae quam voluptate voluptatibus quae magnam labore.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nobis id obcaecati aliquid, suscipit ullam eius? Vitae earum eum dolor esse nobis, laborum nisi molestias nihil officia perspiciatis, similique nemo?
                    </p>
                </div>
                <NavLink to="/" className="btn btn_css">
                    Retour
                </NavLink>
            </div>
        </div>
    )
}

export default Information;