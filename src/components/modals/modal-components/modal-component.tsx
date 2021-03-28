import React, {useEffect} from 'react';
import {
  ModalAnimateOpacity,
  ModalContainer,
  ModalInnerContainer,
  ModalBackGroundColor,
  ModalHeader,
} from './modal-containers';
import {Box} from '../../common/box';
import {useModalContext} from '../../../context/modal-context';

export const ModalComponent = ({
  children,
  modalSize,
  bg,
  title,
  delay,
}: {
  children: JSX.Element;
  modalSize: {
    height: string;
    width: string;
  };
  bg: string;
  title: string;
  // eslint-disable-next-line react/require-default-props
  delay?: number;
}): JSX.Element => {
  const {show, animate, setAnimate, setShow} = useModalContext();
  const transitionEnd = (e: any) => {
    if (e.propertyName !== 'opacity' || animate) {
      return;
    }
    if (show) {
      setShow(false);
    }
  };

  useEffect(() => {
    setAnimate(true);
    return () => {
      if (animate) {
        setAnimate(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box width="100%" height="100%" position="fixed" top="0" left="0">
      <ModalBackGroundColor
        delay={delay}
        bg="rgba(0, 0, 0, 0.65)"
        animate={animate}
      >
        <ModalAnimateOpacity
          delay={delay}
          animate={animate}
          transitionEnd={transitionEnd}
        >
          <ModalContainer
            animate={animate}
            delay={delay}
            modalSize={modalSize || undefined}
            backgroundColor={bg}
          >
            <ModalInnerContainer modalSize={modalSize || undefined}>
              <>
                <ModalHeader
                  show={show}
                  animate={animate}
                  setAnimate={setAnimate}
                  title={title}
                />
                {children}
              </>
            </ModalInnerContainer>
          </ModalContainer>
        </ModalAnimateOpacity>
      </ModalBackGroundColor>
    </Box>
  );
};
