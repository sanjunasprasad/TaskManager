import React, { useState, useEffect } from 'react';



const EditModal = ({ isOpen, onClose, onEditTodo, currentTodo }) => {

    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
  
    useEffect(() => {
        if (currentTodo) {
          setDescription(currentTodo.description);
          setStatus(currentTodo.status);
        }
      }, [currentTodo]);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTodo = { ...currentTodo, description, status };
        onEditTodo(updatedTodo);
        onClose();
      };
    
      if (!isOpen) return null;



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Edit Todo</h2>
        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label className="block text-gray-700">Task Description:</label>
            <textarea
              className="w-full px-3 py-2 border rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Status:</label>
            <select
              className="w-full px-3 py-2 border rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
