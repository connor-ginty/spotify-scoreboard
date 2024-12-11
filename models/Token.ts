
export class Token {
  public accessToken: string
  private tokenType: string
  private expiresIn: number // time in seconds
  private retrievalTime: string
  public expirationTime: string

  constructor(accessToken: string, tokenType: string, expiresIn: number) {
    this.accessToken = accessToken
    this.tokenType = tokenType
    this.expiresIn = expiresIn
    this.retrievalTime = this.generateRetrievalTime()
    this.expirationTime = this.generateExpirationTime()
  }

  public getAccessToken() {
    return this.accessToken
  }

  public getRetrievalTime() {
    return this.retrievalTime
  }

  public setExpirationTime(value: string) {
    this.expirationTime = value
  }

  private generateRetrievalTime(): string {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0') // Month is 0-based
    const year = now.getFullYear()

    return `${year}-${month}-${day} ${hours}:${minutes}`
  }

  private generateExpirationTime(): string {
    const now = new Date()
    const minutesUntilExpired: number = this.expiresIn / 60
    now.setMinutes(now.getMinutes() + minutesUntilExpired)

    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = now.getFullYear()

    return `${year}-${month}-${day} ${hours}:${minutes}`
  }

  public isExpired(): boolean {
    const currentDateTime = this.retrievalTime
    const futureDateTime = this.expirationTime

    const currentDate = new Date(currentDateTime.replace(' ', 'T'))
    const futureDate = new Date(futureDateTime.replace(' ', 'T'))

    return currentDate >= futureDate
  }

}