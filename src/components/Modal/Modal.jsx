import ReactModal from 'react-modal';

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(21, 20, 20, 0.6)',
  backdropFilter: 'blur(4px)',
  zIndex: 1050,
};
const contentStyles = {
  position: 'relative',
  margin: '0 auto',
  WebkitOverflowScrolling: 'touch',
  outline: 'none',
  overflow: 'hidden',
};

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={0.3}
      style={{ overlay: overlayStyles, content: contentStyles }}
      contentLabel="Example Modal"
      portalClassName="ReactModalPortal"
      overlayClassName="ReactModal__Overlay"
      d="some-id"
      className="ReactModal__Content"
      bodyOpenClassName="ReactModal__Body--open"
      htmlOpenClassName="ReactModal__Html--open"
      ariaHideApp={false}
      shouldFocusAfterRender={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      shouldReturnFocusAfterClose={true}
      role="dialog"
      preventScroll={false}
      parentSelector={() => document.body}
      aria={{
        labelledby: 'heading',
        describedby: 'full_description',
      }}
      data={{
        background: 'green',
      }}
      testId=""
      overlayElement={(props, contentElement) => (
        <div {...props}>{contentElement}</div>
      )}
      contentElement={props => <div {...props}>{children}</div>}
    >
      <button onClick={onRequestClose}>Close modal</button>
    </ReactModal>
  );
};

export default Modal;
