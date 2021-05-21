import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import '../assets/styles/components/BTGameKeoBuaBao.css'
import { connect } from 'react-redux'
class BTGameKeoBuaBao extends Component {
    render() {
        let { ListKeoBuaBao, ChooseKeoBuaBao, RamdomKeoBuaBao, dispatch } = this.props;
        return (
            <div className="bgGame">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-3 ">
                            <div className="playerChoice">
                                <img src={ChooseKeoBuaBao.hinhAnh} alt={ChooseKeoBuaBao.name} className="playerImg" />
                            </div>
                            <img src='./img/player.png' alt="player" className="player" />
                            <div className="row mx-auto">
                                {ListKeoBuaBao.map((item, index) => {
                                    return <button key={index} className="btn btn-warning bg-white mx-3"
                                        onClick={() => dispatch({
                                            type: 'CHON_KEOBUABAO',
                                            id: item.id
                                        })}>
                                        <img src={item.hinhAnh} alt={item.name} className="ChoiceImgButton" />
                                    </button>
                                })}
                            </div>
                        </div>
                        <div className="col-6">
                            <KetQuaTroChoi />
                        </div>
                        <div className="col-3">
                            <div className="playerChoice">
                                <img src={RamdomKeoBuaBao.hinhAnh} alt={RamdomKeoBuaBao.name} className="playerImg" />
                            </div>
                            <img src='./img/playerComputer.png' alt="player" className="player" />
                        </div>
                    </div>
                </div>
            </div >


        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        ListKeoBuaBao: rootReducer.BTGameKeoBuaBaoReducer.ListKeoBuaBao,
        ChooseKeoBuaBao: rootReducer.BTGameKeoBuaBaoReducer.ChooseKeoBuaBao,
        RamdomKeoBuaBao: rootReducer.BTGameKeoBuaBaoReducer.RamdomKeoBuaBao,
    }
}
export default connect(mapStateToProps)(BTGameKeoBuaBao)