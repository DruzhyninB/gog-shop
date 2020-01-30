import { Dispatch } from 'redux';
import { AppState } from 'store/store';
import { tProduct } from 'components/Product/Product';
import { setProductProperty } from './product.action';


export const ADD_CART = '[CART] ADD_CART';
export const REMOVE_CART = '[CART] REMOVE_CART';
export const CLEAR_CART = '[CART] CLEAR_CART';


export interface CartAddAction {
    type: typeof ADD_CART;
    payload: tProduct
}

export interface CartRemoveAction {
    type: typeof REMOVE_CART;
    payload: string
}

export interface CartCleareAction {
    type: typeof CLEAR_CART;
}

export const addToCart = (id: string) => {
    return (dispatch: Dispatch<any>, getState: () => AppState): void => {
        let product = getState().product.list.find(x => x.id === id);
        dispatch(setProductProperty(id, 'inCart', true));
        dispatch({ type: ADD_CART, payload: product });
    }
};

export const removeFromCart = (id: string) => {
    return (dispatch: Dispatch<any>, getState: () => AppState): void => {
        dispatch(setProductProperty(id, 'inCart', false));
        dispatch({ type: REMOVE_CART, payload: id });
    }
};
export const clearCart = () => {
    return (dispatch: Dispatch<any>, getState: () => AppState): void => {
        getState().product.list.forEach(product=>{
            dispatch(setProductProperty(product.id, 'inCart', false));
        })
        dispatch({ type: CLEAR_CART });
    }
};

export type CartActionsType =
    CartAddAction |
    CartRemoveAction |
    CartCleareAction;