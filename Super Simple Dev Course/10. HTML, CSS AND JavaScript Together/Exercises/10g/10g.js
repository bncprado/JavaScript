function gaming(query){
  
  const buttonElement = document.querySelector(`${query}`)

  if (buttonElement.classList.contains('is-toggled'))
    {
       buttonElement.classList.remove('is-toggled')
     } else {
      buttonElement.classList.add('is-toggled')

     }
}