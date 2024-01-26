import { createSlice } from '@reduxjs/toolkit';

const selectedSlice = createSlice({
  name: 'selected',
  initialState: [],
  reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     state.contacts.push(action.payload);
    //   },
    //   prepare({ name, number }) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         contactName: name,
    //         number,
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   const filterRes = {
    //     contacts: state.contacts.filter(cont => cont.id !== action.payload),
    //   };
    //   return filterRes;
    // },
  },
});

// export const { addContact, deleteContact } = contactSlice.actions;
export const selectedReducer = selectedSlice.reducer;
