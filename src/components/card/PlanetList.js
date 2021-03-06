import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPlanet } from '../../actions/cardActions';
import './Card.css';

class PlanetList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
        card: null,
        planet: null,
        planetkey: null,
        planetname: null
    }
    
  }

//   componentDidMount(){
//     this.props.loadPlanetData(this.props.planets);
//   }

//   componentWillUnMount(){
//     console.log(this.state.planetkey);
//     this.setState({
//         planetname: this.state.planetkey
//     })
//   }
  
//   componentWillReceiveProps(nextProps) {
//     if(nextProps.planet != null){
//         this.setState({
//             planetkey: nextProps.planet[0].name
//         })
//     }
//   }

  render() {
    const planetkey = this.props.planets;
    console.log("planet: " + planetkey);
    let planetList = this.props.planet.map(function(planet, index) {
        if(planet.id != planetkey){
            return( " " );
        }else{
            return (
                planet.name
            );
        }
    });

    return (
       <span>
        { planetList }
        </span> 
    );
  }
}

const mapStateToProps = (state) => ({
    planet: state.planet
});

const mapDispatchToProps = (dispatch) => ({
    loadPlanetData: () => dispatch(loadPlanet())
})

export default connect(mapStateToProps, mapDispatchToProps) (PlanetList);
