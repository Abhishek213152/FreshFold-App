import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCT4XTxL2IDVcnh9zQ-Dt_kF4Rsq6cyQxc',
  authDomain: 'login-c8199.firebaseapp.com',
  projectId: 'login-c8199',
  storageBucket: 'login-c8199.appspot.com',
  messagingSenderId: '759291321398',
  appId: '1:759291321398:web:a7dca175d0251430438c97',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
