import * as React from "react";
import styled from "styled-components";

import PostType from "./PostType";
import { theme } from "@Global/Theme";
import { IPostTypes } from "../../PostTypesProps";
import { MyGlobalContext } from "@Global/Components/Layout/Context/LayoutContext";

const PostTypes = ({
  selectedPostTypeName,
  setSelectedPostType,
}: IPostTypes.SelectPostTypesProps) => {
  const MyGlobalContextValue = React.useContext(MyGlobalContext);
  return (
    <PostTypesFrame isHideSidebar={MyGlobalContextValue.isHideSidebar}>
      <PostType
        type={starter}
        selectedPostTypeName={selectedPostTypeName}
        setSelectedPostType={setSelectedPostType}
      />
      <PostType
        type={standard}
        selectedPostTypeName={selectedPostTypeName}
        setSelectedPostType={setSelectedPostType}
        showBestValueTag
      />
      <PostType
        type={pro}
        selectedPostTypeName={selectedPostTypeName}
        setSelectedPostType={setSelectedPostType}
      />
    </PostTypesFrame>
  );
};

export default PostTypes;

const PostTypesFrame = styled.div<{ isHideSidebar: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  @media (min-width: 800px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 0;
    flex-wrap: wrap;
  }

  @media (min-width: 992px) {
    width: ${({ isHideSidebar }) => (!isHideSidebar ? 100 : 80)}%;
    transition: all 0.2s ease-out;
  }
`;

const starter: IPostTypes.PostType = {
  postName: "Starter",
  price: 25,
  description: "Standard listing at xx CPC",
  isSelected: false,
  containerBackgroundColor: theme.gradients.purple30,
  titleColor: theme.gradients.blue150,
  priceColor: theme.gradients.blue150,
  descriptionColor: theme.colors.black90,
};

const standard: IPostTypes.PostType = {
  postName: "Standard",
  price: 40,
  description: "increases CPC to xx + 20%(includes job alerts)",
  isSelected: false,
  containerBackgroundColor: theme.gradients.green20,
  titleColor: theme.gradients.green150,
  priceColor: theme.gradients.green150,
  descriptionColor: theme.colors.black90,
};

const pro: IPostTypes.PostType = {
  postName: "Pro",
  price: 75,
  description:
    "increases CPC to xx + 50% (includes job alerts + direct mailer with only this job)",
  isSelected: false,
  containerBackgroundColor: theme.gradients.yellow30,
  titleColor: theme.gradients.blue150,
  priceColor: theme.gradients.blue150,
  descriptionColor: theme.colors.black90,
};
