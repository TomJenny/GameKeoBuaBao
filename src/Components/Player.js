import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        let { ListKeoBuaBao, ChooseKeoBuaBao, dispatch } = this.props;
        return (
            <div>
                <div className="playerChoice">
                    <img src={ChooseKeoBuaBao.hinhAnh} alt={ChooseKeoBuaBao.name} className={ChooseKeoBuaBao.id === 2 ? 'playerImg2' : 'playerImg'} />
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
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        ListKeoBuaBao: rootReducer.BTGameKeoBuaBaoReducer.ListKeoBuaBao,
        ChooseKeoBuaBao: rootReducer.BTGameKeoBuaBaoReducer.ChooseKeoBuaBao
    }
}
export default connect(mapStateToProps)(Player)