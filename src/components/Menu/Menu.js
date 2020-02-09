import React from "react";
import {connect} from 'react-redux';
import { Route, Link } from "react-router-dom";

const menus = (totalFav) => {
  return [
    {
      name: "Search",
      to: "/",
      exact: true
    },
    {
      name: `Favorite (${totalFav})`,
      to: "/favorite",
      exact: false
    }
  ];
} 
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "nav-item active" : "nav-item";
        return (
          <li className={active}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
const showMenus = menus => {
  var result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          label={menu.name}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
        />
      );
    });
  }
  return result;
};

const mapStateToProp = state => ({
  favorites: state.favorites
})

const  ConnectedMenu = ({favorites}) =>{
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">{showMenus(menus(favorites.length))}</ul>
    </nav>
  );
}

const Menu = connect(mapStateToProp)(ConnectedMenu);
export default Menu