
export default class LocalStorageHandler {

    getLocalStorageKeyValue(key) {
        return localStorage.getItem(key)
    }

    setLocalStorageKeyValue(key, value) {
        localStorage.setItem(key, value)
    }

}
