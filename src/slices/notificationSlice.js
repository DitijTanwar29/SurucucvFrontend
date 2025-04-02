import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector } from "../services/apiConnector";
import { GET_NOTIFICATIONS, MARK_NOTIFICATION_READ } from "../services/apis";

// ✅ Get Notifications - Fetch unread notifications
export const getNotifications = createAsyncThunk(
  "notifications/getNotifications",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiConnector("GET", GET_NOTIFICATIONS);
      console.log("response of notification in slice: ", response);
      return response.data.notifications; // ✅ Ensure this matches API response
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Error fetching notifications."
      );
    }
  }
);

// ✅ Mark Notification as Read
export const updateNotificationStatus = createAsyncThunk(
  "notifications/updateNotificationStatus",
  async (notificationId, { rejectWithValue }) => {
    try {
      console.log("inside , mark read slice function : ", notificationId)
      await apiConnector("PUT", `${MARK_NOTIFICATION_READ}/${notificationId}/read`,{ isRead: true });
      return notificationId; // ✅ Return id for local update
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Error updating notification."
      );
    }
  }
);

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    notificationList: [], // ✅ Default to empty array
    isLoading: false,
    error: null,
  },
  reducers: {
    clearNotifications(state) {
      state.notificationList = []; // ✅ Clear from UI only
    },
  },
  extraReducers: (builder) => {
    // ✅ Fetch Notifications
    builder.addCase(getNotifications.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNotifications.fulfilled, (state, action) => {
      state.isLoading = false;
      state.notificationList = action.payload;
    });
    builder.addCase(getNotifications.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // ✅ Mark Notification as Read
    builder.addCase(updateNotificationStatus.fulfilled, (state, action) => {
      const notificationId = action.payload;
      state.notificationList = state.notificationList.map((notification) =>
        notification._id === notificationId
          ? { ...notification, isRead: true }
          : notification
      );
    });
  },
});

export const { clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
