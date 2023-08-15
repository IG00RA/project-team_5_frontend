import React, { useState } from 'react';
import FeedbackButton from '../components/Buttons/FeedbackButton/FeedbackButton';
import ModalContainer from '../components/Modal/ModalConatiner';
// import Loader from '../components/loader/loader';
import { AuthSection } from '../components/AuthSection/AuthSection';
import { Description } from '../components/Description/Description';
import ReviewsSlider from 'components/ReviewsSlider/ReviewsSlider';

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
        {/* <Loader /> */}
        <AuthSection />
        <Description />
        <ReviewsSlider/>
        <FeedbackButton onClick={openModal1} />
        <FeedbackButton onClick={openModal2} />
        <ModalContainer isOpen={isModalOpen1} onRequestClose={closeModal1}>
          <p>HELLO</p>
        </ModalContainer>
        <ModalContainer isOpen={isModalOpen2} onRequestClose={closeModal2}>
          <p>HELLO2</p>
        </ModalContainer>
      </div>
    </>
  );
}
