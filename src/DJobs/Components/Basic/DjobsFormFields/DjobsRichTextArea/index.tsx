import React, { useState } from "react";
import "draft-js/dist/Draft.css";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

import {
  DJobsInputStyledComponents,
  DjobsInputFieldCommonStyles,
} from "../Common/InputStyles";
import { DjobsCommonFieldComponents } from "../Common/Components";
import styled from "styled-components";
import { djobsTheme } from "@DJobs/Theme";
import { DjobsFormFieldsProps } from "../DjobsFormFields";
import { getHTMLContentFromEditorState } from "@Helpers/Formik/richTextEditor.helpers";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then(mod => mod.Editor),
  { ssr: false }
);

export const DjobsRichTextArea = ({
  name,
  label,
  hasError = false,
  error,
  placeholder = "Enter the text",
  width = "100%",
  editorState,
  setEditorState,
  setTouched,
  setFieldValue,
  minHeight = 300,
  textCount = 0,
  showCount = false,
  textLimit,
  value,
  isRequired,
  variant = "default",
  idPrefix,
  description,
}: DjobsFormFieldsProps.RichTextArea) => {
  const [focus, setFocus] = useState(false);

  const onEditorStateChange = (EditorstateFromProps: EditorState) => {
    setEditorState(EditorstateFromProps);
  };
  const ContainerForVariant: {
    [Key in DjobsFormFieldsProps.InputVariant]: any;
  } = {
    Questionairre: QuestionairreContainer,
    WhiteBackground: WhiteContainer,
    default: DefaultContainer,
  };
  const Container = ContainerForVariant[variant];

  const editorLabels = {
    "components.controls.list.unordered": "Bullets",
    "components.controls.list.ordered": "Numbers",
  };
  return (
    <div>
      <Container {...{ containerWidth: width, minHeight, hasError, value }}>
        <DJobsInputStyledComponents.LabelWrapper>
          {label && <DjobsCommonFieldComponents.InputLabel value={label} />}
          {isRequired && (
            <DjobsCommonFieldComponents.RequiredLabel value="Required" />
          )}
        </DJobsInputStyledComponents.LabelWrapper>
        <DJobsInputStyledComponents.FieldWrapper id={idPrefix + name}>
          <Editor
            onChange={setFieldValue}
            placeholder={
              getHTMLContentFromEditorState(editorState).startsWith("<p")
                ? placeholder
                : ""
            }
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
              options: ["inline", "list", "textAlign"],
              inline: {
                inDropdown: false,
                options: ["bold", "italic"],
                bold: {
                  icon: "/static/images/RichTextAreaToolbarIcons/bold.svg",
                  className: undefined,
                },
                italic: {
                  icon: "/static/images/RichTextAreaToolbarIcons/italic.svg",
                  className: undefined,
                },
              },
              list: {
                inDropdown: false,
                options: ["unordered", "ordered"],
                unordered: {
                  icon: "/static/images/RichTextAreaToolbarIcons/unordered.svg",
                  className: undefined,
                },
                ordered: {
                  icon: "/static/images/RichTextAreaToolbarIcons/ordered.svg",
                  className: undefined,
                },
              },
              textAlign: {
                inDropdown: false,
                options: ["left", "center", "right", "justify"],
                left: {
                  icon: "/static/images/RichTextAreaToolbarIcons/left.svg",
                  className: undefined,
                },
                center: {
                  icon: "/static/images/RichTextAreaToolbarIcons/center.svg",
                  className: undefined,
                },
                right: {
                  icon: "/static/images/RichTextAreaToolbarIcons/right.svg",
                  className: undefined,
                },
                justify: {
                  icon: "/static/images/RichTextAreaToolbarIcons/justify.svg",
                  className: undefined,
                },
              },
            }}
            localization={{ locale: "en", translations: editorLabels }}
          />
          {description && (
            <DjobsCommonFieldComponents.Description value={description} />
          )}
          <ErrorLabelWrapper>
            {hasError && (
              <DjobsCommonFieldComponents.ErrorLabel value={error} />
            )}
            {showCount && (
              <TextCount>{`${textCount} / ${textLimit}`}</TextCount>
            )}
          </ErrorLabelWrapper>
        </DJobsInputStyledComponents.FieldWrapper>
      </Container>
    </div>
  );
};

interface RichTextAreaWrapperProps {
  minHeight?: number;
  hasError?: boolean;
  value: string;
  containerWidth: string;
}
const DefaultContainer = styled.div<RichTextAreaWrapperProps>`
  .description-editor {
    padding: 15px 12px;
    position: relative;
    display: block;
    line-height: 28px;
    height: auto !important;
    min-height: 20em;
    ${DjobsInputFieldCommonStyles.DefaultInputField};
    ${DjobsInputFieldCommonStyles.DefaultInputFieldText};
    width: auto !important;

    @media (min-width: 768px) {
      min-width: 400px;
    }
  }
  .description-editor:hover {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldHover};
  }
  .description-editor--focus {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldFocus};
  }
  .description-editor--focus.description-editor:hover {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldFocus};
  }

  .rdw-editor-main {
    min-height: ${props => `${props.minHeight}px !important`};
    max-height: ${props => `${props.minHeight}px !important`};
    height: 100%;
  }
  .public-DraftEditorPlaceholder-inner {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldPlaceholder};
  }

  /* Toolbar styling */
  .rdw-editor-toolbar {
    display: flex;
    align-items: center;
    box-shadow: ${djobsTheme.effects.boxShadow};
    border-radius: 6px;
    padding: 8px;

    @media (min-width: 768px) {
      padding: 8px 16px;
      margin-top: 10px;
    }
  }
  .rdw-dropdown-wrapper {
    border: 0;
    &:hover {
      box-shadow: none;
    }
  }
  .rdw-list-wrapper {
    border: 0;
    margin: 0;
    &:hover {
      box-shadow: none;
    }
  }
  .rdw-link-wrapper {
    border: 0;
    margin: 0;
    &:hover {
      box-shadow: none;
    }
  }
  .rdw-option-wrapper {
    border: 0;
    margin: 0 8px;
    &:hover {
      box-shadow: none;
    }
  }
  .rdw-inline-wrapper {
    margin-bottom: 0;
  }
  .rdw-image-wrapper {
    margin-bottom: 0;
  }
  .rdw-text-align-wrapper {
    margin-bottom: 0;
  }
`;
const WhiteContainer = styled(DefaultContainer)`
  .description-editor {
    ${DjobsInputFieldCommonStyles.WhiteInputField};
  }
`;
const ErrorLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
`;
const TextCount = styled.div`
  text-align: right;
  color: ${djobsTheme.colors.black50};
`;
const QuestionairreContainer = styled(DefaultContainer)`
  ${DjobsInputFieldCommonStyles.QuestionairreInputContainer};
  .description-editor {
    ${DjobsInputFieldCommonStyles.QuestionairreInputField};
  }
`;
