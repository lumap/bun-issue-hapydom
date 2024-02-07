/// <reference lib="dom" />

import { cleanup, render, screen } from '@testing-library/react';
import { expect, test } from "bun:test";
import App from "./App";

test('Home button renders', () => {
    render(
        <App />
    );

    expect(screen.getByText("Home")).toBeTruthy();

    cleanup();
});