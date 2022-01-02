import { FC } from 'react'
import { css } from '@emotion/react'

const DefaultLayout: FC<{}> = ({ children }) => {
  return (
    <div>
      <header />
      <main
        css={css`
          width: 100%;
          padding: 2rem 0;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        `}
      >
        {children}
      </main>
      <footer />
    </div>
  )
}

export default DefaultLayout
