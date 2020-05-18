import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Options from './Options/Options'

class CustomizeLaptop extends React.Component {
    render(){
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Options features={this.props.store} selected={this.props.selected} updateFeature={this.props.updateFeature}/>
            </form>
        )
    }
}

export default CustomizeLaptop; 