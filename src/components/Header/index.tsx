import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackButton, BackIcon } from "./styles";

import logoImg from "@assets/logo.png";

type HeaderProps = {
  hasBackButton?: boolean;
};

export function Header({ hasBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    // Com o goBack() eu posso voltar para a tela anterior
    // navigation.goBack();
    // Com o navigate() eu posso navegar para uma tela removendo a tela anterior
    navigation.navigate("groups");
  }

  return (
    <Container>
      {hasBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
