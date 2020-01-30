import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as Actions from 'store/actions';

//Types
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps } from "react-router";
import { AppState } from 'store/store';

import './Product.scss'
import Utl from 'utility';


interface ProductProps { }

export type tProduct = {
    id: string
    title: string
    discount?: number
    cover: string
    price: number //prive in cents
    owned: boolean,
    inCart?: boolean
}

type Props = ProductProps & tProduct & LinkStateProp & LinkDispatchprop & RouteComponentProps;
class Product extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }
    getButtonText = () => {
        let { price, owned, inCart } = this.props;
        if (owned) {
            return (<span className="owned">owned</span>);
        }
        if (inCart) {
            return (<span className="incart">In Cart</span>);
        }
        return (<span className="price">{Utl.formatCurrency(price)}</span>);
    }

    addToCart = () => {
        const { id, inCart } = this.props;
        if (!inCart) {
            this.props.addToCart(id)
        }
    }
    render() {
        let { id, title, cover, discount, owned } = this.props;
        return (
            <div className={cn("product", `id-${id}`)}>
                <div className="product-cover">
                    <img src={cover} alt={title} title={title} />
                </div>
                <div className="product-body">
                    <p className="product-body__title">{title}</p>
                    <div className="product-body__actions">
                        {discount &&
                            <div className="discount">-{discount}%</div>}
                        <button onClick={this.addToCart} className="button-addtocart" disabled={owned}>{this.getButtonText()}</button>
                    </div>
                </div>
            </div>
        )
    }
}

interface LinkDispatchprop {
    addToCart: (id: string) => void
}
function mdtp(dispatch: ThunkDispatch<any, any, Actions.AppActions>, ownProps: Props): LinkDispatchprop {
    return bindActionCreators({
        addToCart: Actions.addToCart
    }, dispatch);
}

interface LinkStateProp {
    cartList: tProduct[]
}
function mstp(state: AppState, ownProps: Props): LinkStateProp {
    return {
        cartList: state.cart.list
    }
}

export default connect(mstp, mdtp)(Product) as any;
