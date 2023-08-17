import React, { useState, StrictMode } from 'react';
import Carousel from "react-simply-carousel";
import { ReviewRaiting, ReviewPhoto, ReviewUsername, ReviewWrap, Title, Wrap, UserWrap, ReviewContainer, ReviewText, PhotoWrap } from 'components/ReviewsSlider/ReviewsSliderNew.styled';
import sprite from '../../images/svg-sprite/symbol-defs.svg';

const ReviewsSliderNew = ({ reviewsData }) => { 

const [activeSlide, setActiveSlide] = useState(0);


  return (
        <Wrap>
      <Title>Reviews</Title>          
    <div>
<Carousel
        containerProps={{
          style: {
            width: "100%",
            /* justifyContent: "space-between", */
            userSelect: "none",
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
/*           style: {
            background: "blue"
          } */
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: "--->",
          style: {
/*             width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center" */
          }
        }}
        backwardBtnProps={{
          children: "<---",
/*           style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          } */
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
/*             style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0
            } */
          },
          activeItemBtnProps: {
/*             style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            } */
          }
        }}
        itemsToShow={2}
        speed={800}
        centerMode
      >
          {reviewsData.map((review) => (
            <ReviewWrap key={review._id}>
              <ReviewContainer>
                <PhotoWrap>
                <ReviewPhoto src={review.owner.avatarURL} alt='Photo'/>
                </PhotoWrap>
                <UserWrap key={review.owner._id}>
                <ReviewUsername>{review.owner.userName}</ReviewUsername>
                  {/* <ReviewRaiting> */}
                    {/* {review.raiting} */}

                    <ReviewRaiting className="rating">

                      {review.raiting}
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </ReviewRaiting>

                  {/* </ReviewRaiting> */}
                </UserWrap>
              </ReviewContainer>
              <ReviewText>{review.review}</ReviewText>
            </ReviewWrap>
          ))}
      </Carousel>
    </div>
        </Wrap>
  )
}

export default ReviewsSliderNew;