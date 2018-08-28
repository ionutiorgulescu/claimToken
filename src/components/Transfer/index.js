import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTransfers } from '../../data/selectors';
import CompletedReceivedScreen from './CompletedReceivedScreen';
import ReceivingScreen from './ReceivingScreen';
import WithHistory from './../HistoryScreen/WithHistory';
import TxErrorScreen from './TxErrorScreen';
import { Row, Col } from 'react-bootstrap';


export class TransferScreen extends Component {

    render() {
        const { transfer, currentStep, urlError } = this.props;
        // if transfer not found
        if (urlError) {
            return (<div style={{ color: 'red' }}>{urlError}</div>);
        }

        if (transfer.isError) {
            return (<TxErrorScreen transfer={transfer}/>);
        }

        switch (transfer.status) {
            case 'receiving':
                return (
                    <ReceivingScreen transfer={transfer} />
                );
            case 'received':
                return (
                    <CompletedReceivedScreen transfer={transfer} />
                );
            default: {
                alert("Unknown status: " + transfer.status);
            }
        }
    }
}

const TransferScreenWithHistory = (props) => (
    <WithHistory {...props}>
        <Row>
            <Col sm={4} smOffset={4}>
                <TransferScreen {...props}/>
            </Col>
        </Row>

    </WithHistory>
);

const mapStateToProps = (state, props) => {
    const transferId = props.match.params.transferId;
    const transfer = getAllTransfers(state).filter(transfer => transfer.id === transferId)[0] || {};
    let urlError = "";
    if (!transfer || !transfer.id) {
        urlError = "Transfer not found. Check the url!";
    }

    return {
        transfer,
        urlError
    };
}


export default connect(mapStateToProps)(TransferScreenWithHistory);