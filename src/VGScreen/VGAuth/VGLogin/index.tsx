import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
  Alert,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../VGRouter';
import styles from './styles';
import CS from '../../../VGUtils/VGStyle';
import VGTextInput from '../../../VGComponent/VGCustom/VGTextInput';
import VGInputConfig from '../../../VGUtils/VGInputConfig';
import {Type_Of_Login} from '../../../VGUtils/VGEnum';
import VGConstant from '../../../VGUtils/VGConst';
import VGString from '../../../VGUtils/VGString';
import VGValidation from '../../../VGUtils/VGValidation';
import {showToast} from '../../../VGUtils/VGToast';
import {ROUTES} from '../../../VGRouter/routes';
import authService from '../../../VGFirebase/auth';
import VGMethod from '../../../VGUtils/VGMethod';
import firestore from '@react-native-firebase/firestore';

//redux
import {useDispatch} from 'react-redux';
import {updateLoader} from '../../../VGRedux/VGActions/commonactions';
// import messaging from '@react-native-firebase/messaging';
import SafeAreaView from 'react-native-safe-area-view';
import AppImages from '../../../VGAssets/VGImages';
import VGButton from '../../../VGComponent/VGCustom/VGButton';

interface VGLoginScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}
const VGLoginScreen: React.FC<VGLoginScreenProps> = ({navigation}) => {
  const [tiEmail, setTiEmail] = useState<string>('');
  const [tiPassword, setTiPassword] = useState<string>('');

  const dispatch = useDispatch();

  const onChangeTextHandle = (text: string, index: number) => {
    switch (index) {
      case Type_Of_Login.Email:
        setTiEmail(text);
        break;
      case Type_Of_Login.Password:
        let managePassword = text.replace(VGConstant.regex, VGString.noSpace);
        setTiPassword(managePassword);
        break;
    }
  };

  const getInputValue = (index: number) => {
    switch (index) {
      case Type_Of_Login.Email:
        return tiEmail;
      case Type_Of_Login.Password:
        return tiPassword;
    }
  };

  const onClickLogin = () => {
    if (VGValidation.isFieldEmpty2(tiEmail)) {
    } else if (VGValidation.isEmailInvalid(tiEmail)) {
    } else if (VGValidation.isFieldEmpty2(tiPassword)) {
    } else {
      Keyboard.dismiss();
      handleLogin();
    }
  };

  const handleLogin = () => {
    dispatch(updateLoader(true));
    authService
      .signInWithEmailAndPassword(tiEmail.toLowerCase(), tiPassword)
      .then((result: any) => {
        dispatch(updateLoader(false));
        authService.updateDataInUser(result.user.uid, {fcmtoken: ''});
        VGMethod.savePref(VGConstant.IsLogin, true);
        VGMethod.savePref(VGConstant.IsLogin, true);
        authService.updateDataInUser(result.user.uid, {
          Following: firestore.FieldValue.arrayUnion(result.user.uid),
        });
        showToast(VGString.loginSuccess);
        navigation.navigate(ROUTES.Home);
        clearValue();
      })
      .catch((error: {code: string}) => {
        dispatch(updateLoader(false));
        if (error.code == VGConstant.noUser) {
        } else {
        }
      });
  };

  const clearValue = () => {
    setTiEmail('');
    setTiPassword('');
  };

  const handleSignUp = () => {
    navigation.navigate(ROUTES.Signup);
  };

  // const handleInDevelopment = () => {
  //   Alert.alert('In development');
  // };

  return (
    <SafeAreaView
      forceInset={{bottom: 'never', top: 'never'}}
      style={styles.vContainer}>
      <View style={styles.vLogoContainer}>
        <Image
          resizeMode="contain"
          source={AppImages.ic_instagram_logo}
          style={styles.iLogo}></Image>
      </View>

      {VGInputConfig.LoginInput.map((item, index) => {
        return (
          <>
            <VGTextInput
              key={`LoginInput-${index}`}
              placeholder={item.PlaceHolder}
              onChangeText={(text: string) => onChangeTextHandle(text, index)}
              value={getInputValue(index)}
              keyboardType={item?.KeyboardType}
              returnKeyType={item?.ReturnKeyType}
              maxLength={item?.Length}
            />
          </>
        );
      })}

      <VGButton
        text="Register"
        handleClick={() => {
          navigation.navigate(ROUTES.Signup);
        }}
      />
    </SafeAreaView>
  );
};

export default VGLoginScreen;
