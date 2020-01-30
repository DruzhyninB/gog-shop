import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as Actions from 'store/actions';

//Types
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps } from "react-router";
import { AppState } from 'store/store';

import { Banner } from 'components/Banner/Banner';

import './Shop.scss'
import Product, { tProduct } from 'components/Product/Product';


interface ShopProps { }
type Props = ShopProps & LinkStateProp & LinkDispatchprop & RouteComponentProps;
class Shop extends React.Component<Props, any> {

  constructor(props: Props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    let { productList, bannerUrl } = this.props;
    return (
      <div className={cn("shop")}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="shop-title">Game of the week</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Banner src={bannerUrl} title={'Game of the week'} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="product-container">
                {productList.map(product => {
                  return <Product {...product} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

interface LinkDispatchprop {

}
function mdtp(dispatch: ThunkDispatch<any, any, Actions.AppActions>, ownProps: Props): LinkDispatchprop {
  return bindActionCreators({

  }, dispatch);
}

interface LinkStateProp {
  productList: tProduct[]
  bannerUrl: string
}
function mstp(state: AppState, ownProps: Props): LinkStateProp {
  return {
    productList: state.product.list,
    bannerUrl: state.general.bannerUrl
  }
}

export default withRouter(connect(mstp, mdtp)(Shop)) as any;
