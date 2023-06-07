import {Text, Button, View, FlatList, Keyboard, Alert} from 'react-native';
import {Input, Layout, Loading} from '../../components';
import {useEffect, useState, useMemo} from 'react';
import {styles} from './styles';
import lEADERBOARD from './leaderboard.json';
import {TableView} from '../../components';

interface value {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
}

const Home = () => {
  const [search, setSearch] = useState('');
  const [searchable, setSearchable] = useState(false);
  const [searchResult, setSearchResult] = useState<value[]>([]);
  const [leaderboard, setLeaderboard] = useState<value[]>([]);
  const {buttonStyle, containerStyle, textInputStyle} = styles;

  const onPressSearch = () => {
    setSearchable(false);

    if (search.length > 0) {
      const searchResult = leaderboard.filter(
        a =>
          a.name?.split(' ')[0]?.toLowerCase() === search ||
          a.name?.split(' ')[1]?.toLowerCase() === search,
      );
      if (searchResult.length > 0) {
        setSearchResult(searchResult);
        setSearchable(true);
      } else {
        Alert.alert(
          'This user name does not exist! Please specify an existing user name',
        );
      }
    }
  };

  useEffect(() => {
    Object.values(lEADERBOARD).map((value: value) => {
      leaderboard.push(value);
    });
    leaderboard.sort((a, b) => b.bananas - a.bananas);
  }, []);

  return (
    <View>
      <View style={containerStyle}>
        <Input placeholder="User name.." setValue={setSearch}></Input>

        <View style={buttonStyle}>
          <Button
            color="#841584"
            title="Search"
            onPress={onPressSearch}></Button>
        </View>
      </View>
      {searchable && (
        <TableView
          search={search}
          leaderboard={leaderboard?.slice(0, 10)}
          searchResult={searchResult}
        />
      )}
    </View>
  );
};

export default Home;
