import React from 'react';

import { render, screen, fireEvent, getByRole, getAllByRole, getByText } from '@testing-library/react';
import Register from './Register';
import { BrowserRouter } from 'react-router-dom';
beforeEach(() => {
    const showAlert = () => {

    }
    render(<BrowserRouter><Register /></BrowserRouter>);
})
test('print debug info ', () => {
    screen.debug();
})
test("Register page is working", () => {
    const text = screen.getByText('Register');
    expect(text).toBeInTheDocument();
})
test("it has 4 input feilds", () => {
    const input = screen.getAllByRole('textbox')
    expect(input.length).toBe(4);
})