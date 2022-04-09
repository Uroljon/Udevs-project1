import React, { useEffect, useState } from "react";
import "./allPro.css";
import star from "../../img/star.png"
import stat from "../../img/stat.png"


export default function AllPro() {

    const [allList, setAllList] = useState([])

    function getAllList() {


        fetch('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/products')
            .then(AllRes => AllRes.json())
            .then(AllData => setAllList(AllData))
    }

    useEffect(() => {
        getAllList()
    }, [])

    let limited = allList.slice(0, 6).map(item => (
        <div className="card" key={item.id}>
        <img className="card__img" src={item.image} alt="img" />
        <p>{item.name}</p>
        <img src={star} alt="star" />
        {item.old_price && <p className="old_price">{item.old_price} $</p>}
        <h4>{item.price} $</h4>
        {item.monthly_pay && <p>from {item.monthly_pay}$ / month</p>}
        <div>


            <button className={item.in_stock ? "card__btn": "card__btn1"} >В корзину</button>
            <img src={stat} alt="img" />
        </div>
    </div>
    ) )      
    

    let allItem = allList.map(item => (
        <div className="card" key={item.id}>
        <img className="card__img" src={item.image} alt="img" />
        <p>{item.name}</p>
        <img src={star} alt="star" />
        {item.old_price && <p className="old_price">{item.old_price} $</p>}
        <h4>{item.price} $</h4>
        {item.monthly_pay && <p>from {item.monthly_pay}$ / month</p>}
        <div>


            <button className={item.in_stock ? "card__btn": "card__btn1"} >В корзину</button>
            <img src={stat} alt="img" />
        </div>
    </div>
    )
       
    )

    const [show, setShow] = useState(true)

    function showAll() {
        setShow(prev => !prev)
    }

    return (
        <>
            <div className="title__wrapper">
                <h2>Выбор покупателей</h2>
                <p className="showAll" onClick={showAll}>Смотреть все</p>
            </div>

            <div className="newProduct">
                {show ? limited : allItem}
            </div>
        </>
    )
}