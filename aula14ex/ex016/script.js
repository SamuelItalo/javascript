function contar() {
    var ini = document.getElementById('txtini')
    var fin  = document.getElementById('txtfim')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    var i = Number(ini.value)
    var f = Number(fin.value)
    var p = Number(pas.value)
    if(p <= 0){
        alert('Passo INVALIDO! Considerando passo 1.')
        p = 1
    }
    if(ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossivel contar'
        //alert('[ERRO] Faltam Dados!')

    }else if(i < f){//CONTAGEM CRESCENTE
        res.innerHTML = 'Contando: <br>'
        for(let c = i; c < f; c += p){
            res.innerHTML += `${c}\u{1F6A3}  `
        }
        res.innerHTML += `..FIM \u{1F3C6}`
    }else if(i > f){//CONTAGEM DECRESCENTE
        res.innerHTML = 'Contando: '
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c}\u{1F3C3}   `
        }
        res.innerHTML += `..FIM \u{1F3C6}`
    }
    
}