import { Button, Text, TextInput, View} from "react-native"
import {Picker} from '@react-native-picker/picker';
import { styleScreen } from "../../standard/screenView"
import { Headbar } from "../../headBar/headBar"
import { useData } from "../../context/allDataContext"
import { styleNewCategoryScreen } from "../../Components/NewGestor/StyleNewCategory"
import { useState } from "react"
import { postCategory } from "../../../services/apiPost/postCategory";

export const NewCategoryScreen = ({navigation}) => {
  const context = useData()
  const data = context.allData
  const userData = context.allData.user
  const [name, setName] = useState("")
  const [monthlyBudget, setMonthlyBudget] = useState("")
  const idsExpenseSubCategory = []
  const [expectedMinimum, setExpectedMinimum] = useState("")
  const [ExpectedMaximum, setExpectedMaximum] = useState("")
  const [count, setCount] = useState(1)
  const [period, setPeriod] = useState("monthly")

  const onChangeTextFloat = (text, setState) => {(text === "") ? setState("") : setState(parseFloat(text))}
  return(
      <View style={styleScreen.container}>
        <Headbar ScreenName = "Create" userName = {data.user.name} />
        <View style={styleScreen.screen}>
          <View style={styleNewCategoryScreen.spacePrincipleWord}>
            <Text style={styleNewCategoryScreen.mainText}>Nueva Categoria</Text>
          </View>
          <View style={styleNewCategoryScreen.form}>
            <View>
              <Text style={styleNewCategoryScreen.textSize}>Nombre de la categoría:</Text>
              <TextInput
                style={{paddingVertical: 10,  fontSize: 18}}
                value={name}
                onChangeText={setName}
                placeholder="Ingrese el nombre"
                required
              />
            </View>
            <View>
              <Text style={styleNewCategoryScreen.textSize}>Presupuesto mensual:</Text>
              <TextInput
                style={{paddingVertical: 10,  fontSize: 18}}
                value={monthlyBudget.toString()}
                onChangeText={(text) => onChangeTextFloat(text, setMonthlyBudget)}
                placeholder="Ejemplo: $430"
                keyboardType="numeric"
                required
              />
            </View>
            <View>
              <Text style={styleNewCategoryScreen.textSize}>Mínimo esperado:</Text>
              <TextInput
                style={{paddingVertical: 10,  fontSize: 18}}
                value={expectedMinimum.toString()}
                onChangeText={(text) => onChangeTextFloat(text, setExpectedMinimum)}
                placeholder="Ejemplo: $400"
                keyboardType="numeric"
                required
              />
            </View>
            <View>
              <Text style={styleNewCategoryScreen.textSize}>Máximo esperado:</Text>
              <TextInput
                style={{paddingVertical: 10,  fontSize: 18}}
                value={ExpectedMaximum.toString()}
                onChangeText={(text) => onChangeTextFloat(text, setExpectedMaximum)}
                placeholder="Ejemplo: $440"
                keyboardType="numeric"
                required
              />
            </View>
            <View>
              <Text style={styleNewCategoryScreen.textSize}>
                Frecuencia del período:</Text>
              <TextInput
                style={{paddingVertical: 10,  fontSize: 18}}
                value={count.toString()}
                onChangeText={(text) => onChangeTextFloat(text, setCount)}
                placeholder="Ingrese la frecuencia"
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text style={styleNewCategoryScreen.textSize}>
                Período de tiempo:</Text>
              <Picker
                selectedValue={period}
                onValueChange={(itemValue, itemIndex) => setPeriod(itemValue)}
              >
                <Picker.Item label="Mensual" value="monthly" />
                <Picker.Item label="Semanal" value="weekly" />
                <Picker.Item label="Anual" value="yearly" />
              </Picker>
            </View>
          </View>
          <Button
          title='Crear'
          onPress={ async ()=>{
            const newData = {
                name,
                monthlyBudget,
                idsExpenseSubCategory,
                "expectedExpense": {
                  "minimum": expectedMinimum,
                  "maximum": ExpectedMaximum,
                },
                "timePeriod": {
                  count,
                  period,
                },
                "expectedResult": {
                  "minimum": monthlyBudget - expectedMinimum,
                  "maximum": monthlyBudget - ExpectedMaximum,
                },
                "expenseSubcategory": []
            }
            const response = await postCategory(newData, userData)
            console.log(response)
            }}
        />
        </View>
      </View>
  )
}