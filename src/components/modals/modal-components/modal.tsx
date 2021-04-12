/* eslint-disable react/require-default-props */
import React from 'react';
import {deviceHeight, deviceWidth} from '../../../consts';
import {useModalContext} from '../../../context/modal-context';
import {ModalComponent} from './modal-component';

export const Modal = ({
  title,
  width,
  height,
  children,
}: {
  title: string;
  width?: string;
  height?: string;
  children: JSX.Element;
}): JSX.Element => {
  const {show} = useModalContext();

  return (
    <>
      {show && (
        <ModalComponent
          title={title}
          modalSize={{
            height: height || `${deviceHeight - 100}px`,
            width: width || `${deviceWidth - 60}px`,
          }}
          bg="white"
          delay={300}
        >
          {children}
        </ModalComponent>
      )}
    </>
  );
};
