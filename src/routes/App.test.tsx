/** @license
 * Copyright (c) [EXAMPLE]
 *
 */
import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('should test app title visible', () => {
    render(<App />);

    expect(screen.getByText('example project!')).toBeVisible();
  });
});
