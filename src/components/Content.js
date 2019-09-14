import React from 'react'

const Content = ({msg}) => {
    return (
        <div className="cont">
            <h1>SMARTACO</h1>
            <div className="request">
                <input placeholder="Chat with smarta..."/>
            </div>
            <div className="smarta">{msg}</div>
        </div>
    )
}
export default Content