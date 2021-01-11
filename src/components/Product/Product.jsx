import React from "react"
import { useDispatch } from "react-redux"
import "./Product.scss"
import { addtobasket } from "../../Redux/actions/Actions"

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch()

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={() => dispatch(addtobasket({ id, title, image, price, rating }))}>Add to Basket</button>
    </div>
  )
}

export default Product