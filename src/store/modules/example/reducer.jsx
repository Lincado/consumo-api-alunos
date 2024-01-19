import * as types from "../types"
const initialState = {
  buttonClicked: false,
}
// eslint-disable-next-line react-refresh/only-export-components
export default function(state = initialState, action) { // configuração mais simples, só faz algo quando começar a ouvir ações
  switch (action.type) {
    case types.BUTTON_CLICKED_SUCCESS: {
      console.log("Sucesso =)");
      const newState = { ...state }
      newState.buttonClicked = !newState.buttonClicked;
      return newState // sempre retorna um state, novo ou atual
    }
    case types.BUTTON_CLICKED_REQUEST: { //requisição que saga irá escutar
      console.log("Estou fazendo uma requisição");
      return state // sempre retorna um state, novo ou atual
    }
    case types.BUTTON_CLICKED_FAILURE: {
      console.log("Deu erro =(");
      return state // sempre retorna um state, novo ou atual
    }
    default: {
      return state
    }
  }
}
