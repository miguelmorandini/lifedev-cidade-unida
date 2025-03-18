import React from 'react'
import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [user, setUser] = useState({ name: 'Miguel', age: 19 })
    return (
        <nav className='styles.navbar'>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <button onClick={() => setUser((prevUser) => ({ ...prevUser, idade: prevUser.idade + 1 }))}>Alterar Idade</button>
        </nav>
    )
}

export default Navbar