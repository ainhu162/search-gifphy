import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchResult from './../components/SearchResult/SearchResult'
export class ConnectedFavoritePage extends Component {
    render() {
        const {favorites} = this.props
        return (
            <div>
                <SearchResult images={favorites} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    favorites : state.favorites
})

const FavoritePage = connect(mapStateToProps, null)(ConnectedFavoritePage)
export default FavoritePage
