import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify"
import * as actions from "./actions";
import * as types from "../types";

//takeLastest: se usuário clicar muitas vezes no button, ele vai pega só ultima vez
//all: coloca mais de uma action para escutar


const request = () => {
  new Promise ((resolve) => {
    setTimeout(() =>{
        resolve();
    }, 2000)
  })
}


function* exampleRequest() { // saga usa function geradores ex: function*
  try{
    yield call(request) //se tivesse parâmetros seriam passado depois da function separando por virgula call(request, parameter1, parameter2, etc)
    yield put(actions.buttonClickedSuccess());
  } catch(e) {
    toast.error("Erro na requisição");
    yield put(actions.buttonClickedFailure());
  }
}


export default all([
  // qual ação vai escutar e qual function vai executar, se tivesse mais de uma era fazer igual object, colocar virgula e add outra
  takeLatest(types.BUTTON_CLICKED_REQUEST, exampleRequest),
]);