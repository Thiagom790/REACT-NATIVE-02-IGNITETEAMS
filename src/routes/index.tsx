import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

export function Routes() {
  const theme = useTheme();

  return (
    /* NavigationContainer: Container que engloba toda a navegação
     * Por exemplo se eu tivesse rotas admin eu poderia importar um
     * novo arquivo de rotas e colocar dentro do NavigationContainer
     * e assim teria uma navegação separada
     * algo como:
     * <NavigationContainer>
     *     <AppRoutes />
     *     <AdminRoutes />
     * </NavigationContainer>
     * Ou algo com condicional:
     * <NavigationContainer>
     *    {user.admin ? <AdminRoutes /> : <AppRoutes />}
     * </NavigationContainer>
     *
     * A view é preciso para que não fique com a cor de fundo branca
     * ao navegar entre as telas
     */
    <View style={{ flex: 1, backgroundColor: theme?.COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
