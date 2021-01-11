import React from "react"
import "./Checkout.scss"
import Subtotal from "../../components/Subtotal/Subtotal"
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct"
import { useSelector } from "react-redux"

function Checkout() {
  const reducerdata = useSelector(state => state.appReducer)

  return (
    <div className="checkout">
      <div className="checkout__left">

        <div>
          <h3>Hello, {reducerdata.user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {reducerdata.basket.map((item, i) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              key={i}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout