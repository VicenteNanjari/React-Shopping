import { Filters } from './Filters.jsx'

export function Header( { changeFliters } ) {
    return (
        <header className='header'>
            <h1 className='header-title'>Ecomerce</h1>
            <Filters onChange={changeFliters}/>
        </header>
    )
}