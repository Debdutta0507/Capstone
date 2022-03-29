import React from 'react';

import { render, screen, fireEvent, getByRole, getAllByRole, getByText } from '@testing-library/react';
import ProdLog from './ProdLog';
import { BrowserRouter } from 'react-router-dom';
beforeEach(() => {
    const showAlert = () => {

    }
    render(<BrowserRouter><ProdLog /></BrowserRouter>);
})
test.skip('print debug info ', () => {
    screen.debug();
})
test("table is dispalyed properly", () => {
    const table = screen.getAllByRole('columnheader')
    expect(table.length).toBe(5);
})
test("search button is displayed in Prodlog", () => {
    const search = screen.getAllByRole('textbox')
    expect(search.length).toBe(1);
})
