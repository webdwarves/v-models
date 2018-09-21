class AuthResult {
  sessionReminderTimeout: number;
  sessionTimeout: number;
  userDeviceId: number | null;
  userId: number;
  resetPassword?: boolean;
}

class ProlongSessionResult {
  sessionTimeout: number;
}

class TokenResult {
  token: string;
}
