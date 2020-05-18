import React from 'react'; 

class CartItems extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        const summary = Object.keys(this.props.selected.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected.selected[feature];
        
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
          });

        return (
            <>
                {summary}
            </>
        )
    }
}

export default CartItems; 