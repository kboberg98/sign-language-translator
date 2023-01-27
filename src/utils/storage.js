// checks if key is not falsy or not a string
const validateKey = key => {
    if (!key || typeof key !== 'string') {
        throw new Error('storageSave: Invalid storage key provided')
    }
}

export const storageSave = (key, value) => {

    validateKey(key) // calls the validateKey function to validate the key

    if (!value) { // checks if value is not falsy
        throw new Error('storageSave: No value provided' + key)
    }

    // saves the value to sessionStorage with the given key
    sessionStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = key => {

    validateKey(key) // calls the validateKey function to validate the key

    const data = sessionStorage.getItem(key)
    if (data) { // checks if data exists
        return JSON.parse(data) // returns the parsed data
    }

    return null // if data is not found, return null
}

export const storageDelete = key => {

    validateKey(key) // calls the validateKey function to validate the key

    sessionStorage.removeItem(key) // removes the item from sessionStorage with the given key
}