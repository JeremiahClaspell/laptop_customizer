import React from 'react'; 
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class Options extends React.Component {

    constructor(props){
        super(props); 
    }

    render(){
        // This object will allow us to
        // easily convert numbers into US dollar values
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        // This takes the Key of every item in the state and scaffolds the options list. it goes into each product, creating a section 
        //for the feature type, then creates a box for each option


        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx; //for a key
            const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item)); //for product key
              return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selected.selected[feature].name}
                    onChange={e => this.props.updateFeature(feature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
                </div>
              );
            });
            return (         
                <fieldset className="feature" key={this.featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>)
        })
            return (
                <>
                {features}
                </>
            );
    }; 

}




  export default Options