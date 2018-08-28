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


const ReceivingScreen = ({transfer}) => {

    const etherscanLink = getEtherscanLink({txHash: transfer.txHash, networkId: transfer.networkId});

    return (
        <div>
            <div style={styles.stepsBar}>
                <TransferStepsBar
                    status={transfer.status}
                    direction={transfer.direction}
                    isError={transfer.isError}/>
            </div>
            <div className="text-center">
                <div style={styles.text}>
                    <div className="title">
                        Transaction is processing...<br/>
                        Claiming <span className="text-blue">{transfer.amount}</span>
                        <span className="text-gray"> {transfer.tokenSymbol}</span>
                    </div>
                </div>
                <div style={styles.text}>
                    <div className="text">
                        It may take 1-2 min. You can close the screen<br/>
                        and check the status later in "Transfers"</div>
                </div>

                <div style={styles.text}>
                    <div className="text">
                        Transaction details on <a href={etherscanLink} className="link">Etherscan</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ReceivingScreen;