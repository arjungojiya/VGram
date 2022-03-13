import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Keyboard, Image} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../VGRouter';
import styles from './styles';
import CS from '../../../VGUtils/VGStyle';
import VGTextInput from '../../../VGComponent/VGCustom/VGTextInput';
// import authService from '../../../VGFirebaseService/auth';
import {ROUTES} from '../../../VGRouter/routes';

//redux
import {useDispatch} from 'react-redux';
import {updateLoader} from '../../../VGRedux/DGActions/commonactions';
import VGStyleConfig from '../../../VGUtils/VGStyleConfig';
import VGInputConfig from '../../../VGUtils/VGInputConfig';

interface VGRegisterScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}
const VGRegisterScreen: React.FC<VGRegisterScreenProps> = ({navigation}) => {
  const [tiEmail, setTiEmail] = useState<string>('');
  const [tiFullName, setTiFullName] = useState<string>('');
  const [tiUserName, setTiUserName] = useState<string>('');
  const [tiMobile, setTiMobile] = useState<string>('');
  const [tiPassword, setTiPassword] = useState<string>('');

  const dispatch = useDispatch();

  const handleSignUp = async () => {};

  const clearValue = () => {
    setTiFullName('');
    setTiUserName('');
    setTiEmail('');
    setTiMobile('');
    setTiPassword('');
  };

  const handleLogin = () => {
    navigation.navigate(ROUTES.Login);
  };
  return (
    <View>
      {VGInputConfig.SignUpInput.map((item: any, index: number) => {
        return (
          <View>
            <VGTextInput
              key={`SignUpInput-${index}`}
              placeholder={item.PlaceHolder}
              keyboardType={item?.KeyboardType}
              returnKeyType={item?.ReturnKeyType}
              maxLength={item?.Length}
              onChangeText={undefined}
              value={undefined}
            />
          </View>
        );
      })}
    </View>
  );
};

export default VGRegisterScreen;
