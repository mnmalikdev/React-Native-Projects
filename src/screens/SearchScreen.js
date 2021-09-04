import React, {useState} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';
import useResults from './hooks/useResults';
import ResultList from './components/ResultsList';

const SearchScreen=( )=>{
    const [term,setTerm]=useState('');
    const [SearchApi,results,errorMessage]=useResults();

    //helper ftn to filter results. we have 3 kinds of results $ , $$, $$$ . 
    const filterByPrice= (price)=>{
     return results.filter( result =>{
       return result.price===price
     })
    }

    return(
    <View style={{ flex:1 }}>
        <SearchBar term={term}
        onTermChange={setTerm}
        onTermSubmit={() => SearchApi(term)}
         />
        { errorMessage? <Text> {errorMessage} </Text> : null}
        <ScrollView>
          <ResultList  results={filterByPrice('$')} title="Cost Effective"  />
          <ResultList  results={filterByPrice('$$')} title="Bit Pricier"  />
          <ResultList  results={filterByPrice('$$$')} title="Super pricy"  />
        </ScrollView>
    </View> )
}

const styles=StyleSheet.create({
  txt:{
    marginTop:2,
    marginLeft:5
  }
})

export default SearchScreen