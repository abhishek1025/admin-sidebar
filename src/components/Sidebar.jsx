import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [activePage, setActivePage] = useState('home')

    const chanegActivePage = (pageName) => setActivePage(pageName)

    return (
        <div className="navigation">
            <ul>
                <li className={`${activePage === "home" ? 'active' : ""} list`} onClick={() => chanegActivePage("home")}>
                    <Link href="#">
                        <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span className="title">Home</span>
                    </Link>
                </li>
                <li className={`${activePage === "profile" ? 'active' : ""} list`} onClick={() => chanegActivePage("profile")}>
                    <Link href="#">
                        <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span className="title">Profile</span>
                    </Link>
                </li>
                <li className={`${activePage === "message" ? 'active' : ""} list`} onClick={() => chanegActivePage("message")}>
                    <Link href="#">
                        <span className="icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
                        <span className="title">Messages</span>
                    </Link>
                </li>
                <li className={`${activePage === "settings" ? 'active' : ""} list`} onClick={() => chanegActivePage("settings")}>
                    <Link href="#">
                        <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span className="title">Settings</span>
                    </Link>
                </li>
                <li className={`${activePage === "help" ? 'active' : ""} list`} onClick={() => chanegActivePage("help")}>
                    <Link href="#">
                        <span className="icon"><ion-icon name="help-outline"></ion-icon></span>
                        <span className="title">Help</span>
                    </Link>
                </li>

                <li className={`${activePage === "password" ? 'active' : ""} list`} onClick={() => chanegActivePage("password")}>
                    <Link href="#">
                        <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <span className="title">Password</span>
                    </Link>
                </li>
                <li className={`${activePage === "signout" ? 'active' : ""} list`} onClick={() => chanegActivePage("signout")}>
                    <Link href="#">
                        <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span className="title">Sign Out</span>
                    </Link>
                </li>


            </ul>
        </div>

    )
}

export default Sidebar