import React, { Component } from 'react'
import { connect } from 'react-redux'

class AI extends Component {
    render() {
        let { RamdomKeoBuaBao } = this.props;

        return (
            <div>
                <div className="playerChoice">
                    <img src={RamdomKeoBuaBao.hinhAnh} alt={RamdomKeoBuaBao.name} className={RamdomKeoBuaBao.id === 2 ? 'playerImg' : 'playerImg2'} />
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