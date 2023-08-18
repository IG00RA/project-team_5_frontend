import React, { useState } from 'react';
import FeedbackButton from '../components/Buttons/FeedbackButton/FeedbackButton';
import ModalContainer from '../components/Modal/ModalConatiner';
import { AuthSection } from '../components/AuthSection/AuthSection';
import { Description } from '../components/Description/Description';
import { AddFeedbackModal } from '../components/AddFeedbackModal/AddFeedbackModal';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';


export default function Home() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal1 = () => {
    setIsModalOpen1(true);
  };
  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <>
      <div>
        <AuthSection />
        <Description />
        <ScrollToTop/>
        <FeedbackButton onClick={openModal1} />
        <FeedbackButton onClick={openModal2} />
        <AddFeedbackModal isOpen={isModalOpen1} onRequestClose={closeModal1} />
        <ModalContainer isOpen={isModalOpen2} onRequestClose={closeModal2}>
          <p>HELLO2</p>
        </ModalContainer>
      </div>
    </>
  );
}

