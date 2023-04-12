{
  type Todo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<Todo>) {
    // todo.title = 'jaja'; 오류 발생
  }
}
