import {
  TOGGLE_BUTTON_TYPES,
  LOGIN_TYPES,
  SOCIAL_AUTH_DOMAINS,
} from "./Utils/LoginForm";

declare namespace LoginFormProps {
  type toggleButtonType = typeof TOGGLE_BUTTON_TYPES[number];
  type loginType = typeof LOGIN_TYPES[number];
  type socialAuthDomains = typeof SOCIAL_AUTH_DOMAINS[number];

  type loginTypeValues = { [key in loginType]: string };
  type loginTypeContents = { [key in loginType]: JSX.Element };

  //#region Form fields
  interface LoginFields {
    email: string;
    password: string;
  }

  type RegisterFieldNames = "firstName" | "lastName" | "email" | "password";
  type RegisterFields = { [key in RegisterFieldNames]: string };
  interface ForgotFields {
    email: string;
  }
  interface ResetFields {
    confirmPassword: string;
    password: string;
  }
  //#endregion
  interface SubmitBtn {
    onClick: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    children: ReactNode;
    isDisabled?: boolean;
    width?: string;
  }
  interface SocialAuthProps {
    token: string;
  }

  interface IProps {
    type?: loginType;
  }
  interface SigninContext {
    toggleButtonValue: toggleButtonType;
    setToggleButtonValue: Dispatch<SetStateAction<toggleButtonType>>;
    loginType: loginType;
    setLoginType: Dispatch<SetStateAction<loginType>>;
  }
}
export { LoginFormProps };
