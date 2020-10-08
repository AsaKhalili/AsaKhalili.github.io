

function renderTitleNode(title){
  var _title = createElement('p', {class: 'title'}, title);

  return _title;
}

function renderNewTask(taskName){
  var task = createElement('li', {}, taskName);

  return task;
}

function createTasksList(taskName){
  var listOfTasks = createElement('ul', {id: 'tasks'});
  listOfTasks.appendChild(renderNewTask(taskName));

  return listOfTasks;
}



function renderWritingBoard(title, taskName){
  var writing_board = createElement('div', {class: 'writings'});
  writing_board.appendChild(renderTitleNode(title));
  writing_board.appendChild(createTasksList(taskName));

  return writing_board;

}

function createNewTaskButton(){
  var button = createElement('button', {class:'btn-add-task show'}, 'Add New Task...');

  return button;
}

function createNewTaskTitleInput(){
  var input = createElement('input', {class: 'new-task hide', type: 'text', placeholder:'New Task'});

  return input;
}

function createNewCardButton(){
  var button = createElement('button', {class:'btn-add-card show'}, 'Add New Card...');

  return button;
}

function createInputCardTitle(){
  var cardTitleInput = createElement('input', {class: 'card-title hide', type: 'text', placeholder:'Card Title'});

  return cardTitleInput;
}

function renderAddCardNode(){
  var button = createNewCardButton();
  var input = createInputCardTitle();
  var add_card = createElement('div', {class:'add-card'});

  add_card.appendChild(button);
  add_card.appendChild(input);

  button.addEventListener('click', function(){
    button.classlist.remove('show');
    button.classlist.add('hide');

    input.classlist.remove('hide');
    input.classlist.add('show');
    input.focus();
  });

  input.addEventListener('keyup', function(e){
    if (e.keyCode === 13){
      var card = renderTaskCard(input.value);
      var position = document.querySelector('.container');
      position.before(card);

      input.classlist.remove('show');
      input.classlist.add('hide');

      button.classlist.remove('hide');
      button.classlist.add('show');

      input.value = '';
    }
  });

  add_card.appendChild(button);
  add_card.appendChild(input);

  return add_card;
}


function renderTaskCard(title){
  var taskCard = createElement('div', {class: 'task-card'});

  var title = createNewTaskTitleInput(title);
  var writings = renderWritingBoard(title);
  var taskBtn = createNewTaskButton();
  taskCard.appendChild(createNewTaskTitleInput());
  
  return taskCard;
}


