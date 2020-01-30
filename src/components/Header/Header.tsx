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

import './Header.scss'

//Assests
import logo from 'assets/logo.png';
import Cart from 'components/Cart/Cart';


interface HeaderProps { }
type Props = HeaderProps & LinkStateProp & LinkDispatchprop & RouteComponentProps;
class Header extends React.Component<Props, any> {

  constructor(props: Props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={cn("header")}>
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="header-logo" src={logo} alt="GOG.com"/>
            </div>
            <div className="col cart-wrapper">
              <Cart />
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

}
function mstp(state: AppState, ownProps: Props): LinkStateProp {
  return {

  }
}

export default withRouter(connect(mstp, mdtp)(Header)) as any;
