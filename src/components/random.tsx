import styled from 'styled-components';

const StyledRotate = styled.div<{show: boolean}>`
  -ms-transform: ${(props) => (props.show ? `rotate(180deg)` : `rotate(0deg)`)};
  transform: ${(props) => (props.show ? `rotate(180deg)` : `rotate(0deg)`)};
`;

const StyledImage = styled.img<{height: number; width: number}>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;
const UnderlinedText = styled.p<{small?: boolean; verySmall?: boolean}>`
  text-decoration: underline;
  line-height: ${(props) => {
    if (props.small) {
      return '14px';
    }
    if (props.verySmall) {
      return '12px';
    }
    return '16px';
  }};
  font-weight: 300;
  font-size: ${(props) => {
    if (props.small) {
      return '12px';
    }
    if (props.verySmall) {
      return '10px';
    }
    return '14px';
  }};
  margin: 0;
`;
export {UnderlinedText, StyledImage, StyledRotate};
