import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import web3Service from './services/web3Service';
import Header from './components/common/Header/';
import TransferComponent from './components/Transfer';
import ClaimScreen from './components/ClaimScreen/ClaimScreen';
import NoWalletHeader from './components/common/NoWalletHeader';
import { Loader } from './components/common/Spinner';
import NoWalletScreen from './components/NotConnectedScreens/NoWalletScreen';
import UnsupportedNetwork from './components/NotConnectedScreens/UnsupportedNetwork';

import './App.css';
import './carousel.min.css';
import './css/bootstrap.css';

class App extends Component {
    static _renderWrongNetwork() {
        return (
            <div>
                <NoWalletHeader />
                <UnsupportedNetwork />
            </div>
        );
    }

    static _renderNoWalletScreen() {
        return (
            <div>
                <NoWalletHeader />
                <NoWalletScreen />
            </div>
        );
    }

  render() {
//console.log(this.props);
      if (!this.props.loaded) {
          return (<Loader />);
      }

      if (!this.props.connected || !this.props.address || !this.props.balance) {
          return App._renderNoWalletScreen();
      }
      if (this.props.networkId !== "3"
          && this.props.networkId !== "1"
      ) {
          return App._renderWrongNetwork();
      }

    return (
              <Router>
                  <div>

                      <Header {...this.props} />

                      <Switch>
                          <Route exact path="/transfers/:transferId" component={TransferComponent} />
                          <Route path="/receive" component={ClaimScreen} />
                          <Route path='/r' render={(props) => {
                              return (
                                  <Redirect to={{
                                      pathname: '/receive',
                                      search: props.location.search
                                  }} />
                              );
                          }} />

                      </Switch>

                  </div>
              </Router>
    );
  }
}

function mapStateToProps(state) {
    let balance;
    const web3 = web3Service.getWeb3();
    if (state.web3Data.balance) {
        balance = web3.fromWei(state.web3Data.balance, 'ether').toNumber();
    }
    return {
        address: state.web3Data.address,
        balance,
        connected: state.web3Data.connected,
        networkId: state.web3Data.networkId,
        networkName: state.web3Data.networkName,
        loaded: state.web3Data.loaded
    };
}


export default connect(mapStateToProps)(App);
