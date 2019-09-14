import React from 'react'

const Content = ({onChat, msg}) => {
    return (
        <div className="cont">
            <h1>SMARTA</h1>
            <div className="request">
                <input onInput={onChat} placeholder="Chat with smarta..."/>
            </div>
            <div className="smarta">{msg}</div>
        </div>
    )
}
export default Content