import React, { useState } from "react";
import RichTextArea from "@Global/Components/Basic/RichTextArea/index";
import { storiesOf } from "@storybook/react";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
type ChildrenType = (
  editorState: EditorState,
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
) => JSX.Element;

storiesOf("Components/Basic/RichTextArea", module).add(
  "controlled example",
  () => {
    function Parent({ children }: { children: ChildrenType }) {
      let editorStateContent = EditorState.createEmpty();
      if (typeof window !== "undefined") {
        const contentBlock = htmlToDraft("");
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );

        editorStateContent = EditorState.createWithContent(contentState);
      }

      const [editorState, setEditorState] = useState(editorStateContent);

      const converted = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );

      // TODO - This gets added to a form submithandler for post calls:
      alert(converted);

      return <div>{children(editorState, setEditorState)}</div>;
    }

    return (
      <Parent>
        {(editorState, setEditorState) => (
          <RichTextArea
            id="description"
            name="description"
            hasLabel={true}
            label="Label"
            hasError={false}
            width={"100%"}
            placeholder="Enter text here..."
            editorState={editorState}
            setEditorState={setEditorState}
          />
        )}
      </Parent>
    );
  }
);
