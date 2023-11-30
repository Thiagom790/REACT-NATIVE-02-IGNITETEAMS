import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

// Temos também o SafeArea dentro do react-native
// porém é melhor usar o do react-native-safe-area-context
export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;
