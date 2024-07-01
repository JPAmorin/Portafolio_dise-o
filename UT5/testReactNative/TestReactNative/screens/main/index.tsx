/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { getApiTasks } from '../../api/api';

import MyCard from '../../components/MyCard';


function Main(): React.JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const getNewTasks = async () => {
      const payload = await getApiTasks()
      setTasks(payload)
    }
    getNewTasks()
  }, [])

  const updateCount = () => {
    setCount(count + 1)
  }

  type Task = {
    id: string,
    title: string,
    description: string,
    assignedTo: string,
    startDate: string,
    endDate: string,
    status: string,
    priority: string,
    comments: string[]
  }

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        {tasks.map((task: Task) => (
          <MyCard key={task.id} id={task.id} onPress={updateCount}>
            <Text>{task.title}</Text>
          </MyCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
/*

MyCard onpress -> navigate details (stack)
Add info -> mandar a la api y traer de nuevo
Editar info -> mandar a la api y traer de nuevo
Borrar task

*/

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Main;
