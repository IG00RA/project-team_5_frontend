import { Form } from "./TaskForm.styled";
import { useOutletContext } from "react-router";

export const TaskForm = ({ task, closeModal, ColumnTitle }) => {

  const [, , updatedDate] = useOutletContext();

  return (
    <Form>
      <button type="button" onClick={closeModal}>Close</button>
      <input value={task.title} />
      <input value={task.start} />
      <input value={task.end} />

      <input type="radio" name="radio-2" />
      <input type="radio" name="radio-2" />
      <input type="radio" name="radio-2" />

      <button type="submit">{!task.title ? 'Add' : 'Edit'}</button>
      <button type="button" onClick={closeModal}>Close</button>
    </Form>
  );
};