import React from "react"
import "./Subtotal.scss"
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from "../../Redux/reducers/Reducer"
import { useSelector } from "react-redux"

const Subtotal = () => {
  const basket = useSelector(state => state.appReducer.basket)

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>

          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal