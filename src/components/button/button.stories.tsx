import { ComponentPropsWithoutRef } from "react";
import { Button } from ".";

export default {
  title: "Button",
  component: Button,
};

type Props = ComponentPropsWithoutRef<typeof Button>;
const DefaultStory = (args: Props) => {
  return <Button {...args}>default button</Button>;
};

export const Default = DefaultStory.bind({});
