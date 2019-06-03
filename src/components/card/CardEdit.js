import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCard, updateCard } from '../../actions/cardActions';
import EditSrc from './../images/edit_btn.png';
import PlanetSelectButton from './PlanetSelectButton';
import './Card.css';

class CardEdit extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
        card: this.props.allcard,
        cardparam: null,
        isEditing: false,
        saving: false
    };
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

toggleEdit = () => {
    this.setState({ isEditing: true });    
}

saveCard = (event) => {
    event.preventDefault();
    this.setState({saving: true}); 
    // console.log(JSON.stringify(this.props.allcard));
    this.props.updateAllCardData(this.state.cardparam, this.props.cardId);
    this.setState({ isEditing: false });
    window.location.reload();
}

updateCardState = (event) => {
    const field = event.target.name;
    console.log("Update" + field);
    const card = this.props.allcard;
    card[this.props.cardId-1][field] = event.target.value;
    this.setState({ cardparam : card[this.props.cardId-1]});
    return this.props.allcard = card;
}

render() {
    const cardkey = this.props.cardId;
    if (this.state.isEditing) {
        let cardListname = this.props.allcard.map(function(allcard, index) {
            if(allcard.id != cardkey){
                return( null );
            }else{
                return ( allcard.name );
            }
        }).join('');
        let cardListbirthyear = this.props.allcard.map(function(allcard, index) {
            if(allcard.id != cardkey){
                return( null );
            }else{
                return ( allcard.birth_year );
            }
        }).join('');

        let cardListhomeworld = this.props.allcard.map(function(allcard, index) {
            if(allcard.id != cardkey){
                return( null );
            }else{
                return ( allcard.homeworld );
            }
        }).join('');

        return (
            <div>
                <form>

                    <div className='search-bar'>
                        <div>
                            <input type="text" name="name" onChange={this.updateCardState} placeholder='Input Card Name' value={ cardListname } />
                        </div>
                        <div>
                            <input type="text" name="birth_year" onChange={this.updateCardState} placeholder='Input Birthday' value={ cardListbirthyear } />
                        </div>
                        <div>
                            <PlanetSelectButton name="homeworld" onChange={this.updateCardState} planets={ cardListhomeworld }/>
                        </div>
                    </div>

                    <div className='search-bar'>
                        <input
                            type="submit"
                            disabled={this.state.saving}
                            value={this.state.saving ? 'Saving...' : 'Save'}
                            className="btn btn-primary"
                            onClick={this.saveCard}/>
                    </div>
                </form>
            </div>
        );
    }
    return (
        <img className='edit_btn_size' src={ EditSrc } onClick={ this.toggleEdit } alt='profile'/>
    );
  }
}

const mapStateToProps = (state) => ({
    allcard: state.allcard,
});

const mapDispatchToProps = (dispatch) => ({
    loadAllCardData: () => dispatch(getAllCard()),
    updateAllCardData: (param, id) => dispatch(updateCard(param, id))
})

export default connect(mapStateToProps, mapDispatchToProps) (CardEdit);
