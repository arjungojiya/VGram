import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import VGConstant from '../VGUtils/VGConst';
import VGMethod from '../VGUtils/VGMethod';

const createUserWithEmailAndPassword = (email: string, password: string) =>
  new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });

const getUser = () =>
  new Promise((resolve, reject) => {
    VGMethod.getPref(VGConstant.IsLogin)
      .then((response: any) => {
        if (response) {
          let User = auth().currentUser;
          resolve(User);
        }
      })
      .catch((e: any) => {
        reject(e);
      });
  });

const signOut = () =>
  new Promise((resolve, reject) => {
    auth().signOut();
  });

const addDataInUser = (uID: string, userData: any) =>
  new Promise((resolve, reject) => {
    firestore()
      .collection(VGConstant.Users)
      .doc(uID)
      .set(userData)
      .then((result: any) => {
        resolve(result);
      })
      .catch((error: any) => {
        reject(error);
      });
  });

const updateDataInUser = (uID: string, userData: any) =>
  new Promise((resolve, reject) => {
    firestore()
      .collection(VGConstant.Users)
      .doc(uID)
      .update(userData)
      .then((result: any) => {
        resolve(result);
      })
      .catch((error: any) => {
        reject(error);
      });
  });

const signInWithEmailAndPassword = (email: string, password: string) =>
  new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });

const signInWithCredential = (Credential: any) =>
  new Promise((resolve, reject) => {
    auth()
      .signInWithCredential(Credential)
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });

const fetchAllUserData = () =>
  new Promise((resolve, reject) => {
    firestore()
      .collection(VGConstant.Users)
      .get()
      .then((result: {docs: unknown}) => {
        resolve(result.docs);
      })
      .catch((error: any) => {
        reject(error);
      });
  });

const fetchUserDataById = async (uID: string) =>
  new Promise((resolve, reject) => {
    firestore()
      .collection(VGConstant.Users)
      .doc(uID)
      .get()
      .then((result: unknown) => {
        resolve(result);
      })
      .catch((error: any) => {
        reject(error);
      });
  });

const doesUserNameExist = (userName: string) =>
  new Promise((resolve, reject) => {
    firestore()
      .collection(VGConstant.Users)
      .where(VGConstant.UserName, '==', userName)
      .get()
      .then((result: {docs: string | any[]}) => {
        resolve(result.docs.length);
      })
      .catch((error: any) => {
        reject(error);
      });
  });

const authService = {
  createUserWithEmailAndPassword,
  getUser,
  addDataInUser,
  updateDataInUser,
  signInWithEmailAndPassword,
  signInWithCredential,
  signOut,
  fetchAllUserData,
  fetchUserDataById,
  doesUserNameExist,
};

export default authService;
