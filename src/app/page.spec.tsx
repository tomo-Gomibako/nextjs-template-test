import { render, screen } from '@testing-library/react'
import 'cross-fetch/polyfill'
import { act } from 'react-dom/test-utils'
import Page from './page'

it('App Router: Works with Server Components', async () => {
  await act(async () => {
    render(await Page())
  })

  expect(screen.getByText('pong')).toBeTruthy()
})
