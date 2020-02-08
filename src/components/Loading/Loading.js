import React from 'react'
import loading from './../../assets/loading.gif'
export default function Loading(){
    return (
        <div className="text-center">
            <img src={loading} style={{width:'250px'}} alt="loading" />
        </div>
    )
}
