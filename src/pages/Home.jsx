import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import FeedbackButton from '../components/Button/FeedbackButton/FeedbackButton';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Welcome to Team 5 Project</h1>
      <FeedbackButton onClick={openModal} />
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        {/* modal content */}
      </Modal>
    </div>
  );
}
