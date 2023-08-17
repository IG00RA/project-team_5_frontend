import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from "./TaskForm.styled";
import { useOutletContext } from "react-router";
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/tasksOperations';
import moment from 'moment';

const Schema = Yup.object({});

export const TaskForm = ({ task: {title = '', start = moment().format('HH:mm'), end = moment().add(1, 'hour').format('HH:mm'), priority = ''}, closeModal, ColumnTitle }) => {

  const [, , updatedDate] = useOutletContext();
  const dispatch = useDispatch();
  const normalizedStringCategory = ColumnTitle.split(' ').join('-').toLowerCase();

  const formik = useFormik({
    initialValues: {
      title,
      start,
      end,
      priority,
    },
    validationSchema: Schema,
    onSubmit: (value, { resetForm }) => {
      const request = { ...value, category: normalizedStringCategory, date: updatedDate.format('YYYY-MM-DD') };
      dispatch(addTask(request));
      resetForm();
      closeModal();
    }
  });

  return (
    <Form autoComplete='off' onSubmit={formik.handleSubmit}> 
      <button type="button" onClick={closeModal}>Close</button>
      <input placeholder='Enter text' type="text" name="title" value={formik.values.title} onChange={formik.handleChange} />
      <input type="text" name="start" value={formik.values.start} onChange={formik.handleChange} />
      <input type="text" name="end" value={formik.values.end} onChange={formik.handleChange} />

      <input type="radio" name="priority" value='low' onChange={formik.handleChange} />
      <input type="radio" name="priority" value='medium' onChange={formik.handleChange} />
      <input type="radio" name="priority" value='high' onChange={formik.handleChange} />

      <button type="submit">{!title ? 'Add' : 'Edit'}</button>
      <button type="button" onClick={closeModal}>Close</button>
    </Form>
  );
};