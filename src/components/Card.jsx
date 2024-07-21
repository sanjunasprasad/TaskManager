import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import TodoItem from './TodoItem';

const Card = ({ title, items , onDelete  , onEdit}) => {
  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-center text-gray-800">{title}</h2>
      <div className="flex flex-col space-y-4">
        {items.map((item, index) => (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="p-4 bg-gray-200 rounded-lg shadow flex flex-col space-y-4"
              >
                <TodoItem id={item.id} text={item.text} description={item.description} status={item.status} createdAt={item.createdAt}  onDelete={onDelete}     onEdit={() => onEdit(item)} />
              </div>
            )}
          </Draggable>
        ))}
      </div>
    </>
  );
};

export default Card;
