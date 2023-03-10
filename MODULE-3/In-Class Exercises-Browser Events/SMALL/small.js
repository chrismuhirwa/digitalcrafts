// Create a button that logs "Button Pressed" to the console when clicked.
function onButtonClick() {
    console.log("Button Pressed");
  }
const button = document.querySelector('#myButton')
// Create a button that logs "You Left Clicked" to the console when clicked.
    button.addEventListener('click', function(event){
        if(event.button === 0){
            console.log('You Left Clicked')
        }
    })

    // Add a scroll event 
    // window.addEventListener('resize', () => {
    //     console.log('You Change the size of the Window!')
    // })
    

    // with debounce
let timeout;
const delay = 1000; //ms to wait before running function
window.addEventListener('resize', () => {
  timeout = setTimeout(() => {
    console.log('You Change the size of the Window!')
  }, delay)
})