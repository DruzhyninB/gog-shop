import * as Actions from '../actions';
import { tProduct } from 'components/Product/Product';
import imageProvider from 'assets';
import Utl from 'utility';
type productReducerType = {
    list: tProduct[]
}
const initialState: productReducerType = {
    list: [{
        id: Utl.generateGUID(),
        title: 'Oddworld: Stranger\'s Wrath',
        cover: imageProvider.get('oddworld'),
        discount: 50,
        price: 999,
        owned: false,
    }, {
        id: Utl.generateGUID(),
        title: 'Chaos on Deponia',
        cover: imageProvider.get('deponia'),
        price: 1015,
        owned: true,
    }, {
        id: Utl.generateGUID(),
        title: 'The Settlers 2: Gold Edition',
        cover: imageProvider.get('settlers'),
        price: 1199,
        owned: false,
    }, {
        id: Utl.generateGUID(),
        title: 'Neverwinter Nights',
        cover: imageProvider.get('neverwinter'),
        discount: 50,
        price: 899,
        owned: false,
    }, {
        id: Utl.generateGUID(),
        title: 'Assasins Creed: Director\'s Cut',
        cover: imageProvider.get('assasins'),
        price: 1000,
        owned: false,
    }]
};

const initialPropsReducer = function (state = initialState, action: Actions.AppActions): productReducerType {
    switch (action.type) {
        case Actions.SET_PROP:{
            return{
                ...state,
                list:[
                    ...state.list.map(product=>{
                        if(product.id === action.payload.id){
                            return action.payload
                        }
                        return product
                    }),
                    
                ]
            }
        }

        default:
            {
                return state;
            }
    }
};

export default initialPropsReducer;