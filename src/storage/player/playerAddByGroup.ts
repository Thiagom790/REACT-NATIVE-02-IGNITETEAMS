import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playerGetByGroup } from "./playerGetByGroup";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    /*
     * lógica da chave:
     * coleção_de_players-nome_do_grupo
     * @ignite-teams:players-group_name
     */

    const storedPlayers = await playerGetByGroup(group);
    const playerAlreadyExists = storedPlayers.some(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists) {
      throw new AppError("Já existe um jogador cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);
    const key = `${PLAYER_COLLECTION}-${group}`;
    await AsyncStorage.setItem(key, storage);
  } catch (error) {
    throw error;
  }
}
