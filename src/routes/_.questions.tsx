import { useContext } from 'react'
import { Outlet } from '@remix-run/react'
import { useCommonStores } from 'src/common/hooks/useCommonStores'
import { isModuleSupported, MODULE } from 'src/modules'
import { EnvironmentContext } from 'src/pages/common/EnvironmentContext'
import Main from 'src/pages/common/Layout/Main'
import {
  DiscussionStore,
  DiscussionStoreContext,
} from 'src/stores/Discussions/discussions.store'

export async function loader() {
  return null
}

// This is a Layout file, it will render for all questions routes
export default function Index() {
  const env = useContext(EnvironmentContext)
  const rootStore = useCommonStores()

  if (!isModuleSupported(env?.VITE_SUPPORTED_MODULES || '', MODULE.QUESTION)) {
    return null
  }

  return (
    <Main style={{ flex: 1 }}>
      <DiscussionStoreContext.Provider value={new DiscussionStore(rootStore)}>
        <Outlet />
      </DiscussionStoreContext.Provider>
    </Main>
  )
}
