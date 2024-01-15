import { UserType } from "../datatablesource";

interface AuthState {
  currentUser: UserType | null; // Replace 'User' with the actual user type
}

export interface AuthAction {
  type: string;
  payload?: any;
}

const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        currentUser: null,
      };
    }

    default:
      return state;
  }
};

export default AuthReducer;
