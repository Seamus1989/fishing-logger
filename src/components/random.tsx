import styled from 'styled-components';

const StyledRotate = styled.div<{show: boolean}>`
  -ms-transform: ${(props) => (props.show ? `rotate(180deg)` : `rotate(0deg)`)};
  transform: ${(props) => (props.show ? `rotate(180deg)` : `rotate(0deg)`)};
`;
const StyledImage = styled.img<{height: number; width: number}>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

export {StyledImage, StyledRotate};
