function NotificationCard({ notification }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{notification.type}</h3>

      <p>{notification.message}</p>

      <small>{notification.createdAt}</small>

      <div>
        {notification.isRead ? "Read" : "Unread"}
      </div>
    </div>
  );
}

export default NotificationCard;