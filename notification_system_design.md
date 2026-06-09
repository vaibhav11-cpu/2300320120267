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

# Phase 2 - Database Design

## Database

PostgreSQL

## Tables

### Students

| Field      | Type    |
| ---------- | ------- |
| student_id | VARCHAR |
| name       | VARCHAR |
| email      | VARCHAR |

### Notifications

| Field             | Type      |
| ----------------- | --------- |
| notification_id   | UUID      |
| student_id        | VARCHAR   |
| notification_type | VARCHAR   |
| message           | TEXT      |
| is_read           | BOOLEAN   |
| created_at        | TIMESTAMP |

## Relationship

One Student → Many Notifications

## Indexes

* student_id
* notification_type
* is_read
* created_at

## Scalability

* Indexing
* Pagination
* Read Replicas
* Archiving Old Data

## Query

```sql
SELECT *
FROM notifications
WHERE notification_type = 'Placement'
ORDER BY created_at DESC;


### Phase 3 - Query Optimization

## Problem

Fetching placement notifications becomes slow when the notifications table grows large.

## Cause

* Large dataset
* Missing indexes
* Full table scans

## Solution

Create indexes on:

* student_id
* notification_type
* created_at

## Optimized Query


SELECT * FROM notifications
WHERE student_id = 'ST12345'
AND notification_type = 'Placement'
ORDER BY created_at DESC
LIMIT 20;


## Benefits

* Faster filtering
* Reduced query time
* Better scalability

# Stage 4 - High Traffic Handling

## Challenges

* Large number of users
* Frequent notification requests
* High database load

## Solutions

### Caching

Use Redis to store frequently accessed notifications.

### Pagination

Limit records per request.

Example:


GET /api/notifications?page=1&limit=20


### Read Replicas

Use replica databases for read operations.

### Load Balancer

Distribute requests across multiple servers.

## Benefits

* Faster response time
* Reduced database load
* Better scalability
* Improved user experience

# Stage 5 - Bulk Notification Architecture

## Objective

Send notifications to a large number of students efficiently.

## Architecture

```text
Admin
  ↓
Queue
  ↓
Worker
  ↓
Notification Service
  ↓
Students
```

## Process

1. Admin creates notification.
2. Notification is added to a queue.
3. Workers process notifications in batches.
4. Notifications are delivered to students.

## Technologies

* RabbitMQ / Kafka
* Background Workers

## Benefits

* Handles high volume
* Faster delivery
* Better scalability
* Reduced server load
