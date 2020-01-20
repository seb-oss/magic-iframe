import { newE2EPage } from '@stencil/core/testing';

describe('seb-magic-iframe', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<seb-magic-iframe></seb-magic-iframe>');

    const element = await page.find('seb-magic-iframe');
    expect(element).toHaveClass('hydrated');
  });
});
