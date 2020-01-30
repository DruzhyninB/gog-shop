import * as React from 'react';

import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from "react-router";
import { renderRoutes } from 'react-router-config';

import ReduxToastr from 'ultumus-react-redux-toastr';

import 'ultumus-react-redux-toastr/lib/css/react-redux-toastr.min.css';
import Header from 'components/Header/Header';

interface WrapperProps { routes: Array<object> }
type Props = WrapperProps & RouteComponentProps;

class Wrapper extends React.Component<Props, any> {

  render() {
    let { routes } = this.props;
    return (
      <React.Fragment>
        <Header />
        {renderRoutes(routes)}
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          position="bottom-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          closeOnToastrClick
        />
      </React.Fragment>
    )
  }
}

export default withRouter(Wrapper) as any;
