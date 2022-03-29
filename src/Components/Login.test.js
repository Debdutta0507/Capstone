import React from 'react';

import { render, screen, fireEvent, getByRole, getAllByRole, getByText } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
beforeEach(() => {
    const showAlert = () => {

    }
    render(<BrowserRouter><Login /></BrowserRouter>);
})
test('print debug info ', () => {
    screen.debug();
})
test("Login is displayed properly", () => {
    const text = screen.getByText('Login');
    expect(text).toBeInTheDocument();
})
test("Login Button is visible to user", () => {
    const button = screen.getAllByRole('button')
    expect(button.length).toBe(1);
})
test("Login has 2 textbox field", () => {
    const email = screen.getAllByRole('textbox')
    expect(email.length).toBe(2);
})