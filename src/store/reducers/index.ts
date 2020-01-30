import {combineReducers} from 'redux';

import product from './product.reducer';
import cart from './cart.reducer';
import general from './general.reducer';

import {reducer as toastrReducer} from 'ultumus-react-redux-toastr'

const rootReducer = combineReducers({
    product,
    cart,
    general,
    toastr: toastrReducer
});

export default rootReducer;
