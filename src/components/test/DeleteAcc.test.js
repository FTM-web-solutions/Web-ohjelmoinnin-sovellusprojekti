import React from 'react'
import { useEffect, useState } from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen, cleanup, fireEvent, getByText, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
import Navbar from '../Navbar'

global.ResizeObserver = require('resize-observer-polyfill')

afterAll(cleanup)
afterEach(cleanup)

test('deleteAcc function', async () => {
    const deleteMockFunction = jest.fn()

    const exampleContext = {
        status: "logged_in",
        token: "TOKEN",
        username: "Username"
    }
    render(
        <BrowserRouter>
            <Navbar deleteMockFunction={deleteMockFunction} exampleContext={exampleContext} />
        </BrowserRouter>
    )
    fireEvent.click(screen.getByText('Username'))
    fireEvent.click(screen.getByText('Delete user'))
    await waitFor(() => expect(deleteMockFunction.mock.calls).toHaveLength(1))
})