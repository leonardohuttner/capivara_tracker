const setStorage = (pacote)=>{
    console.log('Salvou')
    if(!localStorage.getItem("codigos")){
        let codigos = []
        codigos.push(pacote)
        localStorage.setItem('codigos',JSON.stringify(codigos))
    }else {
        let codigos = JSON.parse(localStorage.getItem("codigos"))
        if(codigos.indexOf(pacote) == -1){
            console.log('diferente',pacote)
            codigos.unshift(pacote)
            localStorage.setItem('codigos',JSON.stringify(codigos))
        }
    }
}

const getStorage = ()=>{
    const codigos = JSON.parse(localStorage.getItem("codigos"))
    return codigos
}
export { setStorage , getStorage}