document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  const container = document.querySelector("#moves-container")  
  
  document.addEventListener("keydown", function(e){
    if (e.key === "Delete") {
      container.lastChild.remove();
    } else {
    let direction = e.key.slice(5).toLocaleLowerCase();
    let list = document.createElement("li");
    list.innerText = direction;
    container.append(list);
    };
  });


  const button = document.querySelector("#move-button")

  button.addEventListener("click", function(){
  const li = document.querySelector("li");
  let movement = li.innerText;
  move(movement);
  li.remove();
  });

})