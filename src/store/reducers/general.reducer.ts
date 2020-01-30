import * as Actions from '../actions';
import imageProvider from 'assets';


type generalReducerType = {
    bannerUrl:'string'
}
const initialState: generalReducerType = {
    bannerUrl:imageProvider.get('banner')
};

const initialPropsReducer = function (state = initialState, action: Actions.AppActions): generalReducerType {
    switch (action.type) {

        default:
            {
                return state;
            }
    }
};

export default initialPropsReducer;