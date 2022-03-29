import React from 'react';

import { render, screen, fireEvent, getByRole, getAllByRole, getByText } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

beforeEach(() => {
    const showAlert = () => {

    }
    render(<BrowserRouter><Home /></BrowserRouter>);
})
test('print debug info ', () => {
    screen.debug();
})
test("Home page has Product inventory", () => {
    const text = screen.getByText('Products Inventory Application');
    expect(text).toBeInTheDocument();
})
test("header working properly", () => {
    const text = screen.getAllByRole("link");
    expect(text.length).toBe(1);
})
test("images are displayed properly", () => {
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument();
})
test("Footer is displayed properly", () => {
    const text = screen.getByText('Copyright© to (Mansoor and Debdutta) Registered®')
    expect(text).toBeInTheDocument();
})
test("Textbox is displayed", () => {
    const box = screen.getByRole("textbox")
    expect(box).toBeInTheDocument();
})