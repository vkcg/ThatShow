import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectShow } from '../actions';
import ShowDetail from './show-detail';

class ShowList extends Component {
  createListItems() {
    return this.props.shows.map((show) => {
      return (
        <div className="col-sm-4 text-center">

          <a key={show.id} align='center' onClick={() => this.props.selectShow(show)} data-toggle="modal" data-target="#exampleModalCenter">
          <img src={require('../images/'+show.thumbnail)} alt="Thumbnail" height="300" width="300" style={{cursor:'pointer'}}/>
          </a>


          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">{show.title}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <ShowDetail />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className='row'>
        {this.createListItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectShow: selectShow }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(ShowList);