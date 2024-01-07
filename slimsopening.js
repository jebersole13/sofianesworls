const button1 = document.querySelector('button')

button1.addEventListener('click', (event)=>{
 button1.textContent = `Click count: ${event.detail}`;
  
})

