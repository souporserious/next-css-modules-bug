import * as React from 'react'
import { Stack } from '../stack'
import styles from './switch.module.css'

export function Switch({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <Stack
      className={className ? `${className} ${styles.Switch}` : styles.Switch}
    >
      {children}
    </Stack>
  )
}
