import { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";

export const Button: FC<ComponentPropsWithoutRef<"button">> = (props) => {
  return <Root {...props} />;
};

const Root = styled.button`
  background-color: #fcd799;
  color: #2d2d2d;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eab678;
  }

  &:active {
    background-color: #c98a5f;
  }

  &:focus-visible {
    outline: 2px solid #2d2d2d;
  }
`;
