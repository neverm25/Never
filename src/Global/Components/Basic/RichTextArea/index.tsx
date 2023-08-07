import * as React from "react";
import "draft-js/dist/Draft.css";
import { IRichTextArea } from "./RichTextArea";
import { Label } from "@Styled/Global/GlobalStyled";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import {
  ErrorMsg,
  RichTextAreaWrapper,
  TextCount,
} from "./Styles/RichTextAreaStyles";
const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then(mod => mod.Editor),
  { ssr: false }
);

const RichTextArea: React.FunctionComponent<IRichTextArea.IProps> = ({
  id,
  label,
  hasLabel,
  errorMsg = "Invalid input",
  hasError = false,
  placeholder = "e.g. John Doe",
  width = "100%",
  editorState,
  setEditorState,
  setTouched,
  setFieldValue,
  minHeight = 300,
  textCount = 0,
  showCount = false,
  textLimit,
}): JSX.Element => {
  //
  const [focus, setFocus] = React.useState(false);

  const onEditorStateChange = (EditorstateFromProps: EditorState) => {
    setEditorState(EditorstateFromProps);
  };
  return (
    <React.Fragment>
      <RichTextAreaWrapper
        o={{ width: width, minHeight: minHeight, hasError: hasError }}
      >
        {hasLabel ? <Label htmlFor={id}>{label}</Label> : null}
        <Editor
          onChange={setFieldValue}
          placeholder={placeholder}
          wrapperClassName={
            focus
              ? "description-editor description-editor--focus"
              : "description-editor"
          }
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          onFocus={event => {
            event.preventDefault();
            setFocus(true);
          }}
          stripPastedStyles={true}
          onBlur={event => {
            event.preventDefault();
            if (setTouched) setTouched();
            if (setFieldValue) setFieldValue();
            setFocus(false);
          }}
          toolbar={{
            options: ["inline", "list", "link"],
            inline: {
              inDropdown: true,
              options: ["bold", "italic", "underline", "strikethrough"],
            },
          }}
        />
      </RichTextAreaWrapper>
      {showCount && <TextCount>{`${textCount} / ${textLimit}`}</TextCount>}
      {hasError ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
    </React.Fragment>
  );
};

export default RichTextArea;
