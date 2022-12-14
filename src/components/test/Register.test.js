import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, cleanup, fireEvent, getByText, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
import Register from '../Register';

afterAll(cleanup)
afterEach(cleanup)

describe('register', () => {
    const user = userEvent.setup()
    const onSubmit = jest.fn()
    render(<BrowserRouter><Register onSubmitForTest={onSubmit} /></BrowserRouter>)

    const button = screen.getByText('Sign-up')
    const nameInput = screen.getByPlaceholderText('Username')
    const passwordInput = screen.getByPlaceholderText('Password')
    const confPasswordInput = screen.getByPlaceholderText('Password')
    const emailInput = screen.getByPlaceholderText('name@example.com')

    it('Register form, all values inserted correctly', async () => {
        fireEvent.change(nameInput, { target: { value: 'name' } })
        fireEvent.change(passwordInput, { target: { value: 'password' } })
        fireEvent.change(confPasswordInput, { target: { value: 'confPassword' } })
        fireEvent.change(emailInput, { target: { value: 'email' } })

        await user.click(button)
        await waitFor(() => expect(onSubmit.mock.calls).toHaveLength(1))

    })
})