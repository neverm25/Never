import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { InputHelperProps } from "./formikInputFields.props";

export const getInitialContentState = (): EditorState => {
  return EditorState.createEmpty();
};
export const getInitialContentState_WithHTML = (htmlContent: string) => {
  if (typeof window === "undefined") {
    return EditorState.createEmpty();
  }
  const htmlToDraft = require("html-to-draftjs").default;
  const contentBlock = htmlToDraft(htmlContent);
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );
  return EditorState.createWithContent(contentState);
};

export const getPlainTextFromEditorState = (
  editorState: EditorState
): string => {
  return editorState.getCurrentContent().getPlainText();
};

export const getHTMLContentFromEditorState = (
  editorState: EditorState
): string => {
  const rawcontent = convertToRaw(editorState.getCurrentContent());
  return draftToHtml(rawcontent);
};

export const getRichTextAreaHasError = (
  props: InputHelperProps.RichTextAreaHasErrorProps
) => {
  const { formik, fieldName, editorState, textCount, textLimit } = props;
  const touched = formik.touched[fieldName];

  const value = getPlainTextFromEditorState(editorState);
  const isValueEntered = value.length > 0;

  const hasError = touched && !isValueEntered;
  return textLimit ? textCount > textLimit || hasError : hasError;
};

export const getRichTextAreaMinHeight = () =>
  typeof window === "undefined" || window.innerWidth > 800 ? 470 : 300;
