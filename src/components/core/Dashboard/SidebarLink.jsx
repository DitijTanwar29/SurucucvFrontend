import * as Icons from "react-icons/vsc"
import { NavLink, matchPath, useLocation } from "react-router-dom"

// import { resetCourseState } from "../../../slices/courseSlice"

export default function SidebarLink({ link, iconName }) {
  const Icon = Icons[iconName]
  const location = useLocation()

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <NavLink
      to={link.path}
      className={`relative no-underline px-8 py-2 text-sm font-medium hover:font-bold hover:transition-transform hover:scale-105 ${
        matchRoute(link.path)
          ? "bg-white/20 text-purple-400 hover:text-purple-500 border-2 border-black"
          : "bg-opacity-0 text-white"
      } transition-all duration-75`}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[0.15rem] bg-purple-700 ${
          matchRoute(link.path) ? "opacity-100" : "opacity-0"
        }`}
      ></span>
      <div className="flex items-center gap-x-2">
        {/* Icon Goes Here */}
        <Icon className="text-lg" />
        <span>{link.name}</span>
      </div>
    </NavLink>
  )
}
