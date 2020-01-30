import React, { createRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as Actions from 'store/actions';
import imageProvider from 'assets';

//Types
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps } from "react-router";
import { AppState } from 'store/store';

import './Cart.scss';
import { tProduct } from 'components/Product/Product';
import Utl from 'utility';


interface CartProps { }

type Props = CartProps & LinkStateProp & LinkDispatchprop & RouteComponentProps;
class Cart extends React.Component<Props, any> {
    private $element = createRef<HTMLDivElement>();
    private block = createRef<HTMLDivElement>();
    constructor(props: Props) {
        super(props);
        // TODO : Add ability to close dropdown by outside click
        this.state = {
            icon: imageProvider.get('cart'),
            dropdownOpened: false
        }
    }

    componentDidMount() {

    }
    dropdownToggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { dropdownOpened } = this.state;
        if (!dropdownOpened) {
            document.addEventListener('click', this.closeDropdown)
        }
        this.setState({ dropdownOpened: !dropdownOpened });

    }

    closeDropdown = (event: MouseEvent) => {
        if (!this.$element.current.contains(event.target as Node)) {
            this.setState({ dropdownOpened: false });
            document.removeEventListener('click', this.closeDropdown);
        }
    }

    calculateTotal = () => {
        const { cartlist } = this.props;
        let total = 0;
        cartlist.forEach(product => {
            total += product.price;
        })
        return Utl.formatCurrency(total);
    }

    clearCart = () => {
        const { cartlist } = this.props;
        if (cartlist.length) {
            this.props.clearCart();
        }
    }
    removeFromCart = (id: string) => {
        this.props.removeFromCart(id);
    }

    render() {
        const { icon, dropdownOpened } = this.state;
        const { cartlist } = this.props;
        return (
            <div className={cn("cart")} ref={this.$element}>
                <div className="cart-toggle" onClick={this.dropdownToggle}>
                    <img src={icon} alt="cart" />
                    <span>{cartlist.length}</span>
                </div>
                <div className={cn("cart-dropdown", { "opened": dropdownOpened })}>
                    <div className="cart-dropdown_actions">
                        <div className="cart-dropdown_actions-info">
                            <div className="cart-dropdown_actions-info-count">
                                {cartlist.length} item{cartlist.length >= 1 || !cartlist.length ? "s" : ""} in cart
                            </div>
                            <div className="cart-dropdown_actions-info-price">{this.calculateTotal()}</div>
                        </div>
                        <button onClick={this.clearCart} className="cart-dropdown_actions-clear">Clear cart</button>
                    </div>
                    <div className="cart-dropdown_product-list">
                        {
                            !!cartlist.length && cartlist.map(product => {
                                return (
                                    <div key={product.id} className="cart-item">
                                        <div className="cart-item__cover">
                                            <img src={product.cover} alt={product.title} />
                                        </div>
                                        <div className="cart-item__body">
                                            <div className="cart-item__body-info">
                                                <div className="cart-item__body-info-title">{product.title}</div>
                                                <button onClick={() => this.removeFromCart(product.id)} className="cart-item__body-info-remove">remove</button>
                                            </div>
                                            <div className="cart-item__body-price">{Utl.formatCurrency(product.price)}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {!cartlist.length && <div className="cart-empty">Cart is Empty</div>}
                    </div>
                </div>
            </div>
        )
    }
}

interface LinkDispatchprop {
    clearCart: () => void
    removeFromCart: (id: string) => void
}
function mdtp(dispatch: ThunkDispatch<any, any, Actions.AppActions>, ownProps: Props): LinkDispatchprop {
    return bindActionCreators({
        clearCart: Actions.clearCart,
        removeFromCart: Actions.removeFromCart
    }, dispatch);
}

interface LinkStateProp {
    cartlist: tProduct[]
}
function mstp(state: AppState, ownProps: Props): LinkStateProp {
    return {
        cartlist: state.cart.list
    }
}

export default connect(mstp, mdtp)(Cart) as any;
