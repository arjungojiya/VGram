import VGToast from 'react-native-simple-toast';

export const showToast = (msg: string) => {
  VGToast.show(msg, VGToast.SHORT, ['UIAlertController']);
};
