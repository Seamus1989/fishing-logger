/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {createContext, useContext, useCallback, useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const ModalContext = createContext<{
  show: boolean;
  setShow: (val: boolean) => void;
  animate: boolean;
  setAnimate: (val: boolean) => void;
}>({
  show: false,
  animate: false,
  setShow: (val) => {},
  setAnimate: (val) => {},
});

const ModalProvider = (props: {children: JSX.Element}): JSX.Element => {
  const [show, setShowModal] = useState(false);
  const [animate, setAnimateModal] = useState(false);

  const setShow = useCallback((val: boolean) => {
    setShowModal(val);
  }, []);
  const setAnimate = useCallback((val: boolean) => {
    setAnimateModal(val);
  }, []);

  return (
    <ModalContext.Provider value={{animate, show, setShow, setAnimate}}>
      {props.children}
    </ModalContext.Provider>
  );
};
const useModalContext = () => useContext(ModalContext);

export {useModalContext, ModalProvider};
