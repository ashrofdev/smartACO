import React from 'react'

const Content = ({msg}) => {
    return (
        <div className="cont">
            <div>
            <h1>SMARTACO</h1>
            <div className="request">
                <input placeholder="Chat with smarta..."/>
                <div className="smarta">{msg}</div>
            </div>
            </div>
            <img src={require('../g.gif')} alt="" />
        </div>
    )
}
export default Content