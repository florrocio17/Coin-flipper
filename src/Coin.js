import React, {Component} from 'react';
import Moneda from './Moneda';
import { choice } from './helpers';

class Coin extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc:"https://tinyurl.com/react-coin-heads-jpg"},
            {side: "tails", imgSrc:"http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=f285ba7ec09b1cd2105326da2236c27469c14e02-1589320180-0-AW0dIYEa0h_Oh9ghYzhIGsaP6THq8yhU4q4vOqh427bQKNJq2AjdWMIZmKU9_hCMctli0t3D9WZlMEWVUOncQgdi7XEn3w400UUjOpQGkmski4pb9lDpIsJIAl2mNzCQ8Qdj0wjv1wqaguOYIeMVxeV-7_sS61znsDhE9_4xkaZ4qTolj8QD8kSlHnz028gQpEqT93TZSHZ9KnQWU9g5vLxut8bYQroKupPJa_pzk-KCIeo6qEUgEh5aqS5CiWVwaG2go1rW6DY9yajWsq4slwzNRL-Lm-J3agKsPOyTuQLhUtEgNYp74i_s-TUDRKgXHw"}
        ]
        
    };
        constructor(props) {
            super(props);
            this.state = {
                currCoin: null,
                nFlips: 0,
                nHeads: 0,
                nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
     }
     flipCoin(){
         const newCoin = choice(this.props.coins);
         this.setState(st => {
             return {
                 currCoin: newCoin,
                 nFlips: st.nFlips + 1,
                 nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                 nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
             };
         });
     }

     handleClick() {
         this.flipCoin();
     }
     render () {
         return (
             <div className="Coin">
                 <h2>Let´s flip a coin!</h2>
                 <button onClick={this.handleClick}>Flip me!</button>
                 {this.state.currCoin && <Moneda info={this.state.currCoin}/>}
                 <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
             </div>
         )
     }
}

export default Coin;