import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2YWliaGF2Z2hnb3lhbDU2N0BnbWFpbC5jb20iLCJleHAiOjE3ODA5ODYyMTksImlhdCI6MTc4MDk4NTMxOSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjRkZTgzYTY2LTJjOTMtNGFjNS1hMjBkLWEwMTRkNTk3Yzk5YiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InZhaWJoYXYgZ295YWwiLCJzdWIiOiI0ZTBkNTFmMC1hNjMyLTQ4ZmQtODdiMC03MTg3NDUyNjZjNjIifSwiZW1haWwiOiJ2YWliaGF2Z2hnb3lhbDU2N0BnbWFpbC5jb20iLCJuYW1lIjoidmFpYmhhdiBnb3lhbCIsInJvbGxObyI6IjIzMDAzMjAxMjAyNjciLCJhY2Nlc3NDb2RlIjoiY1h1cWh0IiwiY2xpZW50SUQiOiI0ZTBkNTFmMC1hNjMyLTQ4ZmQtODdiMC03MTg3NDUyNjZjNjIiLCJjbGllbnRTZWNyZXQiOiJrZVV0bUdhalFwblZuY0RjIn0.01gqNkb2PkeVQRittZy1usa8_8KUjSB4OswH1V3iYrA";

export const getNotifications = async () => {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    return response.data.notifications;
  } catch (error) {
    console.error(error);
    return [];
  }
};