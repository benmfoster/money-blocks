import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockOne: 0,
      blockTwo: 0,
      blockThree: 0,
      blockFour: 0,
      blockFive: 0,
      blockSix: 0,
      blockSeven: 0,
      blockEight: 0,
      blockNine: 0,
      total: 0,
      incrementor: 1,
      display: 'hide',
      borderOffset: '',
      status: 'hello lowly peasant'
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
    handleOptionChange(changeEvent){
      this.setState({
        selectedOption: changeEvent.target.value
      });
    }
    buy() {
      if(this.state.total >= this.state.incrementor * 5) {
        this.setState({
          incrementor: this.state.incrementor * 5,
          total: this.state.total - this.state.incrementor * 5,
          display: 'show',
        })
        setInterval(() => {
          this.setState({
            total: this.state.total + this.state.incrementor,
          })
        }, 1000)
      }
    }
    rotateBorder() {
      if(this.state.borderOffset === '') {
        this.setState({
          borderOffset: 'border-offset',
        });
      } else {
        this.setState({
          borderOffset: '',
        });
      }
      if(this.state.total >= 1000) {
        this.setState({
          status: 'you are stacking up good job',
        });
      }
      if(this.state.total >= 100000) {
        this.setState({
          status: 'wow over one hundred grand',
        });
      }
      if(this.state.total >= 1000000) {
        this.setState({
          status: 'millionaire!',
        });
      }
      if(this.state.total >= 1000000000) {
        this.setState({
          status: 'billionaire!',
        });
      }
      if(this.state.total >= 1000000000000) {
        this.setState({
          status: 'okay seriously get a life',
          borderOffset: 'hide',
        });
      }
    }
    render() {
      return ( <div><div class="status">&nbsp;&nbsp;&nbsp;&nbsp;{this.state.status}</div><div className={'container-fluid ' + this.state.borderOffset} onClick={() => {
        this.rotateBorder();
      } }>
        <div onClick={() => {
        this.setState({ display: 'hide', });
      } }>
      <div className="row">
        <div className="col-md-12">Total: {this.state.total}</div>
      </div>
      <div className="row">
        <div className="col-xs-4" onClick={() => {
          this.setState({ blockOne: this.state.blockOne + this.state.incrementor, total: this.state.total + this.state.incrementor, });
        } }>{this.state.blockOne}</div>
        <div className="col-xs-4" onClick={() => {
          this.setState({ blockTwo: this.state.blockTwo + this.state.incrementor, total: this.state.total + this.state.incrementor, });
        } }>{this.state.blockTwo}</div>
        <div className="col-xs-4" onClick={() => {
          this.setState({ blockThree: this.state.blockThree + this.state.incrementor, total: this.state.total + this.state.incrementor, });
        } }>{this.state.blockThree}</div>
      </div>
      <div className="row">
        <div className="col-xs-4" onClick={() => {
          this.setState({ blockFour: this.state.blockFour + this.state.incrementor, total: this.state.total + this.state.incrementor, });
        } }>{this.state.blockFour}</div>
        <div className="col-xs-4" onClick={() => {
          this.setState({ blockFive: this.state.blockFive + this.state.incrementor, total: this.state.total + this.state.incrementor, });
        } }>{this.state.blockFive}</div>
        <div className="col-xs-4" onClick={() => {
          this.setState({ blockSix: this.state.blockSix + this.state.incrementor, total: this.state.total + this.state.incrementor, });
        } }>{this.state.blockSix}</div>
      </div>
      <div className="row">
        <div className="col-xs-4" onClick={() => {
          this.setState({ blockSeven: this.state.blockSeven + this.state.incrementor, total: this.state.total + this.state.incrementor, });
        } }>{this.state.blockSeven}</div>
        <div className="col-xs-4" onClick={() => {
          this.setState({ blockEight: this.state.blockEight + this.state.incrementor, total: this.state.total + this.state.incrementor, });
        } }>{this.state.blockEight}</div>
        <div className="col-xs-4" onClick={() => {
          this.setState({ blockNine: this.state.blockNine + this.state.incrementor, total: this.state.total + this.state.incrementor, });
        } }>{this.state.blockNine}</div>
      </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button onClick={() => {
            this.buy()
        }}>
            Buy *5 incrementor cost: {this.state.incrementor * 5}
          </button>
          <div className={'greeting ' + this.state.display}>Good job!!!!</div>
        </div>
      </div>
    </div></div>);
    }
  }

export default App;
