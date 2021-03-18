import { RepositoryList } from './components/RepositoryList'
import { Counter } from './components/Counter'
import styles from './styles/global.scss'


export function App(){
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}