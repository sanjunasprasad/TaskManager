import React from 'react';
import { axiosUserInstance } from '../services/axios/axios';
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.min.css'

const TodoItem = ({ id, description,status, createdAt, onDelete  , onEdit }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();
  const formattedTime = new Date(createdAt).toLocaleTimeString();


  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure to delete?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosUserInstance.delete(`/deleteTodo/${id}`);
          // console.log("Delete response", response);
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success"
          });
          onDelete(id);
        } catch (error) {
          console.error('Failed to delete task:', error);
          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting the task.",
            icon: "error"
          });
        }
      }
    });
  };




  return (
    <>
      <div className="text-lg font-semibold text-gray-800">{description}</div>
      <div className="text-xs text-gray-500">
        Created at: {formattedDate} {formattedTime}
      </div>
      <div className="flex space-x-2 mt-4">
        <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={onEdit}>
          Edit
        </button>
        <button className="px-3 py-1 text-sm font-medium text-red-600 bg-red-100 rounded hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={handleDelete}>
          Delete
        </button>

      </div>
    </>
  );
};

export default TodoItem;
