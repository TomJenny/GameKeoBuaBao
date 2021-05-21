import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import '../assets/styles/components/BTGameKeoBuaBao.css'

import Player from './Player';
import AI from './AI';
export default class BTGameKeoBuaBao extends Component {
    render() {
        return (
            <div className="bgGame">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-3">
                            <Player />
                        </div>
                        <div className="col-6">
                            <KetQuaTroChoi />
                        </div>
                        <div className="col-3">
                            <AI />
                        </div>
                    </div>
                </div >
            </div >


        )
    }
}
