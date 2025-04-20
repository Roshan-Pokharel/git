 // const todoArray=[{list:'',time:''}];
 let todoArray = JSON.parse(localStorage.getItem('data'))||[];

 todoDisplay();
  function addTodo()
 {
   const todo =  document.querySelector('.js-todo-value');
   const todoValue =todo.value;
   const todoDate = document.querySelector('.js-todo-date').value;
   //console.log(todoDate)
   if(todoValue==='' || todoDate==='')
     {
       alert('fill the table before adding');
     }
   else
   { 

     todoArray.push({
       list:todoValue,
       time:todoDate
     });
     localStorage.setItem('data',JSON.stringify(todoArray));
     console.log(todoArray); 
     todoDisplay();
     todo.value='';
     document.querySelector('.js-todo-date').value='';
   }
 }

 function todoDisplay()
 { 
   document.querySelector('.display').innerHTML = '';

  
 

     for(let i=0;i<todoArray.length;i++)

   { 
       // if(todoArray[i].list===''||todoArray[i].time===''){
       //     console.log('this is for learning purpose only, you can use this code!!!');
       //   }
     // const value = todoArray[i];
       // else{
         document.querySelector('.display').innerHTML+=`<p>${todoArray[i].list} on ${todoArray[i].time} <button onclick="deleteTodo(${i}) ">delete</button></p>`;

       //}
       
    }
   
 }
 
 function deleteTodo(i)
 {
   todoArray.splice(i,1);
   localStorage.removeItem('data');
   todoDisplay();
   console.log('You have just deleted a todo list');
 }
