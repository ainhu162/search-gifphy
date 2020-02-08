import React from 'react'
import ResultItem from '../ResultItem/ResultItem';

const showImages = images => {
    let res = '';
    if(images.length) {
        res = images.map(i => <ResultItem key={i.id} id={i.id} url={i.url} />)
    }
    return res
}
export default function SearchResult({images}) {
    return (
        <div className="row">
            {showImages(images)}
        </div>
    )
}
