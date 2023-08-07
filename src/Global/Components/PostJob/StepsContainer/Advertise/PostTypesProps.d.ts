declare namespace IPostTypes {
  export type PostName = "Standard" | "Starter" | "Pro";

  type PostType = {
    postName: PostName;
    titleColor: string;

    price: number;
    priceColor: string;

    description: string;
    descriptionColor: string;

    containerBackgroundColor: string;
    isSelected: boolean;
  };

  export interface SelectPostTypesProps {
    selectedPostTypeName: PostName;
    setSelectedPostType: Dispatch<SetStateAction<PostName>>;
  }

  export type AdditionContent = {
    title: string;
    explanation: string;
  };
  export interface AdditionProps {
    checked: boolean;
    setChecked: Dispatch<SetStateAction<boolean>>;
    title: string;
    explanation: string;
  }

  export interface PostTypeProps {
    type: PostType;
    selectedPostTypeName: PostName;
    setSelectedPostType: Dispatch<SetStateAction<PostName>>;
    showBestValueTag?: boolean;
  }

  export type ChooseButtonProps = {
    postName: PostName;
    selectedPostTypeName: PostName;
    setSelectedPostType: Dispatch<SetStateAction<PostName>>;
    children?: any;
  };
}

export { IPostTypes };
