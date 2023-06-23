   
  let minhaLista = document.querySelectorAll('.rating li'); 

  minhaLista.forEach(function(key){
      key.addEventListener('click', function(){
          removeStyles();
          this.setAttribute('class', 'selecionado');
      });
  })
  
  function removeStyles(){
      for(let i = 0;i < minhaLista.length;i++){
          document.querySelectorAll('.rating li')[i].removeAttribute('class');
      }  
  }
  
  function pegarValor(elemento) {

    let valor = elemento.textContent;
    localStorage.setItem('valueText', valor);
        
  }

  let paragrafo = document.querySelector('.info-rating-thx');
  const valorImpresso = paragrafo.textContent = localStorage.getItem('valueText');

  paragrafo.innerHTML = "You selected " +valorImpresso+ " out of 5."

  

  

   

    
  

 
   
    
    

  
  
  
  
  
  
  
    

  

