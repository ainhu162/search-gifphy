import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchInput from '../components/SearchInput/SearchInput'
import { actFetchImagesRequest, actFetchMoreImagesRequest } from '../actions';
import * as Config from './../constants/Config'
import SearchResult from '../components/SearchResult/SearchResult';
import ViewMore from '../components/ViewMore/ViewMore';
import Loading from '../components/Loading/Loading';
//
export class ConnectedSearchPage extends Component {
    constructor(props) {
        super(props)
        this.offset = 0;
        this.state = {
            query : ''
        }
    }
    handleOnChange = value => {
        let url = `search?api_key=${Config.KEY}&q=${value}&limit=8&offset=${this.offset}`
        this.props.fetchAllImagesReq(url)
        this.setState({query:value})
    }
    onHandleViewMore = () => {
        const {query} = this.state;
        let url = `search?api_key=${Config.KEY}&q=${query}&limit=8&offset=${this.offset+8}`
        this.offset += 8;
        this.props.fetchMoreImagesReq(url)
    }
    render() {
        const {images} = this.props;
        return (
            <div className="col-12">
                <SearchInput onValueChange={this.handleOnChange} />
                <SearchResult images={images.images} />
                { images.loading && <Loading/>}
                {images.images.length > 0 && images.totalCount > images.images.length && <ViewMore onViewMore={this.onHandleViewMore}/>}
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
      images: state.images
    }
  }
  

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchAllImagesReq: url => {
            dispatch(actFetchImagesRequest(url))
        },
        fetchMoreImagesReq: url => {
            dispatch(actFetchMoreImagesRequest(url))
        }
    }
}
const SearchPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedSearchPage)
export default SearchPage
// import React from "react";
// import { connect } from "react-redux";

// const mapStateToProps = state => {
//   return { images: state.images };
// };

// const ConnectedList = ({ images }) => {
//     console.log(images)
//     return (<ul>das</ul>)
// }

// const SearchPage = connect(mapStateToProps)(ConnectedList);

// export default SearchPage;