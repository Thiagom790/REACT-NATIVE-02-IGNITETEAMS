import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups";
import { Players } from "@screens/Players";
import { NewGroups } from "@screens/NewGroups";

// Navegação em pilha
// Navigator: Navegação em pilha
// Screen: Cada tela da navegação
// Group: Agrupar telas
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="players" component={Players} />
      <Screen name="new" component={NewGroups} />
    </Navigator>
  );
}
