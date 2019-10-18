const somaValores = () => {
  const n1 = document.getElementById('numberOne').value
  const n2 = document.getElementById('numberTwo').value
  const divResultado = document.getElementById('resultado')
  const result = parseInt(n1) + parseInt(n2)

  divResultado.innerHTML = (`O resultado da soma é: ${result}`)
}