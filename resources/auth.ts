export class AuthResult {
  sessionReminderTimeout: number
  sessionTimeout: number
  userDeviceId: number | null
  userId: number
  resetPassword?: boolean
}

export class ProlongSessionResult {
  sessionTimeout: number
}

export class TokenResult {
  token: string
}
