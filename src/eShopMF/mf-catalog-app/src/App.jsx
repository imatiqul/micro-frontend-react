import React, { useState }  from "react";
import ReactDOM from "react-dom";
import  CatalogContainer from "./pages/Catalog/CatalogContainer";
import "./index.css";

const App = () => 
{
    const [basket, setBasket ] = useState({ buyerId: '', items: [] });
    
  const addItemToBasket = (catalog) => {

    let _basket =  { buyerId: '', items: [] };
    if(basket)
    {
        _basket =  basket;
    }

    let basketItem = _basket.items.find(value => value.productId == catalog.productId);

    if (basketItem) {
      basketItem.quantity++;
  } else {
    _basket.items.push({
        pictureUrl: catalog.pictureUri,
        productId: catalog.id,
        productName: catalog.name,
        quantity: 1,
        unitPrice: catalog.price,
        id: Date.now(),
        oldUnitPrice: 0
    });
  }
  
  setBasket(_basket);
  }

  return (<div className="container">
  <div className="row"><CatalogContainer addItemToBasket={addItemToBasket} /></div></div>);
}


ReactDOM.render(<App />, document.getElementById("app"));
