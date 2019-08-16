import React, { Component } from 'react'

export class HouseButton extends Component {
    render() {
        return (
            <div>   
                <div className="ph3">
            
                    <button 
                        name="The North"
                        type="button"
                        value="The North" 
                        onClick={this.props.getHouses}
                        className="f6 link dim br2 ma2 ph3 pv2 mb2 dib white bg-mid-gray" 
                        href="#0">
                        The North
                    </button>

                    <button 
                        type="button" 
                        name="The Westerlands" 
                        value="The Westerlands" 
                        onClick={this.props.getHouses} 
                        className="f6 link dim br2 ma2 ph3 pv2 mb2 dib white bg-mid-gray">
                        The Westerlands
                    </button>

                    <button 
                        type="button" 
                        name="Dorne" 
                        value="Dorne" 
                        onClick={this.props.getHouses}
                        className="f6 link dim br2 ma2 ph3 pv2 mb2 dib white bg-mid-gray" >
                        Dorne
                    </button>
                    
                    <button 
                        type="button" 
                        name="The Reach" 
                        value="The Reach" 
                        onClick={this.props.getHouses}
                        className="f6 link dim br2 ma2 ph3 pv2 mb2 dib white bg-mid-gray">
                        The Reach
                    </button>
                    
                    <button
                        type="button" 
                        name="The Vale" 
                        value="The Vale" 
                        onClick={this.props.getHouses} 
                        className="f6 link dim br2 ma2 ph3 pv2 mb2 dib white bg-mid-gray">
                        The Vale
                    </button>
                    
                    <button
                        type="button" 
                        name="The Riverlands" 
                        value="The Riverlands" 
                        onClick={this.props.getHouses} 
                        className="f6 link dim br2 ma2 ph3 pv2 mb2 dib white bg-mid-gray">
                        The Riverlands
                    </button>
                    
                    <button
                        type="button" 
                        name="The Crownlands" 
                        value="The Crownlands" 
                        onClick={this.props.getHouses} 
                        className="f6 link dim br2 ma2 ph3 pv2 mb2 dib white bg-mid-gray">
                        The Crownlands
                    </button>
                    
                    <button
                        type="button" 
                        name="The Stormlands" 
                        value="The Stormlands" 
                        onClick={this.props.getHouses} 
                        className="f6 link dim br2 ma2 ph3 pv2 mb2 dib white bg-mid-gray">
                        The Stormlands
                    </button>
                    
                    <button
                        type="button" 
                        name="The Neck" 
                        value="The Neck" 
                        onClick={this.props.getHouses} 
                        className="f6 link dim br2 ma2 ph3 pv2 mb2 dib white bg-mid-gray">
                        The Neck
                    </button>
                    
                    <button
                        type="button" 
                        name="Iron Islands" 
                        value="Iron Islands" 
                        onClick={this.props.getHouses} 
                        className="f6 link dim br2 ma2 ph3 pv2 mb2 dib white bg-mid-gray">
                        Iron Islands
                    </button>
                </div>
                
            </div>
        )
    }
}

export default HouseButton