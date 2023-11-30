import { Container, Content, Icon } from "./styles";
import { AppError } from "@utils/AppError";
import { useState } from "react";

import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { Alert } from "react-native";

export function NewGroups() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  async function handleCreateGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Nova Turma", "O nome da turma é obrigatório");
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Nova Turma", error.message);
      }

      Alert.alert("Nova Turma", "Não foi possível criar a turma");
      console.log(error);
    }
  }

  return (
    <Container>
      <Header hasBackButton />
      <Content>
        <Icon />
        <HighLight title="Nova turma" subTitle="Crie uma nova turma" />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button
          title="Criar turma"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </Content>
    </Container>
  );
}
