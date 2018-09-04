document.addEventListener("DOMContentLoaded", function(){


//variables
  let row = document.createElement('tr')
  let table = document.getElementById('table')
  let cell = document.createElement('td')
  let paletteRow = document.getElementById('paletteRow')
  let palette = document.getElementById('palette')
  let color;
  let brushIndicator = document.getElementById('brushIndicator')
  let circle = document.getElementsByClassName('circle')
  let Heading = document.getElementById('mainHeading')


//event listeners
palette.addEventListener('click', grabColor)
table.addEventListener('click', changeColor)



//loop to create rows in main table
for(let i = 0; i < 10; i++){
  let row = document.createElement('tr')
  table.appendChild(row)
  //set the class for the rows
  row.setAttribute('class', 'row')
  //loop to create cells in main table
  for(let j = 0; j < 10; j++){
    let cell = document.createElement('td')
    row.appendChild(cell)
    //set class for the cells
    cell.setAttribute('class', 'cell')
  }
}
//Heading for Main table
let mainHeading = document.createElement('h1')
Heading.appendChild(mainHeading)
mainHeading.classList.add('class', 'main')
let mainHeadingText = document.createTextNode('Pixel Art!')
mainHeading.appendChild(mainHeadingText)



//Need to put 1 row inside palette
for(let i = 0; i < 6; i ++){
  let pRow = document.createElement('tr')
  palette.appendChild(pRow)
  pRow.setAttribute('Id', 'paletteRow')
  //loop for cells in palette row
  for(let j = 0; j < 6; j++){
    let pCell = document.createElement('td')
    pRow.appendChild(pCell)
  //set class for cells
  pCell.setAttribute('class', 'pCell')

  }
}

//create heading for brush indicator
let brushHeading = document.createElement('h1')
brushIndicator.appendChild(brushHeading)
brushHeading.classList.add('class', 'paletteH')
//create text for h1
let h1Text = document.createTextNode('Current Brush Color')
brushHeading.appendChild(h1Text)
//create a circle for brush color to appear in
let brush = document.createElement('SPAN')
brushIndicator.appendChild(brush)
//set class for the brush span
brush.setAttribute('class', 'circle')



//set 2nd class with colors
let arrOfColors = ['pink', 'pink1', 'pink2', 'pink3', 'pink4', 'pink5','purple','purple1', 'purple2', 'purple3', 'purple4', 'purple5', 'yellow', 'yellow1', 'yellow2', 'yellow3', 'yellow4', 'yellow5', 'orange', 'orange1', 'orange2', 'orange3', 'orange4', 'orange5','green', 'green1', 'green2', 'green3', 'green4', 'green5', 'blue', 'blue1', 'blue2', 'blue3', 'blue4', 'blue5']
for(let i = 0; i < arrOfColors.length; i++){
document.getElementsByClassName("pCell")[i].classList.add(arrOfColors[i])
}


//function to grab color from palette
function grabColor(event){
  console.log('getting color')
  if(event.target.classList.contains('pCell')){
    color = event.target.classList[1]
     // brush.classList.add(color)
 }
  if(!brush.classList[1]){
    brush.classList.add(color)
  }
  else if(brush.classList[1] !== color){
    brush.classList.replace(brush.classList[1], color)
  }
}



//function to change color on brush indicator
//take color from grabColor function
//display it inside .circle
//change color when grabColor changes


//function to change color on table
function changeColor(event){
  if(event.target.classList.contains('cell')){

    if(event.target.classList[1] === color){
      event.target.classList.remove(color)
    }
    //if there is already a color, change to off
    else if(!event.target.classList[1]){
      event.target.classList.add(color)
    }
    else if(event.target.classList[1] !== color){
event.target.classList.replace(event.target.classList[1], color)

      }
    }
  }
})
