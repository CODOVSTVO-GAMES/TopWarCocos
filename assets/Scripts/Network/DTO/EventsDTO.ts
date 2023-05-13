export class EventsDTO {
  userId: string
  sessionId: number
  events: string

  constructor(userId: string, sessinId: number, events: string) {
    this.userId = userId
    this.sessionId = sessinId
    this.events = events;
  }
}
