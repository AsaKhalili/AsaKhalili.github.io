// Make Card 
// title 
function createTitleNode(title){
  var titleElement = createElement('p', {class: 'title'}, title);

  return titleElement;
}

// lists of tasks 
function createListHolderForTasks(){
  var unorderedListOfTasks = createElement('ul', {class: 'tasks-list'});

  return unorderedListOfTasks;
}

function createListItems(text){
  var newTask = createElement('li', {}, text);

  return newTask;
}

// Make Cards itself 
function createCardBoxNode(title){
  var containerBox = createElement('div', {class:'task-card'});

  var titleelement = createTitleNode(title);
  var NewListOfItems = createListHolderForTasks();
  var writingArea = createElement('div', {class: 'writings'});

  
  var newTaskBtn = createElement('button', {class:'btn-add-task show'},'Add New Task...');
  var newTaskInput = createElement('input', {class:'new-task hide', type:'text', placeholder:'New Task'});
  // var listArea = document.querySelector('.tasks-list');

  newTaskBtn.addEventListener('click', function(){
    newTaskBtn.classList.remove('show');
    newTaskBtn.classList.add('hide');
    
    newTaskInput.classList.remove('hide');
    newTaskInput.classList.add('show');
    newTaskInput.focus();
  });
  
  newTaskInput.addEventListener('keyup', function(e){
    if (e.key === 'Enter'){
      // If Enter is pressed
      var newTask = createListItems(newTaskInput.value);
      NewListOfItems.appendChild(newTask);
      
      newTaskInput.classList.remove('show');
      newTaskInput.classList.add('hide');
      newTaskInput.value = '';

      newTaskBtn.classList.remove('hide');
      newTaskBtn.classList.add('show');   
    }
  });
  
  writingArea.appendChild(titleelement);
  writingArea.appendChild(NewListOfItems);

  containerBox.appendChild(writingArea);
  containerBox.appendChild(newTaskBtn);
  containerBox.appendChild(newTaskInput);

  return containerBox;

}


// add new card button CTA
function createAddNewCardBtnCTANode(){
  var addCardContainer = createElement('div', {class: 'add-card'});
  var addButtonCTA = createElement('button', {class:'btn-add-card show'}, 'Add New Card...');
  var InputCTAElement = createElement('input', {class:'card-title hide', type:'text', placeholder:'Card Title'});


  addButtonCTA.addEventListener('click', function(){
    addButtonCTA.classList.remove('show');
    addButtonCTA.classList.add('hide');

    InputCTAElement.classList.remove('hide');
    InputCTAElement.classList.add('show');
    InputCTAElement.focus();
  });


  InputCTAElement.addEventListener('keyup', function(event){
    if (event.key === 'Enter'){
      //If enter is pressed 
      var newCard = createCardBoxNode(InputCTAElement.value);
      var positionCard = document.querySelector('.add-card');
      positionCard.before(newCard);

      addButtonCTA.classList.remove('hide');
      addButtonCTA.classList.add('show');
  
      InputCTAElement.classList.remove('show');
      InputCTAElement.classList.add('hide');
      InputCTAElement.value = '';
    }
  });

  addCardContainer.appendChild(addButtonCTA);
  addCardContainer.appendChild(InputCTAElement);

  return addCardContainer;

}




