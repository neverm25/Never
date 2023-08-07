declare namespace IRichTextArea {
  export interface IProps {
    id: string;
    name: string;
    label?: string;
    hasLabel: boolean;
    errorMsg?: string;
    hasError?: boolean;
    disabled?: boolean;
    placeholder: string;
    width: string;
    editorState: any;
    minHeight?: number;
    setEditorState: Dispatch<SetStateAction<EditorState>>;
    setTouched?: () => void;
    setFieldValue?: () => void;
    textCount?: number;
    showCount?: boolean;
    textLimit?: number;
  }
  export interface Props {
    o?: {
      width: string;
      minHeight?: number;
      hasError?: boolean;
    };
  }
}

export { IRichTextArea };
