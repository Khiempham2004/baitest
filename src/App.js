import './App.css';
import TodoList from './TodoList/TodoList'
import Form from './Form/Form';
import TodoListHeader from './TodoListHeader/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Datalist from './Datalist/Datalist';
import CompleteData from './CompleteData/Index';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/all' element={<>
          <TodoList />
          <Form />
          <TodoListHeader />
        </>} />
        <Route exact path='/active' element={<>
          <TodoList />
          <Form />
          <Datalist />
        </>} />
        <Route exact path='/complete' element={<>
          <TodoList />
          <CompleteData />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;