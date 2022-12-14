import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, cleanup, fireEvent, getByText, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../Login'
import { BrowserRouter } from "react-router-dom";

afterAll(cleanup)
afterEach(cleanup)

test('Log in', async () => {

    const user = userEvent.setup()

    const onSubmit = jest.fn()

    render(<BrowserRouter><Login onSubmitForTest={onSubmit} /></BrowserRouter>)

    const button = screen.getByText('Login')
    const EmailInput = screen.getByPlaceholderText('email')
    const passwordInput = screen.getByPlaceholderText('password')

    await fireEvent.change(EmailInput, { target: { value: 'email' } })
    await fireEvent.change(passwordInput, { target: { value: 'password' } })

    await user.click(button)
    await waitFor(() => { expect(onSubmit.mock.calls).toHaveLength(1) })

})

test('Log in fail', async () => {
    const user = userEvent.setup()
    const onSubmit = jest.fn()

    render(<BrowserRouter><Login onSubmitForTest={onSubmit} /></BrowserRouter>)

    const button = screen.getByText('Login')

    const EmailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')

    fireEvent.change(EmailInput, { target: { value: 'Email' } })

    await user.click(button)
    expect(EmailInput).toBeValid()
    expect(passwordInput).toBeInvalid()

})