import { createHeaders } from "./index"

// constant variable that holds the url of the api endpoint to make requests to
const apiURL = 'https://noroff-api-production-c87f.up.railway.app/translations';

export const translationAdd = async (user, translation) => {
    try {
        // send PATCH request with headers and body to update the translations
        const response = await fetch(`${apiURL}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })

        // if the request is not successful, throw an error
        if(!response.ok) {
            throw new Error('Could not update the translation')
        }

        // if the request is successful, parse the response json
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
         // if there is an error, return an array with the error message and null
        return [ error.message, null ]
    }
}

export const translationClearHistory = async (userId) => {
    try {
        // send PATCH request with headers and body to update the translations
        const response = await fetch(`${apiURL}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        // if the request is not successful, throw an error
        if(!response.ok) {
            throw new Error('Could not update translations')
        }
        // if the request is successful, parse the response json
        const result = await response.json()
        return [ null, result ]
    } catch (error) {
        // if there is an error, return an array with the error message and null
        return [error.message, null]
    }
}