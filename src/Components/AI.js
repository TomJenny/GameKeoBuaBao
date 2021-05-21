import React, { Component } from 'react'
import { connect } from 'react-redux'

class AI extends Component {
    render() {
        let { RamdomKeoBuaBao } = this.props;
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: 40px;}
            50% {top: 80px;}
            100% {top: 50%;}

        }`
        return (
            <div>
                <div className="playerChoice">
                    <style>
                        {keyframe}
                    </style>
                    <img src={RamdomKeoBuaBao.hinhAnh} alt={RamdomKeoBuaBao.name}
                        style={{ animation: `randomItem${Date.now()} 0.5s` }}
                        className={RamdomKeoBuaBao.name === 'Bua' ? 'playerImg' : 'playerImg2'} />
                </div>
                <img src='./img/playerComputer.png' alt="player" className="player" />
            </div >
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        RamdomKeoBuaBao: rootReducer.BTGameKeoBuaBaoReducer.RamdomKeoBuaBao
    }
}
export default connect(mapStateToProps)(AI)