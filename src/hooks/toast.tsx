/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback} from 'react';
import {toast, ToastPosition} from 'react-toastify';

export const useToast = () => {
  const showToast = useCallback(
    (
      message: string,
      isError: boolean,
      duration?: number,
      position?: ToastPosition,
    ) => {
      console.log('ijfirif');
      if (isError) {
        toast.error(message, {
          position: position || 'top-center',
          autoClose: duration || 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      toast.success(message, {
        position: position || 'top-center',
        autoClose: duration || 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [],
  );
  return {
    showToast,
  };
};
