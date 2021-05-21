import React, { Component } from 'react'
import { connect } from 'react-redux'
// import
class KetQuaTroChoi extends Component {
    render() {
        let { SoBanThang, SoBanChoi, KetQua } = this.props;
        return (
            <div>
                <div className="resultText" style={{ height: '130px' }}>{KetQua} </div>
                <p className="resultText1">Số bàn thắng:
                <span className="resultText">{SoBanThang}</span>
                </p>
                <p className="resultText1">Số bàn chơi:
                <span className="resultText">{SoBanChoi}</span>
                </p>
                <button className="btn btn-success"
                    onClick={() => {
                        let count = 0;
                        let randomAIItem = setInterval(() => {
                            this.props.dispatch({
                                type: 'RAN_DOM'
                            })
                            count++;
                            if (count > 30) {
                                clearInterval(randomAIItem)
                                this.props.dispatch({
                                    type: 'END_GAME'
                                })
                            }
                        }, 100)
                    }
                    }>Play Game</button>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        SoBanThang: rootReducer.BTGameKeoBuaBaoReducer.SoBanThang,
        SoBanChoi: rootReducer.BTGameKeoBuaBaoReducer.SoBanChoi,
        KetQua: rootReducer.BTGameKeoBuaBaoReducer.KetQua
    }
}
export default connect(mapStateToProps)(KetQuaTroChoi);