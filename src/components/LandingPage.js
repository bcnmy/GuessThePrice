import React, { Component } from 'react';
import Header from './Header';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Footer from './Footer';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const {config} = require("./../config");
const {LAUNCH} = config.state;

class LandingPage extends Component{
    componentDidMount() {
        addResponseMessage("Welcome to this awesome chat!");
    }

    handleNewUserMessage = (newMessage) => {
        console.log(newMessage.indexOf('.')> -1);
        if(newMessage.indexOf('.')> -1){
            alert("true");
            // let urlLink = newMessage.link(newMessage);
            addLinkSnippet({title:newMessage,link:newMessage});
        }
        else{
            addUserMessage(newMessage);
        }
        // Now send the message throught the backend API
    }

    render() {
        return(
            <div className="main-section">
                <Header currentState={this.props.currentState} changeState={this.props.changeState} onLogin={this.props.onLogin}
                userLogin={this.props.userLogin} username={this.props.username} promptForUsername={this.props.promptForUsername}
                onLogout={this.props.onLogout} wallet={this.props.wallet} userInfo={this.props.userInfo} getPrice={this.props.getPrice}
                setOverlayActive={this.props.setOverlayActive} setOverlayMessage={this.props.setOverlayMessage}
                showSnack={this.props.showSnack} userContract={this.props.userContract} promptForWithdraw={this.props.promptForWithdraw}
                promptForGameRules={this.props.promptForGameRules} initUserInfo={this.props.initUserInfo}/>
                <div className="main-container">
                    <LeftSection currentState={this.props.currentState} changeState={this.props.changeState}
                    getPrice={this.props.getPrice} counter={this.props.counter} lastPrice={this.props.lastPrice}
                    lastPriceUnit={this.props.lastPriceUnit} stakePrice={this.props.stakePrice}
                    requestCurrentPrice={this.props.requestCurrentPrice} requestStakePrice={this.props.requestStakePrice}
                    userAddress={this.props.userAddress} userLogin={this.props.userLogin} userInfo={this.props.userInfo}
                    showSnack={this.props.showSnack} placeBet={this.props.placeBet} betUpList={this.props.betUpList}
                    betDownList={this.props.betDownList} winners={this.props.winners}
                    loosers={this.props.loosers} resultBetValue={this.props.resultBetValue} betPlaced={this.props.betPlaced}
                    isWinner={this.props.isWinner} resultPrice={this.props.resultPrice}/>

                    <RightSection currentState={this.props.currentState} changeState={this.props.changeState}
                    requestCurrentPrice={this.props.requestCurrentPrice} lastPrice={this.props.lastPrice}
                    lastPriceUnit={this.props.lastPriceUnit} requestStakePrice={this.props.requestStakePrice}
                    betUpList={this.props.betUpList} betDownList={this.props.betDownList} winners={this.props.winners}
                    loosers={this.props.loosers} resultBetValue={this.props.resultBetValue} userAddress={this.props.userAddress}
                    betPlaced={this.props.betPlaced}/>
                </div>
                <div className="trollBox">
                    <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    // profileAvatar={logo}
                    title=""
                    subtitle=""
                    />
                </div>

                {this.props.currentState===LAUNCH && <Footer />}
            </div>
        );
    }
}

export default LandingPage;