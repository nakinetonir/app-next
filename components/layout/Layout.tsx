
import { FC, ReactNode } from 'react'

import styles from './Layout.module.css'

interface Props {
  children:ReactNode
}

export const Layout: FC<Props>= ({ children }) => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <h3>Titulo</h3>
                { children }
        </main>
    </div>
  )
}
