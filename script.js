const container = document.querySelector('#container');
const button = document.querySelector('button');

function divsMultiplicator (numberOfDivs) {
    for (let i=0; i<(numberOfDivs*numberOfDivs); i++) {
      const squareDiv = document.createElement('div');
      squareDiv.style.backgroundColor = 'lightblue';
      container.appendChild(squareDiv);
  }}

divsMultiplicator(16)


container.addEventListener("mouseover", (event) => {
  if (event.target !== container) {
    event.target.style.backgroundColor = "black";
    setTimeout(() => {
    event.target.style.backgroundColor = "";
    }, 500)}
});


button.addEventListener('click', (event) => {
  const userSquaresNumber = prompt("Enter the number of squares per side (max 100):");
  if (userSquaresNumber > 100 || isNaN(userSquaresNumber)) {
    alert ('Иди нахуй, долбаеб!');
    return}
  else if (userSquaresNumber === 0){
    alert ('Ты наебал меня, сукин сын!');
    container.innerHTML ="";
    container.textContent = 'Обэма, ты доволен?';
    return}
  
  container.innerHTML ="";
  divsMultiplicator(userSquaresNumber);
  container.style.gridTemplateColumns = `repeat(${userSquaresNumber}, 1fr)`;
  })