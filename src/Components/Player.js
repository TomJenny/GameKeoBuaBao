import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        let { ListKeoBuaBao, dispatch } = this.props;
        let chooseKeoBuaBao = ListKeoBuaBao.find(item => item.datCuoc === true);
        // 
        return (
            <div>
                <div className="playerChoice">
                    <img src={chooseKeoBuaBao.hinhAnh} alt={chooseKeoBuaBao.name} className={chooseKeoBuaBao.name === 'Bua' ? 'playerImg2' : 'playerImg'} />
                </div>
                <img src='./img/player.png' alt="player" className="player" />
                <div className="row mx-auto">
                    {ListKeoBuaBao.map((item, index) => {
                        return <button key={index} className="btn btn-warning bg-white mx-3"
                            onClick={() => dispatch({
                                type: 'CHON_KEOBUABAO',
                                item
                            })}>
                            <img src={item.hinhAnh} alt={item.name} className="ChoiceImgButton" />
                        </button>
                    })}
                </div>
            </div >
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        ListKeoBuaBao: rootReducer.BTGameKeoBuaBaoReducer.ListKeoBuaBao

    }
}
export default connect(mapStateToProps)(Player)