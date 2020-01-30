import { Dispatch } from 'redux';
import { AppState } from 'store/store';
import { tProduct } from 'components/Product/Product';


export const SET_PROP = '[PRODUCT] SET_PROP';


export interface ProductSetAction {
    type: typeof SET_PROP;
    payload: tProduct
}

export const setProductProperty = (id: string, prop: string, value: any) => {
    return (dispatch: Dispatch<ProductActionsType>, getState: () => AppState): void => {
        let product = getState().product.list.find(x => x.id === id),
            newProductObject = Object.assign({}, product, { [prop]: value });
        dispatch({ type: SET_PROP, payload: newProductObject });
    }
};

export type ProductActionsType =
    ProductSetAction;