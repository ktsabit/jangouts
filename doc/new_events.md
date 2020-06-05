# New Events

The plan is to use the events to notify when something is created, deleted or
updated in this structure:

```
participants = [
  {
    id, local, name
    feeds: [
      { id, screen, name, ignored, video, audio, speaking, picture }
    ]
  }
]
```

Possible events:

```
eventsService.roomEvent('createParticipant', { id, local, name});
eventsService.roomEvent('createFeed', { participantId, id, screen, name, ignored, video, audio, speaking, picture });
eventsService.roomEvent('destroyFeed', { id });
eventsService.roomEvent('destroyPartipant', { id });
eventsService.roomEvent('muteFeed', { id, requesterId })
eventsService.roomEvent('muteFeed', { id, participantsCount })
eventsService.roomEvent('updateFeed', { id, name, ignored, video, audio, speaking, picture });
```
