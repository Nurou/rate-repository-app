import { AsyncStorage } from 'react-native';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getAccessToken() {
    // Get the access token for the storage
    const accessToken =  await AsyncStorage.getItem(
      `${this.namespace}:user`
    )

    return accessToken ? JSON.parse(accessToken) : ''
  }

  setAccessToken(accessToken) {
    // Add the access token to the storage
    await AsyncStorage.setItem(
      `${this.namespace}:user`,
      JSON.stringify(accessToken)
    )
  }

  removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:user`)
  }
}

export default AuthStorage;
