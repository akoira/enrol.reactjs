import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import PaymentPage from '../../payment/containers/PaymentPage';

interface AppProps {
}

class App extends React.Component<AppProps, void> {
  render() {
    return (
      <PaymentPage />
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
