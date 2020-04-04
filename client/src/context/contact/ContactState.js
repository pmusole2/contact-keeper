import React, {useReducer} from 'react'
import {v4 as uuid} from 'uuid'
import {ContactContext} from './contactContext'
import contactReducer from './ContactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

export const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id:1,
                name: "Prince Musole",
                email: "pmusole2@gmail.com",
                phone: "1234567",
                type: "personal"
            },
            {
                id:2,
                name: "Patrick Musole",
                email: "plmusole@gmail.com",
                phone: "123456789",
                type: "professional"
            },
            {
                id:3,
                name: "Eunice Chibale",
                email: "Tiko@me.com",
                phone: "1234567654",
                type: "personal"
            },
            {
                id:4,
                name: "Tasha Richards",
                email: "Tasha@me.com",
                phone: "12345676474",
                type: "personal"
            }
        ],
        current: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({
            type: ADD_CONTACT,
            payload: contact
        })
    }

    // Delete Contact
    const deleteContact = id => {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }


    // Set Current Contact
    const setCurrent = contact => {
        dispatch({
            type: SET_CURRENT,
            payload: contact
        })
    }

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({
            type: CLEAR_CURRENT
        })
    }

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}