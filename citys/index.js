import {promises as fs} from 'fs';

// Ex01
async function readData(){
  try{
    const data = JSON.parse (await fs.readFile('./estados-cidades-atividade.json'));
    console.log('Leitura concluida');
    return data;
  } catch(err){
    console.log('Erro de leitura do arquivo');
  }
}
//readData()

//=================================================================================================================================================
// Ex02
async function doSort() {

  const eca = await readData()
/*percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento 
com parâmetros. Para cada chamada de retorno, o valor devolvido se torna o elemento do novo array. 
Depois que todos os elementos foram percorridos, map() retorna o novo array com todos os elementos “traduzidos”
ou seja map percorre todos os elementos e de acordo com a função usada, ele traz um novo array com os dados certos.*/
  const estados = eca.map ((state) => {
    return {
      nome: state.nome
    }
  })
  console.log(estados)
}
// doSort()

//=================================================================================================================================================
//Ex03
async function  inicial() {

  const arquivo = await readData()

  const estados = arquivo.map(state => {
    return state.nome
  })
//filter funciona como o MAP  porem como booleano então se o dado
// for false ele não aparecerá no novo array.
  const estadosA = estados.filter(city =>{
    return city.startsWith('A')
  })

  console.log(estadosA)
}
// inicial()

//=================================================================================================================================================
//Ex04
async function mletra() {
  const arquivo = await readData()

  const estados = arquivo.map(state => {
    return state.nome
  })
  const estadosA = estados.sort((a,b)=>{
    return a.length - b.length
  })
  console.log(estadosA)
}
//mletra()

//===================================================================================================================================================
//Ex05
async function allcitys() {
  const arquivo = await readData()

  const sp = arquivo.find(city => {
    return city.nome == 'São Paulo'
  })
  console.log(sp)
}
//allcitys()

//===================================================================================================================================================
//Ex06
async function allcitys6() {
  const arquivo = await readData()

  const mar = arquivo.find(city => {
    return city.nome == 'Maranhão'
  })
  const maior6 = mar.cidades.filter((city) => {
    return city.length >= 6
  })
  console.log(maior6)
}
//allcitys6()

//====================================================================================================================================================
//Ex07
async function numcitys() {
  const arquivo = await readData()

  const estados = arquivo.map(city =>{
    return {
      estados: city.nome,
      cidades: city.cidades.length
    }
  })
console.log(estados)

}
//numcitys()

//===============================================================================================================================
//Ex08
async function citys5() {
  const arquivo = await readData()

  const bah = arquivo.find(city => {
    return city.nome == 'Bahia'
  })
  const menor5 = bah.cidades.filter((city) => {
    return city.length <= 5
  })
  console.log(menor5)
}
citys5()