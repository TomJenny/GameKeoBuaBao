const initialState = {
    ListKeoBuaBao: [
        { id: 1, hinhAnh: './img/keo.png', name: 'Keo' },
        { id: 2, hinhAnh: './img/bua.png', name: 'Bua' },
        { id: 3, hinhAnh: './img/bao.png', name: 'Bao' }
    ],
    ChooseKeoBuaBao: { id: 1, hinhAnh: './img/keo.png', name: 'Keo' },
    RamdomKeoBuaBao: { id: 1, hinhAnh: './img/keo.png', name: 'Keo' },
    SoBanThang: 0,
    SoBanChoi: 0,

}

export const BTGameKeoBuaBaoReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CHON_KEOBUABAO': {
            state.ChooseKeoBuaBao = state.ListKeoBuaBao.find((item, index) => item.id === action.id);
            return { ...state };
        }
        case 'PLAY_GAME': {
            state.SoBanChoi += 1;

            let SoNN = Math.floor(Math.random() * 3 + 1);

            state.RamdomKeoBuaBao = state.ListKeoBuaBao[SoNN - 1];
            if (state.ChooseKeoBuaBao.id === 1 && state.RamdomKeoBuaBao.id === 3) {
                state.SoBanThang += 1;
            } else if (state.ChooseKeoBuaBao.id === 2 && state.RamdomKeoBuaBao.id === 1) {
                state.SoBanThang += 1;
            } else if (state.ChooseKeoBuaBao.id === 3 && state.RamdomKeoBuaBao.id === 2) {
                state.SoBanThang += 1;
            }
            return { ...state };
        }
        default: {
            return { ...state };
        }

    }
}