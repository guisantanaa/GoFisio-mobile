import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #0e131f;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
  top: 60px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 80px;
`;

export const UserAvatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 98px;
  margin-top: 64px;
  align-self: center;
`;
