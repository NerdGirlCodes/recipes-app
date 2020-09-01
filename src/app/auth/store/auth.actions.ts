import { Action } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
export const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
export const SIGNUP_START = '[Auth] Signup Start';
export const LOGOUT = '[Auth] Logout';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const AUTO_LOGIN = '[Auth] Auto Login';

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: {
    email: string,
    password: string
  }) {}
}

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(public payload: {
    email: string,
    id: string,
    token: string,
    expirationDate: Date,
    redirect: boolean
  }) {
  }
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;

  constructor(public payload: string) {}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: {
    email: string,
    password: string
  }) {}

}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export type AuthActions =
  | LoginStart
  | AuthenticateSuccess
  | AuthenticateFail
  | SignupStart
  | Logout
  | ClearError
  | AutoLogin;
