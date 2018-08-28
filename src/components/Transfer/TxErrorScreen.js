import React from 'react';
import { getEtherscanLink } from './components';
import TransferStepsBar from './../common/TransferStepsBar';


const styles = {
    titleContainer: {
        marginTop: 65,
        marginBottom: 12
    },
    subTitleContainer: {
        width: 300,
        margin: 'auto',
    },
    helpContainer: {
        marginTop: 31.5
    },
    stepsBar: {
        marginTop: 60
    },
    text: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 14,
        fontFamily: "SF Display Bold",
        lineHeight: 1.1,
        marginRight: 2,
        marginTop: 30,
        justifyContent: 'center'
    },
}


const TxErrorScreen = ({transfer}) => {
    let subtitle;
    const etherscanLink = getEtherscanLink({txHash: transfer.txHash, networkId: transfer.networkId});
    return (
        <div>
            <div style={styles.stepsBar}>
                <TransferStepsBar
                    status={transfer.status}
                    direction={transfer.direction}
                    isError={transfer.isError}/>
            </div>
                <div style={styles.text}>
                    <div className="title">Transaction failed</div>
                </div>
                    <div>
                        <div style={styles.text}>
                            <div className="text">
                                Something went wrong. Check details on<br/>
                                <a href={etherscanLink} className="link">Etherscan</a> and if transaction is out of gas<br/>
                                send Ether again with higher gas price</div>
                        </div>
                    </div>

        </div>
    );
}


export default TxErrorScreen;