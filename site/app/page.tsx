import { Stack, Switch } from 'design-system/components'
import styles from './page.module.css'

export default function App() {
  return (
    <Stack padding="small">
      <Switch className={styles.padding}>Switch Value</Switch>
    </Stack>
  )
}
