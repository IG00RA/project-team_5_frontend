import { Wrap, Button, Icon } from "./CustomCarouselButtons.styled";
import sprite from '../../images/svg-sprite/symbol-defs.svg';


export const CustomCarouselButtons = ({ currentIndex, totalSlides, onPrevClick, onNextClick }) => {
  return (
    <Wrap>
      <Button onClick={onPrevClick} disabled={currentIndex === 0}>
        <Icon>
          <use href={sprite + '#icon-down-arrow-left'}></use>
        </Icon>
			</Button>
			
      <Button onClick={onNextClick} disabled={currentIndex === totalSlides - 1}>
        <Icon>
          <use href={sprite + '#icon-down-arrow-right'}></use>
        </Icon>
      </Button>
    </Wrap>
  );
};