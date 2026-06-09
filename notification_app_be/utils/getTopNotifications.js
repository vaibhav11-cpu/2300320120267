function getTopNotifications(notifications, n) {
  const priority = {
    Placement: 3,
    Result: 2,
    Event: 1
  };

  return notifications
    .sort((a, b) => {
      const priorityDiff =
        priority[b.type] - priority[a.type];

      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return (
        new Date(b.createdAt) -
        new Date(a.createdAt)
      );
    })
    .slice(0, n);
}

module.exports = getTopNotifications;