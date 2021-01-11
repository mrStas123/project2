import React from 'react'
import './Header.scss'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { auth } from "../../firebase"


const Header = () => {
    const reducerData = useSelector(state => state.appReducer)

    const handleAuthenticaton = () => {
        if (reducerData.user) {
            auth.signOut()
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <p className="header__logo">SHOP</p>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <Link to={!reducerData.user && '/login'}>
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className="header__optionLineOne">Hello {!reducerData.user ? 'Guest' : reducerData.user.email}</span>
                        <span className="header__optionLineTwo">{reducerData.user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <span className="header__optionLineOne basket">Basket</span>
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {reducerData.basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header