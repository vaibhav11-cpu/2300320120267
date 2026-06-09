# Phase 1 - Notification System Design

## Overview

The system sends notifications to students for:

* Placements
* Results
* Events

Students can view, filter and mark notifications as read.



## Notification Structure


{
  "id": "1",
  "type": "Placement",
  "message": "Amazon hiring drive announced",
  "isRead": false,
  "createdAt": "2026-06-09"
}


## APIs

### Create Notification

POST /api/notifications

### Get Notifications

GET /api/notifications

### Get Unread Notifications

GET /api/notifications/unread

### Mark as Read

PATCH /api/notifications/:id/read

### Mark All as Read

PATCH /api/notifications/read-all


## Real-Time Updates

WebSocket will be used to send notifications instantly without page refresh.


## Logging

All important actions will be logged using the provided logging middleware.

Examples:

* Notification Created
* Notification Viewed
* Notification Marked Read
* Error Handling
