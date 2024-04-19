import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill , BsFillEnvelopeFill, BsFileText,BsFilePost, BsBriefcaseFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand 'style={{color:'white'}} >
                <BsCart3  className='icon_header' style={{color:'white'}}/>  SurucuCV
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/dashboard/my-profile">
                    <BsGrid1X2Fill className='icon'/> My Profile
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/contact">
                    <BsFillArchiveFill className='icon'/> Contact
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="/dashboard/service">
                    <BsFillArchiveFill className='icon'/>  Services
                </a>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/notifications">
                    <BsFillGrid3X3GapFill className='icon'/>  Notification
                </Link>
            </li>
            <li className='sidebar-list-item'>
          <Link to="/email">
            <BsFillEnvelopeFill className='icon' /> Email
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/pages">
            <BsFileText className='icon' /> Pages
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link href="/post-job">
            <BsFilePost className='icon' /> Job
          </Link>
        </li>
            <li className='sidebar-list-item'>
                <Link href="/addmanage">
                    <BsPeopleFill className='icon'/> Advertisement
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link href="/faq">
                    <BsListCheck className='icon'/> FAQs
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link href="/report">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </Link>
            </li>
            <li className='sidebar-list-item'>
          <Link href="/user">
            <BsPeopleFill className='icon' /> User
          </Link>
          <ul className="sub-menu">
            <li><Link href="/user">Profile</Link></li>
            <li><Link href="/post-job">Post Job</Link></li>
          </ul>
        </li>
        <li className='sidebar-list-item'>
          <Link href="/company">
            <BsBriefcaseFill className='icon' /> Company
          </Link>
          <ul className="sub-menu">
            <li><Link href="/post-job">Post Job</Link></li>
            <li><a href="/company">Company Dashboard</a></li>
          </ul>
        </li>
            <li className='sidebar-list-item'>
                <Link href="/setting">
                    <BsFillGearFill className='icon'/> Setting
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar