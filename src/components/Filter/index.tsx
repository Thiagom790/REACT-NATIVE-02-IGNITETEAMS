import { TouchableOpacityProps } from "react-native";
import { Container, FilterTypeStyleProps, Title } from "./styles";

type FilterProps = TouchableOpacityProps &
  FilterTypeStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
