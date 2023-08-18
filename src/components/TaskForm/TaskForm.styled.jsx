import { styled } from "styled-components";

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const IconClose = styled.svg`
  height: 24px;
  width: 24px;
  
  stroke: #111;
  fill: transparent;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  padding: 40px 28px;
  width: 396px;
  height: 360px;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.80);
  background-color: #FFF;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InputTimeWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;

  color: rgba(52, 52, 52, 0.80);
`;

export const InputText = styled.input`
  padding: 14px 18px;
  width: 340px;
  height: 46px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  color: #343434;
  border-radius: 8px;
  background-color: #F6F6F6;

  &::placeholder {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28;

    color: #343434;
  }
`;

export const InputTime = styled.input`
  padding: 14px 18px;
  width: 163px;
  height: 46px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  color: #343434;
  border-radius: 8px;
  background-color: #F6F6F6;

  &::-webkit-calendar-picker-indicator {
    display: none;
}
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const RedioWrapper = styled.ul`
  display: flex;
  gap: 16px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  font-family: Inter;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  color: #343434;
`;

export const WrapperBtn = styled.div`
  display: flex;
  gap: 14px;
`;

export const FormSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 178px;
  height: 48px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  border-radius: 8px;
  color: #FFF;
  background-color: #3E85F3;
`;

export const IconInBtn = styled.svg`
  height: 18px;
  width: 18px;
  
  stroke: #fff;
  fill: transparent;
`;

export const CancelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 144px;
  height: 48px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  border-radius: 8px;
  color: #111;
  background-color: #EFEFEF;
`;

export const RadioNone = styled.input`
  display: none;
`;

export const RadioCustom = styled.span`
  display: block;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  background-color: ${p => {
    switch (p.color) {
      case 'low':
        return '#72C2F8'
      case 'medium':
        return '#F3B249'
      case 'high':
        return '#EA3D65'
      default:
        return
    }
  }};
`;

export const RadioCustomCheck = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  ${RadioNone}:checked + & {
    width: 14px;
    height: 14px;

    border-radius: 50%;
    border: 1px solid;
    background-color: transparent;
    border-color: ${p => {
    switch (p.color) {
      case 'low':
        return 'rgba(114, 194, 248, 0.50);'
      case 'medium':
        return 'rgba(243, 178, 73, 0.50);'
      case 'high':
        return 'rgba(234, 61, 101, 0.50);'
      default:
        return
    }
  }}};
`;