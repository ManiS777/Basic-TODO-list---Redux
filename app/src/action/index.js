let nextTodoId = 0
console.log("its in action");
export const addTodo = (task) => (
    {
       type: 'ADD_TODO',  
       payload: task,
    });
export const removeTodo = (index) => (
    {
    type: 'REMOVE_TODO',
    payload: index,  
    });