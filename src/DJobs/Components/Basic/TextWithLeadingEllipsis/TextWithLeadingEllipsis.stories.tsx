import React from "react";
import { Meta, Story } from "@storybook/react";
import { TextWithLeadingEllipsis } from "@DJobs/Components/Basic";
import { TextWithLeadingEllipsisProps } from "@DJobs/Components/Basic/TextWithLeadingEllipsis/TextWithLeadingEllipsis";
import { djobsText, djobsTheme } from "@DJobs/Theme";

const meta: Meta = {
  title: "Components/DJobs/TextWithLeadingEllipsis",
  component: TextWithLeadingEllipsis,
  argTypes: {
    styleName: {
      control: { type: "select" },
      options: Object.keys(djobsText),
      defaultValue: "djBodyRegular",
    },
    color: {
      control: { type: "select" },
      options: Object.keys(djobsTheme.colors),
      defaultValue: "black100",
    },
    content: { control: "text", defaultValue: "lorem ispum dolar" },
    maxLineLength: { control: "number", defaultValue: 1 },
    width: { control: "text", defaultValue: "100%" },
  },
};
export default meta;

const Template: Story<TextWithLeadingEllipsisProps.Props> = args => {
  return <TextWithLeadingEllipsis {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  styleName: "djBodyRegular",
  color: "black100",
  content: `We are currently looking for a Digital Design Intern with the relevant degree/diploma to join our awesome team in Cape Town. You will be involved in the creation and execution of effective design campaigns and will need to manage a number of projects within tight deadlines. Please ensure that you meet the requirements as The ideal candidate needs to be self-motivated, thrive under pressure, have a keen eye for detail and have the ability to multitask. This is a great opportunity to learn and grow quickly in what is a dynamic and flexible company. It is ideal for a creative and driven individual who is passionate about fashion, brands and web design We are currently looking for a Digital Design Intern with the relevant degree/diploma to join our awesome team in Cape Town. You will be involved in the creation and execution of effective design campaigns and will need to manage a number of projects within tight deadlines. Please ensure that you meet the requirements as The ideal candidate needs to be self-motivated, thrive under pressure, have a keen eye for detail and have the ability to multitask.This is a great opportunity to learn and grow quickly in what is a dynamic and flexible company. It is ideal for a creative and driven individual who is passionate about fashion, brands and web design. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi, doloremque rem non enim tenetur natus rerum. Veniam delectus ipsum repudiandae dolorem minus tempora, non hic, aut et minima, quasi omnis distinctio sunt inventore blanditiis. Labore consequuntur voluptate et quaerat quae cumque aspernatur exercitationem ad, nihil minus nisi ducimus explicabo, id hic, necessitatibus commodi eveniet ipsum unde veniam veritatis ex aut! Dolorum repellendus in, ab sunt placeat voluptatum dolor dignissimos, incidunt modi ea dolorem! Maiores ipsam sit sequi tempore est accusantium ea qui eius ullam alias esse laborum ab, culpa nostrum nesciunt tenetur corrupti distinctio obcaecati? Cum voluptatibus ullam consequuntur?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi, doloremque rem non enim tenetur natus rerum. Veniam delectus ipsum repudiandae dolorem minus tempora, non hic, aut et minima, quasi omnis distinctio sunt inventore blanditiis. Labore consequuntur voluptate et quaerat quae cumque aspernatur exercitationem ad, nihil minus nisi ducimus explicabo, id hic, necessitatibus commodi eveniet ipsum unde veniam veritatis ex aut! Dolorum repellendus in, ab sunt placeat voluptatum dolor dignissimos, incidunt modi ea dolorem! Maiores ipsam sit sequi tempore est accusantium ea qui eius ullam alias esse laborum ab, culpa nostrum nesciunt tenetur corrupti distinctio obcaecati? Cum voluptatibus ullam consequuntur?.`,
  maxLineLength: 2,
  width: "50%",
} as TextWithLeadingEllipsisProps.Props;
