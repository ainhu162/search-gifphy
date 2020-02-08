
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actAddFavorite, actRemoveFavorite } from '../../actions'
import './ResultItem.css'
export class ConnectedResultItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFavorite : this.props.favorites.some(x => x.id === this.props.id)
        }
    }
    componentWillReceiveProps(nextProps) {
        const { favorites } = this.props
        if (nextProps.favorites !== favorites) {
            this.setState({
              isFavorite: nextProps.favorites.some(x => x.id === this.props.id)
            })
        }
    }
    handleFavorite = () => {
        const {isFavorite} = this.state;
        const {url,id} = this.props;
        isFavorite ? this.props.removeFavorite({id,url}) : this.props.addFavorite({id,url})
    }

    render() {
        const {url} = this.props
        const {isFavorite} = this.state;
        return (
            <div className="col-md-3 my-3">
                <div className="wrapImg" style={{cursor:'pointer'}} onClick={this.handleFavorite}>
                    <img src={url} className="w-100" style={{height:'200px'}} alt="text"/>
                    <div className={isFavorite?'icon love': 'icon'}>
                        <i className="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    favorites: state.favorites
})

const mapDispatchToProps = dispatch => {
    return {
        addFavorite: url => {
            dispatch(actAddFavorite(url))
        },
        removeFavorite: url => {
            dispatch(actRemoveFavorite(url))
        }
    }
}
const ResultItem = connect(mapStateToProps, mapDispatchToProps)(ConnectedResultItem)
export default ResultItem
