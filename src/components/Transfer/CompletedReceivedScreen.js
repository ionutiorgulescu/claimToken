import React from 'react';
import { getEtherscanLink } from './components';
import TransferStepsBar from './../common/TransferStepsBar';


const styles = {
    titleContainer: {
        marginBottom: 12
    },
    buttonContainer: {
        width: '70%',
        margin: 'auto',
        marginTop: 70
    },
    helpContainer: {
        marginTop: 27
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


const CompletedReceivedScreen = ({transfer}) => {

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

                    <div className="title center">
                        You claimed <span className="text-blue">{transfer.amount}</span>
                        <span className="text-gray"> {transfer.tokenSymbol}</span>
                    </div>
                </div>

                <div style={styles.text}>
                    <div className="text">Transaction details on <a href={etherscanLink} className="link">Etherscan</a>
                    </div>
                </div>

        </div>
    );
}


export default CompletedReceivedScreen;