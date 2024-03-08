import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View} from 'react-native';
import { styleCategoryCard } from './styleCategoryCard';
import { useData } from '../../context/allDataContext';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Texts } from '../../standard/Texts';

export const GroupCard = ({category, navigation}) => {
    const context = useData()
    const data = context.allData
    const navigateToAnd = (section, especific)=>{navigation.navigate(section, {screen: especific})}
    const {categoryName, minimumExpense, maximumExpense, minimumResult, maximumResult, periodTime, categoryBudget} = getCategoryData(category)
    const iconName = "home"
    const {Period, Budget, EstimatedExpense, Result} = Texts.ExpenseGestorScreen.CategoryCard
    return(
        <TouchableOpacity
            onPress={() => {context.setCategory(category)}}
            style={{marginBottom: 20,}}>
                
            <View style={styleCategoryCard.container}>
                <View style={styleCategoryCard.categoryData}>
                    <View style={styleCategoryCard.categoryName}>
                        <FontAwesome5 name={iconName} color={"black"} size={20} />
                        <Text style={styleCategoryCard.TextCategorySection}>  {categoryName}</Text>
                    </View>
                    <View style={styleCategoryCard.categoryPeriod}>
                        <Text style={styleCategoryCard.textPeriodData}>{Period}: {periodTime}</Text>
                    </View>
                </View>
                <View style={styleCategoryCard.categoryDataRows}>
                    <Text style={styleCategoryCard.textSize}>{Budget}</Text>
                    <Text style={[styleCategoryCard.textSize]}>$ {categoryBudget}</Text>
                </View>
                <View style={styleCategoryCard.categoryDataRows}>
                    <Text style={styleCategoryCard.textSize}>{EstimatedExpense}</Text>
                    <View style={[styleCategoryCard.rowContainer, styleCategoryCard.rightSide]}>
                        <Text style={styleCategoryCard.textSize}>$ {minimumExpense}</Text>
                        {maximumExpense == 0 ? (<Text></Text>) : (<Text style={styleCategoryCard.textSize}> - {maximumExpense} </Text>)}
                    </View>
                </View>
                <View style={styleCategoryCard.categoryDataRows}>
                    <Text style={styleCategoryCard.textSize}>{Result}</Text>
                    <Text style={[styleCategoryCard.textSize]}>$ {minimumResult} / {maximumResult} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const getCategoryData = (category) =>{
    return {
        categoryName   : category.name,
        minimumExpense : category.expectedExpense.minimum,
        maximumExpense : category.expectedExpense.maximum,
        minimumResult  : category.expectedResult.minimum,
        maximumResult  : category.expectedResult.maximum,
        periodTime     : category.timePeriod.period,
        categoryBudget : category.monthlyBudget
    }
}