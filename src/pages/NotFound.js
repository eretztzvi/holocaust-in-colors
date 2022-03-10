import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const naviagte = useNavigate()

    const print = () => {
        naviagte('/')
    }

    return (
        <div>
            <h1>404</h1>
            <button onClick={print}>print</button>
        </div>
    )
}
