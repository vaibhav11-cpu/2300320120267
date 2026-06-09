import { useEffect, useState } from "react";
import NotificationCard from "./components/NotificationCard";
import { getNotifications } from "./services/notificationService";
import { getTopNotifications } from "./utils/getTopNotifications";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const data = await getNotifications();
    setNotifications(data);
  }

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter(
          (n) => n.type === filter
        );

  const priorityNotifications =
    getTopNotifications(notifications, 3);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notification Platform</h1>

      <h2>Priority Notifications</h2>

      {priorityNotifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}

      <hr />

      <select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
      >
        <option>All</option>
        <option>Placement</option>
        <option>Result</option>
        <option>Event</option>
      </select>

      <br />
      <br />

      {filtered.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default App;