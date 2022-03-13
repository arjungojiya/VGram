const VGConstant = {
  regex: /\s+/g,
  Users: 'Users',
  IsLogin: 'IsLogin',
  authEmailAlreadyInUse: 'auth/email-already-in-use',
  UserName: 'UserName',
  noUser: 'auth/user-not-found',
  wrongPass: 'auth/wrong-password',
  profileUri: 'https://picsum.photos/600',
  postUri: 'https://picsum.photos/1920/1080',
  Email: 'Email',
  UserNotFound: 'User Not Found',
  Posts: 'Posts',
  dateFormatForPost: 'D MMM YYYY',
};

export enum VGKeyboardType {
  default = 'default',
  numeric = 'numeric',
  emailAddress = 'email-address',
  phonePad = 'phone-pad',
}

export enum VGAutoCapitalize {
  characters = 'characters',
  words = 'words',
  sentences = 'sentences',
  none = 'none',
}

export enum VGRerurnKeyType {
  next = 'next',
  done = 'done',
}

export default VGConstant;

export const VGHardwareBackPress = 'hardwareBackPress';
export const VGNever = 'never';
export const VGAlways = 'always';
