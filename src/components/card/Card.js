import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCard, getAllCard } from '../../actions/cardActions';
import PlanetList from './PlanetList';
import CardEdit from './CardEdit';
import ReactPaginate from 'react-paginate';
import './Card.css';

class Card extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      card: null,
      pageCount: 0,
      pageLimit: 10,
      currentPage: 1,
      searchtext: "",
      isSearchPageCount: false
    }
  }

  componentDidMount(){
    this.props.loadCardData(this.state.pageLimit, this.state.currentPage, this.state.searchtext);
    this.props.loadAllCardData();
  }

  
  componentWillReceiveProps(nextProps) {
    if(nextProps.card != null ){
      console.log(nextProps.card.length);
      if(this.state.isSearchPageCount === true){
        console.log("RENZ TRUE");
        this.setState({
          card: nextProps.card,
          pageCount: Math.ceil(nextProps.card.length / this.state.pageLimit)
        })
      }else{
        console.log("RENZ FALSE");
        this.setState({
          card: nextProps.card,
          pageCount: 0
        })
      }
    }

    if(nextProps.allcard != null ){
      this.setState({
        pageCount: Math.ceil(nextProps.allcard.length / this.state.pageLimit)
      })
    }
  }

  handlePageClick = data => {
    let pageSelect = data.selected + 1;

    this.setState({ currentPage: pageSelect }, () => {
      this.props.loadCardData(this.state.pageLimit,this.state.currentPage, this.state.searchtext);
    });
  };

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate' + e.target.value);
      this.setState({ searchtext: e.target.value, isSearchPageCount: true, currentPage: 1 }, ()=>{
        this.props.loadCardData(this.state.pageLimit, this.state.currentPage, this.state.searchtext);
      });
    }
  };

  render() {
    let cardList = this.props.card.map(function(card, index) {
      return (
      <div key={index}>
        <CardEdit cardId={ card.id } />
        <div className='card-content'>
          <div className='card-name'>{ card.name } </div>
          <img src={ "http://localhost:3008/" + card.image } alt='profile'/>
          <p>
              <span>Birthday:</span>
              <span>{ card.birth_year }</span>
          </p>
          <p>
              {/* Note that in order to get the homeworld's name, you have to get the planet name from a different endpoint than the people */}
              <span>Homeworld:</span>
              <PlanetList planets={ card.homeworld }/>
          </p>
        </div> 
      </div>
      );
    });

    return (
      <div>
        <div className='search-bar'>
          <input placeholder='Search Your Destiny' onKeyPress={this._handleKeyPress} />
        </div>
        
        <div className='card'>
          { cardList }

          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
    card: state.card,
    allcard: state.allcard,
});

const mapDispatchToProps = (dispatch) => ({
    loadCardData: (limit, page, search) => dispatch(loadCard(limit,page,search)),
    loadAllCardData: () => dispatch(getAllCard())
})


export default connect(mapStateToProps, mapDispatchToProps)(Card);
