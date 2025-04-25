import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotifications,
  updateNotificationStatus,
  clearNotifications,
} from "../../../slices/notificationSlice";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaBell } from "react-icons/fa";

const NotificationDropdown = () => {
  const dispatch = useDispatch();
  const { notificationList = [], isLoading = false } =
    useSelector((state) => state.notifications || {});

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [readNotifications, setReadNotifications] = useState(
    new Set(JSON.parse(localStorage.getItem("readNotifications")) || [])
  );

  const dropdownRef = useRef(null);

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  // ✅ Save read notifications to localStorage
  useEffect(() => {
    localStorage.setItem(
      "readNotifications",
      JSON.stringify([...readNotifications])
    );
  }, [readNotifications]);

  // ✅ Toggle Dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // ✅ Mark notification as read with animation
  const handleMarkAsRead = (id) => {
    setReadNotifications((prev) => new Set([...prev, id]));
    setTimeout(() => {
      dispatch(updateNotificationStatus(id)); // Redux action to mark as read
    }, 500); // Wait for animation before dispatching
  };

  // ✅ Clear all notifications
  const handleClearNotifications = () => {
    dispatch(clearNotifications());
    setReadNotifications(new Set()); // Clear localStorage read data
    localStorage.removeItem("readNotifications");
    setIsDropdownOpen(false);
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative mt-14 flex justify-end pr-4">
      {/* ✅ Notification Button with Bell Icon */}
      <button
        onClick={toggleDropdown}
        className="relative bg-richblack-100 hover:bg-richblack-200 text-white px-5 py-2 rounded-lg shadow-lg transition duration-200 flex items-center"
      >
        
        <FaBell className="mr-2 " />
        Notifications{" "}
        {notificationList?.length > 0 && (
          <span className="bg-red-500 text-white rounded-full px-2 text-xs absolute -top-1 -right-1">
            {notificationList.filter(
              (n) => !n.isRead && !readNotifications.has(n._id)
            ).length}
          </span>
        )}
      </button>

      {/* ✅ Dropdown Content */}
      {isDropdownOpen && (
        <div className="dropdown-content absolute right-0 mt-12 w-80 bg-white shadow-lg rounded-lg max-h-80 overflow-y-auto border border-gray-200">
          {isLoading ? (
            <p className="p-4 text-center text-gray-600">
              Loading notifications...
            </p>
          ) : notificationList.length === 0 ? (
            <p className="p-4 text-center text-gray-600">
              No notifications found.
            </p>
          ) : (
            <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {notificationList.map((notification) => (
                <div
                  key={notification._id}
                  className={`p-4 border-b flex items-center justify-between transition duration-500 ${
                    readNotifications.has(notification._id) || notification.isRead
                      ? "opacity-50 bg-gray-50 hover:bg-gray-100"
                      : "bg-white hover:bg-blue-50"
                  }`}
                >
                  {/* ✅ Notification Link */}
                  <Link
                    to={`/admin/notifications/${notification._id}`}
                    className="block text-sm font-medium text-gray-800 hover:text-blue-600"
                  >
                    {notification.message}
                  </Link>
                  <span className="text-xs text-gray-500">
                    {new Date(notification.createdAt).toLocaleString()}
                  </span>

                  {/* ✅ Mark as Read Button (Icon) */}
                  {!notification.isRead &&
                    !readNotifications.has(notification._id) && (
                      <button
                        onClick={() => handleMarkAsRead(notification._id)}
                        className="text-green-500 hover:text-green-600 transition transform hover:scale-110 ml-2"
                      >
                        <FaCheckCircle size={20} />
                      </button>
                    )}
                </div>
              ))}
            </div>
          )}

          {/* ✅ Clear All Button */}
          {notificationList.length > 0 && (
            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-b-lg transition duration-200"
              onClick={handleClearNotifications}
            >
              Clear All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
