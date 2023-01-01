import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { social, links } from '../data';
import {useGlobalContext} from '../context'

function Sidebar() {

    const{isSidebarOpen, closeSidebar} = useGlobalContext();
    return (
        <div className={`${isSidebarOpen ? 'sidebar show--sidebar' : 'sidebar'}`}>
            <aside className='sidebar--header'>
                <h1>Side Bar Menu</h1>
                <button className='sidebar--closebtn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </aside>
            <ul className='sidebar--links'>
                {links.map((link) => {
                    const{id,url,text,icon} = link;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className='social--icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
        </div>
    )
}

export default Sidebar
