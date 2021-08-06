import React, { Component } from 'react';

class Account extends Component {
  constructor () {
    super()
    this.state = {
      balance: 0,
      textInput: React.createRef()
    }
  }
  depositMoney = () => {
    let balance = this.state.balance + Number(this.state.textInput.current.value)
    this.setState({
      balance,
    })
  }
  withdrawMoney = () => {
    let balance = this.state.balance - Number(this.state.textInput.current.value)
    this.setState({
      balance,
    })
  }
  render() {
    return (
      <div className={this.state.balance === 0 ? "account zero" : "account"}>
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input ref={this.state.textInput} type="text" placeholder="enter an amount" />
        <input onClick={this.depositMoney} type="button" value="Deposit" />
        <input onClick={this.withdrawMoney}type="button" value="Withdraw" />
      </div>
    )
  }
}
export default Account;
