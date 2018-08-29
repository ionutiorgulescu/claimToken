import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import { Link } from "react-router-dom";


const styles = {
    notConnectedButton: {

    },
    redDot: {
        display: 'inline',
        color: '#e64437',
        marginLeft: 3
    },
    web3: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0
    },
    headerRow: {
        height: 44,
        display: 'block',
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: 10
    },
    headerLogo1: {
        width: 55,
        height: 29,
        fontFamily: "SF Display Black",
        color: "black",
        fontSize: 24,
        letterSpacing: 1,
        textAlign: 'center',
        marginTop: 9
    },
    headerLogo2: {
        letterSpacing: 0,
        display: 'inline',
        color: '#d14836'
    }
}


const NoWalletHeader = () => {
    let headerLogoClass = 'no-wallet-header-logo';
    let headerButtonClass = 'not-connected-button';

    return (
        <Grid>
            <Row className="header-row">
                <Col xs={12}>
                    <Row style={styles.headerRow}>
                        <Col xs={6} style={{ padding: 0 }}>
                            <Link className="no-underline" to="/" onClick={() => {
                                if (window.location.hash && window.location.hash.length < 3) {
                                    window.location.reload();
                                }
                            }}>
                                <div className={headerLogoClass}>
                                    Logo<div style={styles.headerLogo2}>HERE</div></div>
                            </Link>
                        </Col>
                        <Col style={styles.web3} xs={6}>
                            <div className={headerButtonClass}>
                                Not connected to Web3
                                <div style={styles.redDot}>&#9679;</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    );
}

export default NoWalletHeader;