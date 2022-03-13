import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {ROUTES} from '../VGRouter/routes';
// import database from '@react-native-firebase/database';

// import moment from 'moment';
const VGMethod = {
  savePref: (key: string, value: any) => {
    AsyncStorage.setItem(key, JSON.stringify(value), err => {});
  },
  saveStringPref: (key: string, value: string) => {
    AsyncStorage.setItem(key, value, err => {});
  },

  removePref: (key: string) => {
    AsyncStorage.removeItem(key);
  },

  startWithReset: (
    navigation: {dispatch: (arg0: CommonActions.Action) => void},
    screenName: any,
  ) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: screenName}],
      }),
    );
  },

  logOut: async (navigation: {
    dispatch: (arg0: CommonActions.Action) => void;
    navigate: (arg0: any) => void;
  }) => {
    await AsyncStorage.clear();
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: ROUTES.Login}],
      }),
    );
    navigation.navigate(ROUTES.Login);
  },

  getPref: (key: string) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err: any, result: any) => {
        if (result) {
          resolve(JSON.parse(result));
        } else {
          reject(false);
        }
      });
    });
  },

  getStringPref: (key: string) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(result);
        } else {
          resolve(null);
        }
      });
    });
  },
  //   diffrenceOfTimeStamp: (
  //     lastIndexTimeStamp?: any,
  //     currentIndexTimeStamp?: any,
  //     index?: any,
  //   ) => {
  //     let lastDate = moment(lastIndexTimeStamp).format('DD/MM/YYYY');
  //     let todayDate = moment(currentIndexTimeStamp).format('DD/MM/YYYY');

  //     if (lastDate === todayDate) {
  //       return false;
  //     } else {
  //       return true;
  //     }
};
//   getRecentChatDate: (timeStamp: any) => {
//     let date = moment(timeStamp).local().format('MMMM DD, YYYY');
//     let time = moment(timeStamp).local().format('LT');
//     return date + ' at ' + time;
//   },

//   sendCommonNotification: async (
//     token: any,
//     notificationTitle: any,
//     notificationDetail: any,
//     data: any,
//     type: any,
//     uid: any,
//   ) => {
//     data.notificationType = type;
//     const FIREBASE_API_KEY =
//       'AAAAvsJCy30:APA91bFzhuZsXTSXbuub2kpzvOA-NrSHlsoo50yi5Qk5bkVw_OYzhbGS-ONkiZ09oKK52auq0UG1Wg1WeMF1OMqXg-PKLhRHiV4TRglbIEhzhYWwA5QwS-oViWg5ks35YCeENk4fMVVu';
//     const message = {
//       registration_ids: [token],
//       notification: {
//         title: notificationTitle,
//         body: notificationDetail,
//         vibrate: 1,
//         sound: 1,
//         show_in_foreground: true,
//         priority: 'high',
//         content_available: true,
//       },
//       data: data,
//     };

//     let headers = new Headers({
//       'Content-Type': 'application/json',
//       Authorization: 'key=' + FIREBASE_API_KEY,
//     });
//     // console.log('json',JSON.stringify(message))
//     // console.log('parse',JSON.parse(message))
//     try {
//       let response = await fetch('https://fcm.googleapis.com/fcm/send', {
//         method: 'POST',
//         headers,
//         body: JSON.stringify(message),
//       });
//       response = await response.json();
//       // if (type !== 'message') {
//       //   (data.NotificationTitle = notificationTitle),
//       //     (data.NotificationDetail = notificationDetail),
//       //     database()
//       //       .ref('Notification/' + uid)
//       //       .push(data);
//       // }
//       console.log(response);
//     } catch (error) {
//       console.log(error, '~~~error');
//     }
//   },
//   removeNonNumber: (string = '') => string.replace(/[^\d]/g, ''),

export default VGMethod;
