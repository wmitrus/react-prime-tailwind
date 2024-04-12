// import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
// import { getRoutesConfig } from './../RoutesConfig';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders Home Page contains heading with value "Home"', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    // Act
    // Expect
    expect(screen.getByRole('heading', { level: 1, name: /Home/i }));
  });
});
