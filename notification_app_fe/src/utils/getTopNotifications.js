export function getTopNotifications(notifications, n) {
  const priority = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  return [...notifications]
    .sort((a, b) => {
      const p = priority[b.type] - priority[a.type];

      if (p !== 0) return p;

      return new Date(b.createdAt) - new Date(a.createdAt);
    })
    .slice(0, n);
}