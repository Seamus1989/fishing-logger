import styled from 'styled-components';

const StyledRotate = styled.div<{show: boolean}>`
  -ms-transform: ${(props) => (props.show ? `rotate(180deg)` : `rotate(0deg)`)};
  transform: ${(props) => (props.show ? `rotate(180deg)` : `rotate(0deg)`)};
`;
const StyledImage = styled.img<{height: number; width: number}>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;
const UnderlinedText = styled.p<{small?: boolean}>`
  text-decoration: underline;
  line-height: ${(props) => (props.small ? '14px' : '16px')};
  font-weight: 300;
  font-size: ${(props) => (props.small ? '12px' : '14px')};
  margin: 0;
`;
export {UnderlinedText, StyledImage, StyledRotate};
