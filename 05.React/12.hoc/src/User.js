import React from 'react'

const User = ({user}) => {
    return (
        <div>
            {/* CON ESTE RENDER VAMOS A RENDERIZAR UN USUARIO EN ESPECIFICO */}
        <h2>
            {user.name}
            {user.username}
            {user.address.street}
            {user.phone}
            {user.website}
        </h2>
        <span>
            {user.email}
        </span>
        </div>
    )
}

export default User
