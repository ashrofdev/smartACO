import React from 'react'

const Content = ({msg}) => {
    return (
        <div className="cont">
            <h1>SMARTACO</h1>
            <div className="request">
                <input placeholder="Chat with smarta..."/>
            </div>
            <div className="smarta">{msg}</div>
            <img src={require('../g.gif')} alt="" />
        </div>
    )
}
export default Content