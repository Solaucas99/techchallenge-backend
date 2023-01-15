function fnTeste(arr) {
  //código aqui
  return arr.filter(value => typeof value === 'number');
}

module.exports = { fnTeste }