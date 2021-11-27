import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";


class FederatedWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return this.props.error || <div>Something went wrong.</div>;
      }
  
      return (
        <React.Suspense fallback={this.props.delayed || <div />}>
          {this.props.children}
        </React.Suspense>
      );
    }
  }
  
  const wrapComponent = (Component) => ({ error, delayed, ...props }) => (
    <FederatedWrapper error={error} delayed={delayed}>
      <Component {...props} />
    </FederatedWrapper>
  );
  
  const BasketStatus = wrapComponent(React.lazy(() => import("basket/BasketStatus")));
  
  const Header = wrapComponent(React.lazy(() => import("shared/Header")));
  
const HeaderChildComponent = ({badge}) =>
{
  {
    console.log(badge);
  }
  return (<header className="container-fluid">
  <div className="esh-app-header-promo">
      <span className="esh-app-header-promo-title">All T-SHIRTS</span>
      <span className="esh-app-header-promo-subtitle">On sale this weekend</span>
  </div>
  <div className="container">
      <article className="d-flex align-content-center justify-content-between">
          <section>
                  <img className="esh-app-header-brand" src='./src/assets/images/logo_color.svg' />
          </section>

          <section className="d-flex align-content-center justify-content-between">
              <BasketStatus badge={badge}></BasketStatus>
          </section>
      </article>
  </div>
</header>);
}

const CatalogContainer = wrapComponent(React.lazy(() => import("catalog/CatalogContainer")));
  
const App = () =>
{
  const [basket, setBasket ] = useState({ buyerId: '', items: [] });
  const [badge, setBadge ] = useState(0);
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
  setBadge(_basket?.items?.length);
  }

return (<div className="container-fluid">
  <div className="row esh-app-header esh-app-header-expanded">
    <Header url="/catalog" component={<HeaderChildComponent badge={badge}></HeaderChildComponent>}></Header>
  </div>
  <div className="row">
    <CatalogContainer addItemToBasket={addItemToBasket} />  
  </div>
</div>);
}

ReactDOM.render(<App />, document.getElementById("app"));
