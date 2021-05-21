import React, { Component } from 'react'
import { connect } from 'react-redux'
// import
class KetQuaTroChoi extends Component {
    render() {
        let { SoBanThang, SoBanChoi } = this.props;
        return (
            <div>
                <p className="resultText">I'm iron man, i love you 3000 !!! </p>
                <p className="resultText1">Số bàn thắng:
                <span className="resultText">{SoBanThang}</span>
                </p>
                <p className="resultText1">Số bàn chơi:
                <span className="resultText">{SoBanChoi}</span>
                </p>
                <button className="btn btn-success"
                    onClick={() => this.props.dispatch({
                        type: 'PLAY_GAME'
                    })}>Play Game</button>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        SoBanThang: rootReducer.BTGameKeoBuaBaoReducer.SoBanThang,
        SoBanChoi: rootReducer.BTGameKeoBuaBaoReducer.SoBanChoi
    }
}
export default connect(mapStateToProps)(KetQuaTroChoi);