import { useState } from 'react';
import Button from './html/Button';
import Input from './html/Input';

export default function TodoEditor({
  addTodo,
}: {
  addTodo: (text: string) => void;
}) {
  const [content, setContent] = useState('');
  const handleSaveContent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content.trim()) return;
    addTodo(content);
    setContent('');
  };
  return (
    <>
      <form className="todo__form" onSubmit={handleSaveContent}>
        <div className="todo__editor">
          <Input
            type="text"
            className="todo__input"
            placeholder="Enter Todo List"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button className="todo__button" type="submit">
            Add
          </Button>
        </div>
      </form>
    </>
  );
}
