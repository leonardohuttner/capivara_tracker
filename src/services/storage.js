const setStorage = (pacote)=>{
    if(!localStorage.getItem("codigos")){
        let codigos = []
        codigos.push(pacote)
        localStorage.setItem('codigos',JSON.stringify(codigos))
    }else {
        let codigos = JSON.parse(localStorage.getItem("codigos"))
        if(codigos.indexOf(pacote) == -1){
            codigos.unshift(pacote)
            localStorage.setItem('codigos',JSON.stringify(codigos))
        }
    }
}

const getStorage = ()=>{
    const codigos = JSON.parse(localStorage.getItem("codigos"))
    return codigos
}

const removeFromStorage = (codigo) => {
    let codigos = JSON.parse(localStorage.getItem("codigos"))
    codigos.splice(codigos.indexOf(codigo))
    localStorage.setItem('codigos',JSON.stringify(codigos))
}

const setHistorico = (pacote)=>{
    if(!localStorage.getItem("historico")){
        let historico = []
        historico.push(pacote)
        localStorage.setItem('historico',JSON.stringify(historico))
    }else {
        let historico = JSON.parse(localStorage.getItem("historico"))
        if(historico.indexOf(pacote) == -1){
            historico.unshift(pacote)
            localStorage.setItem('historico',JSON.stringify(historico))
        }
    }
}

const getHistorico = ()=>{
    const codigos = JSON.parse(localStorage.getItem("historico"))
    return codigos
}

const limpaHistorico = () => {
    if(localStorage.getItem('historico')){
        localStorage.removeItem('historico')
        return true
    }
    return false
}

const limpaPacotes = () => {
    if(localStorage.getItem('codigos')){
        localStorage.removeItem('codigos')
        return true
    }
    return false
}

export { setStorage , getStorage, removeFromStorage, setHistorico, getHistorico, limpaHistorico, limpaPacotes }