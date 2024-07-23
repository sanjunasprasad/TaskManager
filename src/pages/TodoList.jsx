import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Modal from '../components/Modal';
import EditModal from "../components/EditModal"
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { axiosUserInstance } from '../services/axios/axios';
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.min.css'

const TodoList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [status, setStatus] = useState('todo');
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  //FETCH ALL TODO FROM BACKEND
  useEffect(() => {
    const fetchTodos = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user._id;
      try {
        const response = await axiosUserInstance.get(`/getTodo/${userId}`);
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);



  // ADD A NEW TODO
  const handleAddTodo = async (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;
    e.preventDefault();
    const newTodo = {
      id: `todo-${todos.length + 1}`,
      description: taskDescription,
      status,
      userId: userId
    };
    try {
      const response = await axiosUserInstance.post('/addTodo', newTodo);
      // console.log("response",response.data)
      // console.log("Todos before adding:", todos);
      // console.log("Todos after adding:", [...todos, response.data]);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "New Task added successfully"
      });

      setTodos([...todos, response.data]);
      setIsModalOpen(false);
      setTaskName('');
      setTaskDescription('');
      setStatus('todo');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };


  //DELETE THE TODO
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    // console.log(todos)
  };



//HANDLE EDIT TODO
const handleEditTodo = async (updatedTodo) => {
  // console.log("updated todo",updatedTodo)
  try {
    await axiosUserInstance.put(`/updateTodo/${updatedTodo._id}`, updatedTodo);
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Task updated successfully"
    });
  } catch (error) {
    console.error('Failed to update task:', error);
    Swal.fire({
      title: "Error!",
      text: "There was an issue updating the task.",
      icon: "error",
    });
  }
};




  //HANDLE DRAG AND DROP
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const updatedTodos = Array.from(todos);
    const [movedTodo] = updatedTodos.splice(result.source.index, 1);
    movedTodo.status = result.destination.droppableId;
    updatedTodos.splice(result.destination.index, 0, movedTodo);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 p-4">
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mb-4 text-white bg-black rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
            onClick={() => setIsModalOpen(true)}
          >
            Add Todo
          </button>
        </div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="flex w-full max-w-4xl space-x-4">
              <Droppable droppableId="todo">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex flex-col w-1/3 p-4 bg-white rounded-lg shadow-lg"
                  >
                    <Card title="Todo" items={todos.filter(item => item.status === 'todo')} onDelete={handleDeleteTodo} onEdit={(todo) => { setCurrentTodo(todo); setIsEditModalOpen(true); }} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <Droppable droppableId="in-progress">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex flex-col w-1/3 p-4 bg-white rounded-lg shadow-lg"
                  >
                    <Card title="In Progress" items={todos.filter(item => item.status === 'in-progress')} onDelete={handleDeleteTodo} onEdit={(todo) => { setCurrentTodo(todo); setIsEditModalOpen(true); }}/>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <Droppable droppableId="done">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex flex-col w-1/3 p-4 bg-white rounded-lg shadow-lg"
                  >
                    <Card title="Done" items={todos.filter(item => item.status === 'done')} onDelete={handleDeleteTodo} onEdit={(todo) => { setCurrentTodo(todo); setIsEditModalOpen(true); }} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </DragDropContext>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTodo={handleAddTodo}
        taskName={taskName}
        setTaskName={setTaskName}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        status={status}
        setStatus={setStatus}
      />

      {currentTodo && (
        <EditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onEditTodo={handleEditTodo}
          currentTodo={currentTodo}
        />
      )}
    </div>
  );
};

export default TodoList;
