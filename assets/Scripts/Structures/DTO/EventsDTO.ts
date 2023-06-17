export class EventsDTO {
  accountId: string
  sessionId: number
  events: string

  constructor(accountId: string, sessinId: number, events: string) {
    this.accountId = accountId
    this.sessionId = sessinId
    this.events = events;
  }
}
