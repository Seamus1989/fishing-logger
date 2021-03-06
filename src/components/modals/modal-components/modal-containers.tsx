/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import {deviceHeight, deviceWidth} from '../../../consts';
import {Box} from '../../common/box';

import {Text} from '../../common/text';
import {StyledImage} from '../../random';
import remove from '../../../cancel.svg';
import {Divider} from '../../common/divider';

const ModalContainer = styled.div<{
  animate: boolean;
  modalSize: {
    height: string;
    width: string;
  };
  backgroundColor?: string;
  delay?: number;
}>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
  height: '62vh';
  width: '85vw';
  border-radius: 15px;
  border-width: 2px;
  border-color: black;
  overflow-y: scroll;
  overflow-x: hidden;
  overscroll-behavior: none;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 100;
  transition: ${(props) =>
    props.delay ? `all ease-in ${props.delay / 1100}s` : `all ease-in 0.45s`};
  transform: translate(-50%, -55%);
`;

interface BackgroundProps {
  children: JSX.Element;
  animate: boolean;
}

export const ModalBackGroundColor = styled.div<{
  delay?: number;
  animate: boolean;
  bg: string;
}>`
  background-color: ${(props) => {
    if (props.animate) {
      return `${props.bg}`;
    }
    return `white`;
  }};
  opacity: ${(props) => {
    if (props.animate) {
      return 1;
    }
    return 0;
  }};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  min-height: ${deviceHeight}px;
  min-width: ${deviceWidth}px;
  transition: ${(props) =>
    props.delay ? `all ease-in ${props.delay / 1000}s` : `all ease-in 0.6s`};
`;

const ModalHeader = ({
  title,
  animate,
  setAnimate,
  show,
}: {
  title: string;
  animate: boolean;
  setAnimate: (val: boolean) => void;
  show: boolean;
}): JSX.Element => {
  return (
    <Box backgroundColor="darkColor">
      <Box px="15px" py="10px" display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Text lineHeight="18px" fontWeight={400} fontSize="14px">
            {title}
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          flex={1}
        >
          <Box
            onClick={() => {
              setAnimate(false);
            }}
          >
            <StyledImage height={25} width={25} src={remove} alt="logo" />
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

const ModalAnimateOpacityStyled = styled.div<{
  animate: boolean;
  delay?: number;
}>`
  opacity: ${(props) => {
    if (props.animate) {
      return 1;
    }
    return 0;
  }};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: ${(props) => {
    if (props.animate) {
      return `scale(1)`;
    }
    return `scale(0)`;
  }};
  transition: ${(props) =>
    props.delay ? `all ease-in ${props.delay / 1000}s` : `all ease-in 0.6s`};
  height: 100%;
  width: 100%;
`;

const ModalAnimateOpacity = ({
  children,
  animate,
  transitionEnd,
  delay,
}: {
  children: JSX.Element;
  animate: boolean;
  transitionEnd: (e: any) => void;
  delay?: number;
}): JSX.Element => {
  return (
    <Box width="100%" height="100%" position="fixed" top="0" left="0">
      <ModalAnimateOpacityStyled
        onTransitionEnd={transitionEnd}
        delay={delay}
        animate={animate}
      >
        {children}
      </ModalAnimateOpacityStyled>
    </Box>
  );
};
interface Props {
  children: JSX.Element;
  modalSize: {
    height: string;
    width: string;
  };
}
const ModalInnerContainer = ({
  children,
  modalSize,
}: {
  children: JSX.Element;
  modalSize: {
    height: string;
    width: string;
  };
}): JSX.Element => {
  return (
    <Box position="relative" height="100%" width="100%">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex={1}
        maxHeight={modalSize.height}
        width={modalSize.width}
        // height={modalSize.height}
        // width={modalSize.width}
        // SEAMO TODO see how this handles lodads of content! ere
      >
        {children}
      </Box>
    </Box>
  );
};

export {ModalContainer, ModalHeader, ModalAnimateOpacity, ModalInnerContainer};
