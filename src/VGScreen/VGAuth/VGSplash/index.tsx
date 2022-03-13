import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import styles from './styles';
import {RootStackParamList} from '../../../VGRouter';
import {ROUTES} from '../../../VGRouter/routes';
import VGMethod from '../../../VGUtils/VGMethod';
import SafeAreaView from 'react-native-safe-area-view';
import AppImages from '../../../VGAssets/VGImages';

interface VGSplashScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const VGSplashScreen: React.FC<VGSplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigateToScreen();
    }, 2500);
  }, []);

  const navigateToScreen = async () => {
    try {
      const isLogin = await VGMethod.getPref('IsLogin');
      if (isLogin) {
        navigation.replace(ROUTES.Home);
      }
    } catch (error) {
      navigation.navigate(ROUTES.Login);
    }
  };

  return (
    <SafeAreaView
      forceInset={{bottom: 'never', top: 'never'}}
      style={styles.vContainer}>
      <Image style={styles.iSplashLogo} source={AppImages.ic_instagram_logo} />
    </SafeAreaView>
  );
};

export default VGSplashScreen;
