import React, {useState, useEffect} from "react";
import "./products.css"

import star from "../../img/star.png"
import stat from "../../img/stat.png"




export default function Products() {

    const [list, setList] = useState([])

        function getList() {
            
            fetch('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/products')
        .then(res => res.json())
        .then(data => setList(data))

        }

        
        useEffect(()=> {
            getList()
        }, [])
        
        let newPro = list.filter(item => item.status ==="new")

        let renderNewPro = newPro.map(card => (
            <div className="card" key={card.id}>
                <img className="card__img" src={card.image} alt = "img"/>
                <p>{card.name}</p>
                <img src={star} alt ="star"/>
               {card.old_price && <p className="old_price">{card.old_price} $</p>}
               <h4>{card.price} $</h4>
               {card.monthly_pay && <p>from {card.monthly_pay}$ / month</p>}
               <div>


               <button className={card.in_stock ? "card__btn": "card__btn1"}>В корзину</button>
               <img src={stat} alt = "img"/>
               </div>
            </div>
        ))

    
       
    return(
        <>
        <h2>Новинки</h2>

        <div className="newProduct">
            {renderNewPro}
        </div>

        </>
    )
}