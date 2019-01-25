import Api from '@/services/Api'

// object
export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
