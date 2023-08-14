export const ButtonToggle = ({ children, onClick }) => {
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
};