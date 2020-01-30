import * as Actions from '../actions';
import { tProduct } from 'components/Product/Product';


type cartReducerType = {
    list:tProduct[]
}
const initialState: cartReducerType = {
    list:[]
};

const initialPropsReducer = function (state = initialState, action: Actions.CartActionsType): cartReducerType {
    switch (action.type) {
        case Actions.ADD_CART:{
            return{
                ...state,
                list:[
                    ...state.list,
                    action.payload
                ]
            }
        }
        case Actions.REMOVE_CART:{
            let filteredList = state.list.filter(x=>x.id !== action.payload)
            return{
                ...state,
                list:[
                    ...filteredList
                ]
            }
        }
        case Actions.CLEAR_CART:{
            return{
                ...state,
                list:[]
            }
        }
        default:
            {
                return state;
            }
    }
};

export default initialPropsReducer;