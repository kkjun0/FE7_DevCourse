import { useState } from 'react';
import Button from './html/Button';
import Checkbox from './html/Checkbox';
import SvgClose from './svg/SvgClose';
import SvgPencil from './svg/SvgPencil';
import Input from './html/Input';

export default function TodoListItem({
  todo,
  toggleTodo,
  deleteTodo,
  modifyTodo,
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  modifyTodo: (id: number, title: string) => void;
}) {
  const [isModify, setIsModify] = useState(false);
  const [modifyTitle, setModifyTitle] = useState('');
  const modifyHandler = () => {
    setIsModify((isModify) => !isModify);
    setModifyTitle(modifyTitle === '' ? todo.text : modifyTitle);
    if (modifyTitle.trim() !== '' && modifyTitle !== todo.text) {
      modifyTodo(todo.id, modifyTitle);
    }
  };
  return (
    <>
      {/* 할 일이 완료되면 .todo__item--complete 추가 */}
      <li className={`todo__item ${todo.completed && 'todo_item--complete'}`}>
        {!isModify && (
          <Checkbox
            parentClassName="todo__checkbox-group"
            type="checkbox"
            className="todo__checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </Checkbox>
        )}

        {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)  */}
        {/* <input type="text" className="todo__modify-input" />  */}
        {isModify && (
          <Input
            type="text"
            className="todo__modify-input"
            value={modifyTitle}
            onChange={(e) => setModifyTitle(e.target.value)}
          />
        )}
        <div className="todo__button-group">
          <Button className="todo__action-button" onClick={modifyHandler}>
            <SvgPencil />
          </Button>
          <Button
            className="todo__action-button"
            onClick={() => deleteTodo(todo.id)}
          >
            <SvgClose />
          </Button>
        </div>
      </li>
    </>
  );
}
