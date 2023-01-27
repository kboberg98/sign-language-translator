import { createHeaders } from "./index";

const apiURL = 'https://noroff-api-production-c87f.up.railway.app/translations';

const checkForUser = async (username) => {
    try {
        // Make a GET request to check if the user already exists
        const response = await fetch(`${apiURL}?username=${username}`)
        if(!response.ok) {
            throw new Error('Could not complete request.')
        }
        // If request is successful, parse the response to json
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        // If there is an error, return the error message and an empty array
        return [ error.message, [] ]
    }
}

const createUser = async (username) => {
    try {
        // Make a POST request to create a new user
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if(!response.ok) {
            throw new Error('Could not create user with username ' + username)
        }
        // If request is successful, parse the response to json
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        // If there is an error, return the error message and an empty array
        return [ error.message, [] ]
    }
}

export const loginUser = async (username) => {
    // Check if the user already exists
    const [ checkError, user ] = await checkForUser(username)

    if(checkError !== null) {
        // If there is an error, return the error message and null
        return [ checkError, null ]
    }

    if (user.length > 0) {
        // If the user exists, return the user object and null error
        return [ null, user.pop() ]

    }

    // If the user does not exist, create the user and return the new user object
    return await createUser(username)
}

