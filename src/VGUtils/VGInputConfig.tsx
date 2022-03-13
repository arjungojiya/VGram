import {VGKeyboardType, VGRerurnKeyType, VGAutoCapitalize} from './VGConst';
import {MaxLength} from './VGDimensions';
import VGString from './VGString';

const VGInputConfig = {
  //Signup Input
  SignUpInput: [
    {
      PlaceHolder: VGString.fullName,
      KeyboardType: VGKeyboardType.default,
      ReturnKeyType: VGRerurnKeyType.next,
      AutoCapitalize: VGAutoCapitalize.words, //words
      Length: MaxLength.name,
    },
    {
      PlaceHolder: VGString.userName,
      KeyboardType: VGKeyboardType.default,
      ReturnKeyType: VGRerurnKeyType.next,
      AutoCapitalize: VGAutoCapitalize.none,
      Length: MaxLength.name,
    },
    {
      PlaceHolder: VGString.email,
      KeyboardType: VGKeyboardType.emailAddress,
      ReturnKeyType: VGRerurnKeyType.next,
      AutoCapitalize: VGAutoCapitalize.none, //words
    },
    {
      PlaceHolder: VGString.mobileNumber,
      KeyboardType: VGKeyboardType.phonePad,
      ReturnKeyType: VGRerurnKeyType.next,
      AutoCapitalize: VGAutoCapitalize.none, //words
      Length: MaxLength.phoneNumber,
    },
    {
      PlaceHolder: VGString.password,
      SecureTextEntry: true,
      KeyboardType: VGKeyboardType.default,
      ReturnKeyType: VGRerurnKeyType.done,
      AutoCapitalize: VGAutoCapitalize.none,
      Length: MaxLength.password,
    },
  ],

  //Login input
  LoginInput: [
    {
      PlaceHolder: VGString.emailPhoneUserName,
      KeyboardType: VGKeyboardType.emailAddress,
      ReturnKeyType: VGRerurnKeyType.next,
      AutoCapitalize: VGAutoCapitalize.none, //words,
    },
    {
      PlaceHolder: VGString.password,
      SecureTextEntry: true,
      KeyboardType: VGKeyboardType.default,
      ReturnKeyType: VGRerurnKeyType.done,
      AutoCapitalize: VGAutoCapitalize.none,
      Length: MaxLength.password,
    },
  ],
};
export default VGInputConfig;
