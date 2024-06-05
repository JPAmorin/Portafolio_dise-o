/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
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
import MyCard from './components/MyCard';
import { getDogFacts } from './api/api';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const [dogFacts, setDogFacts] = useState([] as any)

  useEffect(() => {
    const getDogFactsPayload = async () => {
      const newDogFacts = await getDogFacts();
      setDogFacts(newDogFacts.data);
    };

    getDogFactsPayload();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text style={styles.mainTitle}>Amazing dog facts!</Text>
      </View>
      <ScrollView>
        <View style={styles.infoDisplay}>
          {dogFacts.map((j: any) => {
            return (
              <MyCard key={j.id} id={j.id} style={styles.infoItem}>
                <Text style={styles.dogBreedStyle}>{j.attributes.name}</Text>
                <Text style={{ marginTop: 8 }}>{j.attributes.description}</Text>
              </MyCard>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  infoDisplay: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  infoItem: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#e0e0e0',
    padding: 8,
  },
  dogBreedStyle: {
    fontSize: 25
  },
  mainTitle: {
    fontSize: 32,
    justifyContent: 'center',
    fontStyle: 'italic'
  }
});

export default App;
