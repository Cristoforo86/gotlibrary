import React, { Fragment, Component } from 'react';
import axios from 'axios';

class House extends Component {
    constructor(){
        super()
        this.state = {
            overlords: ''
        }
    }
    
    componentDidMount(){
        this.props.getHouse(this.props.match.params.name);
        console.log(this.props.match.params.name);
    }
   
    getOverlord = async () => {
        const res = await axios.get(
          `${this.props.house.overlord}`
        );
        console.log(res.data)
        this.setState({ overlords: res.data.name }, function (){
            console.log(res.data);
            console.log(res.data.name);
            console.log(this.state.overlords);
        });
        
      }
    render() {
      
        const { name, region, words, coatOfArms, titles, seats,currentLord, heir, overlord } = this.props.house;

        return (
            <Fragment>
            <div>
                
                <h1>{name}</h1>
                <h2>Region: {region}</h2>
                <h3>Words: {words}</h3>
                <h3>Coat of Arms: {coatOfArms}</h3>
                <h3>Titles: {titles}</h3>
                <h3>Seats: {seats}</h3>
                <h3>Lord: {currentLord}</h3>
                <h3>Heir: {heir}</h3>
                <h3>Overlord: {overlord}</h3>
                {(overlord) && <h3>Overlord: {overlord}</h3>}
                <h3>Test:{this.state.overlords}</h3>
                                
                <button type="button" value="overlords" name="overlords" onClick={this.getOverlord}>Show Overlord(s)</button>
                
            </div>
            </Fragment>
        )
    }
}

export default House;
