const initialState = {
    ListKeoBuaBao: [
        { hinhAnh: './img/keo.png', name: 'Keo', datCuoc: true },
        { hinhAnh: './img/bua.png', name: 'Bua', datCuoc: false },
        { hinhAnh: './img/bao.png', name: 'Bao', datCuoc: false }
    ],
    RamdomKeoBuaBao: { id: 1, hinhAnh: './img/keo.png', name: 'Keo' },
    SoBanThang: 0,
    SoBanChoi: 0,
    KetQua: "I'm iron man, i love you 3000 !!!"

}

export const BTGameKeoBuaBaoReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CHON_KEOBUABAO': {
            let mangCuocUpdate = [...state.ListKeoBuaBao];
            mangCuocUpdate = mangCuocUpdate.map(item => {
                if (item.name === action.item.name) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })

            state.ListKeoBuaBao = mangCuocUpdate;

            return { ...state };
        }
        case 'RAN_DOM': {

            let SoNN = Math.floor(Math.random() * 3 + 1);

            state.RamdomKeoBuaBao = state.ListKeoBuaBao[SoNN - 1];

            return { ...state };
        }
        case 'END_GAME': {
            let player = state.ListKeoBuaBao.find(item => item.datCuoc === true);
            let AI = state.RamdomKeoBuaBao;
            switch (player.name) {
                case 'Keo':
                    if (AI.name === 'Keo') {
                        state.KetQua = 'hòa Nhau !!!'
                    } else if (AI.name === 'Bua') {
                        state.KetQua = 'thua sml !!!'
                    } else {
                        state.SoBanThang += 1;
                        state.KetQua = "I'm iron man, i love you 3000 !!!"
                    }
                    break;
                case 'Bua':
                    if (AI.name === 'Bua') {
                        state.KetQua = 'hòa Nhau !!!'
                    } else if (AI.name === 'Bao') {
                        state.KetQua = 'thua sml !!!'
                    } else {
                        state.SoBanThang += 1;
                        state.KetQua = "I'm iron man, i love you 3000 !!!"
                    }
                    break;
                case 'Bao':
                    if (AI.name === 'Bao') {
                        state.KetQua = 'hòa Nhau !!!'
                    } else if (AI.name === 'Keo') {
                        state.KetQua = 'thua sml !!!'
                    } else {
                        state.SoBanThang += 1;
                        state.KetQua = "I'm iron man, i love you 3000 !!!"
                    }
                    break;
                default: state.KetQua = "I'm iron man, i love you 3000 !!!";
                    state.SoBanThang += 1;
            }
            state.SoBanChoi += 1;
        }
            return { ...state };
        default: {
            return { ...state };
        }

    }
}