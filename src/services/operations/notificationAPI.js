import { apiConnector } from "../apiConnector";
import { GET_NOTIFICATIONS, MARK_NOTIFICATION_READ, CLEAR_NOTIFICATIONS } from "../apis"

// Fetch notifications
export const fetchNotifications = async () => {
  return await apiConnector("GET", GET_NOTIFICATIONS);
};

// Mark notification as read
export const markNotificationAsRead = async (id) => {
  return await apiConnector("PUT", MARK_NOTIFICATION_READ,{id});
};
