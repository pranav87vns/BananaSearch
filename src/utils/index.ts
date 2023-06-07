import lEADERBOARD from '../screens/home/leaderboard.json';

interface value {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
}

export const getRank = (uid: string) => {
  let leaderboard: value[] = [];
  Object.values(lEADERBOARD).map((value: value) => {
    leaderboard.push(value);
  });
  leaderboard.sort((a, b) => b.bananas - a.bananas);
  return leaderboard.findIndex(x => x.uid === uid);
};
