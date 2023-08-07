declare namespace TextAreaProps {
  export type IProps = {
    name: string;
    hasLabel: boolean;
    label?: string;
    value: string;
    placeholder?: string;
    disabled?: boolean;
    onChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    hasError: boolean;
    errorMsg?: string;
    isQuestionairre?: boolean;
    showCount?: boolean;
    maxLength?: number;
    minRows?: number;
    maxRows?: number;
  };
}
export { TextAreaProps };
