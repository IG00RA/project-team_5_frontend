export const ColumnTasksList = ({tasksColection}) => {
  return (
    <ul>
      {tasksColection.map(item => (
        <li>{item.category}</li>
      ))}
    </ul>
  );
};