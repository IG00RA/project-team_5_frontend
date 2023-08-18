import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BottomWrapper, CancelBtn, CloseBtn, Form, FormSubmitBtn, IconClose, IconInBtn, InputLabel, InputText, InputTime, InputTimeWrapper, InputWrapper, Label, RadioNone, RadioCustomCheck, RedioWrapper, WrapperBtn, RadioCustom, Error } from "./TaskForm.styled";
import { useOutletContext } from "react-router";
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from 'redux/tasks/tasksOperations';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import moment from 'moment';
import { useState } from 'react';

const Schema = Yup.object({
  title: Yup.string().min(3, 'Please enter at least 3 characters').required('This field is required'),
  start: Yup.string(),
  end: Yup.string(),
  priority: Yup.string().oneOf(['low', 'medium', 'high']).required(),
});

const radioButtonsList = ['low', 'medium', 'high'];

export const TaskForm = ({ task: { _id, title = '', start = moment().format('HH:mm'), end = moment().add(1, 'hour').format('HH:mm'), priority = 'low' }, closeModal, ColumnTitle }) => {

  const [checked, setChecked] = useState(priority);
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
      if (!_id) {
        dispatch(addTask(request));
        resetForm();
        closeModal();
        return
      };
      dispatch(updateTask({ id: _id, task: value }));
      resetForm();
      closeModal();
      return
    }
  });

  return (
    <>
      <CloseBtn type="button" onClick={closeModal}>
        <IconClose>
          <use href={sprite + '#icon-x-close'}></use>
        </IconClose>
      </CloseBtn>

      <Form autoComplete='off' onSubmit={formik.handleSubmit}>

        <InputWrapper>
          <InputLabel>Title<InputText placeholder='Enter text' type="text" name="title" value={formik.values.title} onChange={formik.handleChange} /></InputLabel>
          {formik.errors.title && formik.touched.title && <Error>{formik.errors.title}</Error>}
          <InputTimeWrapper>
            <InputLabel>Start<InputTime type="time" name="start" value={formik.values.start} onChange={formik.handleChange} /></InputLabel>
            <InputLabel>End<InputTime type="time" name="end" value={formik.values.end} onChange={formik.handleChange} /></InputLabel>
          </InputTimeWrapper>
        </InputWrapper>

        <BottomWrapper>
          <RedioWrapper >
            {radioButtonsList.map(radio => (
              <li key={radio}>
                <Label><RadioNone onClick={() => setChecked(radio)} checked={radio === checked} type="radio" name="priority" value={radio} onChange={formik.handleChange} />
                  <RadioCustomCheck color={radio}><RadioCustom color={radio}></RadioCustom></RadioCustomCheck>{radio}</Label>
              </li>
            ))}
          </RedioWrapper>
      
          <WrapperBtn>
            {!_id ? <FormSubmitBtn type="submit">
              <IconInBtn>
                <use href={sprite + '#icon-plus'}></use>
              </IconInBtn> Add
            </FormSubmitBtn> : <FormSubmitBtn type="submit">
              <IconInBtn>
                <use href={sprite + '#icon-pencil'}></use>
              </IconInBtn> Edit
            </FormSubmitBtn>}
            <CancelBtn type="button" onClick={closeModal}>Cancel</CancelBtn>
          </WrapperBtn>
        </BottomWrapper>
      </Form>
    </>
  );
};