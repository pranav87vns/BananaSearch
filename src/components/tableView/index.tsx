import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-reanimated-table';
import {View} from 'react-native';
import {styles} from './styles';
import {getRank} from '../../utils';

interface value {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
}

export const TableView = ({
  search,
  leaderboard,
  searchResult,
}: {
  search: string;
  leaderboard: value[];
  searchResult: value[];
}) => {
  const {container, head, text, borderStyle} = styles;
  const tableHead = ['Name', 'Rank', 'Number of bananas', 'isSearched User'];

  searchResult.sort((a, b) => b.bananas - a.bananas);

  let finalArray = leaderboard.concat(
    searchResult.filter(bo => leaderboard.every(ao => ao.name != bo.name)),
  );
  finalArray.sort((a, b) => b.bananas - a.bananas);
  let searchIndex = finalArray.findIndex(
    a =>
      a.name?.split(' ')[0]?.toLowerCase() === search ||
      a.name?.split(' ')[1]?.toLowerCase() === search ||
      a.name?.toLowerCase() === search.toLowerCase(),
  );
  if (searchIndex > 9) {
    finalArray[9] = finalArray[10];
    searchIndex = searchIndex - 1;
  }

  let tableData = finalArray.map((a, index) => {
    return [
      a.name,
      index === searchIndex && index == 9
        ? getRank(finalArray[9]?.uid)
        : index + 1,
      a.bananas,
      index === searchIndex ? 'yes' : 'no',
    ];
  });

  return (
    <View style={container}>
      <Table borderStyle={borderStyle}>
        <Row data={tableHead} style={head} textStyle={text} />
        <Rows data={tableData?.slice(0, 10)} textStyle={text} />
      </Table>
    </View>
  );
};
