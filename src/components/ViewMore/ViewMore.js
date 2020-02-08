import React from 'react'

export default function ViewMore({onViewMore}) {
    return (
        <div className="text-center">
            <button type="button" onClick={onViewMore} className="btn btn-outline-primary">View More</button>
        </div>
    )
}
