import React from 'react'
import './index.css'

export default class StreamComponent extends React.Component {
    render() {
        return (
            <div className="section stream" id="zolotoOnline">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="header yellow centred">Следи за золотым яйцом <br />в реальном времени</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center indent-2">
                        <div className="col with-buble">
                            <iframe max-width="100%" max-height="100%" src="https://www.youtube.com/embed/X1W7UCWSvdM" 
                            frameBorder="0" title="All"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}