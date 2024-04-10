import { Provider } from 'react-redux';
import store from './src/redux/store';
import { StatusBar } from 'react-native';
import Routes from './src/navigation/Routes';
import { useEffect } from 'react';
import { addData } from './src/redux/action/action';
import { asyncGetData } from './src/utils/utils';
export default function App() {

  useEffect(()=>{ 
    async function fetchDataFromAsyncStore() {
        try {
            const items = await asyncGetData(); 
            addData(JSON.parse(items))
            console.log("get data from async store",items)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchDataFromAsyncStore()
},[])

  return (
      <Provider store={store}>
        <StatusBar/>
        <Routes/>
      </Provider>
  );
}


