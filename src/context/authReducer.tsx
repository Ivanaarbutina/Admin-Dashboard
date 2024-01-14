import { UserType } from "../datatablesource";

interface AuthState {
  currentUser: UserType | null; // Replace 'User' with the actual user type
}

const AuthReducer = (state: AuthState, action: any) => {
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
