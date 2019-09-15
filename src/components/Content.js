import React from 'react'

const Content = ({msg}) => {
    return (
        <div className="cont">
            <div>
                <header>
                    <h1>SMARTACO</h1>
                    <img className="smart" src={require('../smartaco.gif')}/>
                </header>
                <div className="request">
                    <input placeholder="Chat with smarta..."/>
                    <div className="smarta">{msg}</div>
                </div>
                </div>
                <img className="img" src={require('../g.gif')} alt="" />
        </div>
    )
}
export default Content