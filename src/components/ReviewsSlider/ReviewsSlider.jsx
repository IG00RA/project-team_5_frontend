import React, { useState } from 'react';
import { ReviewRaiting, ReviewPhoto, ReviewUsername, ReviewWrap, Title, Wrap, UserWrap, ReviewContainer, ReviewText, PhotoWrap, CarouselWrap } from 'components/ReviewsSlider/ReviewsSlider.styled';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CustomCarouselButtons } from './CustomCarouselButtons'

const ReviewsSlider = ({ reviewsData }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 25;

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };


  return (
    <Wrap>
      <Title>Reviews</Title>          
      <div>
        <CarouselWrap>
        <Carousel
            autoPlay={true}
            selectedItem={currentIndex}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={true}
            centerMode={false}
            showIndicators={false}
            stopOnHover={true}
            emulateTouch={true}
            interval={1500}
            transitionTime={500} 
            showArrows={false}
          >
            {reviewsData.map((review) => (
              <ReviewWrap key={review._id}>
                <ReviewContainer>
                  <PhotoWrap>
                    <ReviewPhoto src={review.owner.avatarURL} alt='Photo'/>
                  </PhotoWrap>
                    <UserWrap key={review.owner._id}>
                      <ReviewUsername>{review.owner.userName}</ReviewUsername>
                    <div className="rating">
                          {[...Array(5)].map((item, i) => {
                            return (
                              <ReviewRaiting>
                              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                              checked={Number(review.raiting) === (i + 1)}/>
                              </ReviewRaiting>
                              )})}
                        </div>
                    </UserWrap>
                  </ReviewContainer>
                <ReviewText>{review.review}</ReviewText>
              </ReviewWrap>
          ))}
        </Carousel>
        </CarouselWrap>
      </div>
      <CustomCarouselButtons
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
    </Wrap>
  )
}

export default ReviewsSlider;
