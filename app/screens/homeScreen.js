import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View} from 'react-native';
import { Headbar } from '../headBar/headBar';
import { styleScreen } from '../standard/screenView';
import { waitForData } from '../../services/createDataObject';
import { useEffect, useState } from 'react';
import { GroupCard } from '../Components/groupComponents';

export const Home = ({navigation}) => {
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Agrega un estado para manejar errores

  useEffect(() => {
    async function fetchData() {
      try {
        const Data = await waitForData();
        setUser(Data.user);
        setGroups(Data.accountGroups);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setError(error); // Establece el estado de error en caso de fallo
      }
    }
    fetchData();
  }, []);

  return(
    <View style={styleScreen.container}>
      {isLoading ? (
        <Headbar ScreenName = "Home" userName = "Cargando..."/>
      ) : error ? (
        <Text>Ha ocurrido un error al cargar los datos.</Text>
      ) : (
        <Headbar ScreenName = "Home" userName = {user.name}/>
      )}
      <View style={styleScreen.screen}>
        <View style={styleScreen.spacePrincipleWord}>
          <Text style={styleScreen.mainText}>Grupo de cuentas</Text>
        </View>
          {isLoading? (
            <View style={styleScreen.spaceToShowArray}>
                <Text>CARGANDO</Text>
            </View>
          ) : (
            <View style={styleScreen.spaceToShowArray}>
              <FlatList

                hidden={!groups || groups.length === 0}
                visible={!isLoading && groups.length > 0} // Agrega la condición !isLoading
                data={groups}
                renderItem={({ item }) => {
                  return (
                    <GroupCard group={item} navigation ={navigation} />
                  );
                }}
                keyExtractor={(item) => item.id}
              />
              </View>
          )}
        <View style={styleScreen.spaceToSFooter}>
        </View>
      </View>
    </View>
  );
}