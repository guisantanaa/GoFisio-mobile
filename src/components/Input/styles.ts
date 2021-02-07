import styled, { css } from "styled-components/native";
import FeatherIcon from "react-native-vector-icons/Feather";

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #d7dedc;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #d7dedc;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #96e072;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #0e131f;
  font-size: 16px;
  font-family: "RobotoSlab-Regular";
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
