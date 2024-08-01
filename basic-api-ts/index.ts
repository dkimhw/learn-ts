
import axios from 'axios'


const url = 'https://jsonplaceholder.typicode.com/todos/1';

let data: any;
const getData = async (url: any) => {
  let res = await axios.get(url);
  console.log(res);
  return res.data;
}

// axios.get(url).then(res => {
//   console.log(res.data);
// });

const res: any = getData(url);

// this will print undefined because the properties don't exist
res.then((res: any) => {
  const ID = res.ID;
  const title = res.Title;
  const finished = res.finished;

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);
});

// TS can help preven these types of errors
// interfaces define the structure of an object
interface Todo {
  id: number,
  title: string,
  completed: boolean,
}

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
}

axios.get(url).then(res => {
  const todo = res.data as Todo;
  const id: number = todo.id;
  const title: string = todo.title;
  const completed: boolean = todo.completed;

  // prevents errors like this:
  // logTodo(id, completed, title);
  logTodo(id, title, completed);
});
