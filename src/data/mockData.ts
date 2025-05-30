// Mock data for the application

// Team logos
export const teamLogos = {
  fap: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_QwSBtMtRrZo5-EsWQ0MxwGVVrWnI3GW5Q&s',
  leNkam: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6u8NuBnI8XEYaS_DsSDfWyAiUB_iVTdqYnA&s',
  onyx: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Lj7Nrl7Ig4Ejz3VEjWrK2QiX3jTkJYgPSg&s',
  udla: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQR--RO2YgUBHGiY66PiTlbGhHtykggJKkg&s',
  nzuiManto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSMB_uFp6BQr6qoD9Q0rLCwKVWTbCuO4fQw&s',
  overdose: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nVHoOH2f3k2vGDQ6SSOYgvv4ZY6O3KdGlw&s',
};

// Game scores for the scoreboard
export const gameScores = [
  {
    id: '1',
    homeTeam: {
      name: 'FAP',
      logo: teamLogos.fap,
      score: 74,
    },
    awayTeam: {
      name: 'ONYX',
      logo: teamLogos.onyx,
      score: 70,
    },
    status: 'final' as const,
  },
  {
    id: '2',
    homeTeam: {
      name: 'LE NKAM',
      logo: teamLogos.leNkam,
      score: 70,
    },
    awayTeam: {
      name: 'FAP',
      logo: teamLogos.fap,
      score: 74,
    },
    status: 'final' as const,
  },
  {
    id: '3',
    homeTeam: {
      name: 'LE NKAM',
      logo: teamLogos.leNkam,
      score: 70,
    },
    awayTeam: {
      name: 'FAP',
      logo: teamLogos.fap,
      score: 74,
    },
    status: 'final' as const,
  },
  {
    id: '4',
    homeTeam: {
      name: 'LE NKAM',
      logo: teamLogos.leNkam,
      score: 70,
    },
    awayTeam: {
      name: 'FAP',
      logo: teamLogos.fap,
      score: 74,
    },
    status: 'final' as const,
  },
  {
    id: '5',
    homeTeam: {
      name: 'UDLA',
      logo: teamLogos.udla,
      score: 82,
    },
    awayTeam: {
      name: 'OVERDOSE',
      logo: teamLogos.overdose,
      score: 78,
    },
    status: 'live' as const,
    period: '4th',
    timeRemaining: '3:24',
  },
];

// Featured game for hero section
export const featuredGame = {
  homeTeam: {
    name: 'FAP',
    logo: teamLogos.fap,
    score: 74,
  },
  awayTeam: {
    name: 'ONYX',
    logo: teamLogos.onyx,
    score: 70,
  },
  status: 'final' as const,
  summary: 'In a thrilling matchup, FAP secured a hard-fought victory over ONYX, demonstrating exceptional teamwork and strategic play throughout all four quarters. Watch the game highlights and analysis.',
};

// Video highlights
export const videoHighlights = [
  {
    id: '1',
    title: 'FAP vs ONYX - Game Highlights | May 29, 2025',
    thumbnail: 'https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '2:30',
  },
  {
    id: '2',
    title: 'LE NKAM vs OVERDOSE - Best Plays | May 28, 2025',
    thumbnail: 'https://images.pexels.com/photos/3763876/pexels-photo-3763876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '2:20',
  },
  {
    id: '3',
    title: 'UDLA dominates against NZUI-MANTO | May 27, 2025',
    thumbnail: 'https://images.pexels.com/photos/3649089/pexels-photo-3649089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '2:15',
  },
  {
    id: '4',
    title: 'Top 5 Plays of the Week | African Basketball League',
    thumbnail: 'https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '2:25',
  },
];

// News articles
export const newsArticles = [
  {
    id: '1',
    title: 'FAP extends winning streak to 10 games, defeating ONYX in a close match',
    excerpt: 'FAP continues their dominant season with another impressive victory over a strong ONYX team, positioning themselves as the top contender for the championship.',
    image: 'https://images.pexels.com/photos/2627616/pexels-photo-2627616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 30, 2025',
    category: 'Game Recap',
  },
  {
    id: '2',
    title: 'LE NKAM signs international prospect ahead of playoff push',
    date: 'May 29, 2025',
    category: 'Team News',
  },
  {
    id: '3',
    title: 'African Basketball League announces expansion to three new cities for 2026 season',
    date: 'May 28, 2025',
    category: 'League News',
  },
  {
    id: '4',
    title: 'Rising star from UDLA selected for national team ahead of continental championships',
    date: 'May 27, 2025',
    category: 'Player News',
  },
  {
    id: '5',
    title: 'NZUI-MANTO unveils new training facility focused on youth development',
    date: 'May 26, 2025',
    category: 'Team News',
  },
  {
    id: '6',
    title: 'Basketzoom to broadcast all playoff games live with enhanced viewing experience',
    date: 'May 25, 2025',
    category: 'Media',
  },
  {
    id: '7',
    title: 'Top coaches share insights on tactical evolution in African basketball',
    date: 'May 24, 2025',
    category: 'Analysis',
  },
  {
    id: '8',
    title: 'OVERDOSE announces community basketball program in partnership with local schools',
    date: 'May 23, 2025',
    category: 'Community',
  },
];

// Clubs
export const clubs = [
  {
    id: 'fap',
    name: 'FAP BASKETBALL',
    logo: teamLogos.fap,
  },
  {
    id: 'le-nkam',
    name: 'LE NKAM BASKETBALL',
    logo: teamLogos.leNkam,
  },
  {
    id: 'onyx',
    name: 'ONYX BASKETBALL',
    logo: teamLogos.onyx,
  },
  {
    id: 'udla',
    name: 'UDLA BASKETBALL',
    logo: teamLogos.udla,
  },
  {
    id: 'nzui-manto',
    name: 'NZUI-MANTO BASKETBALL',
    logo: teamLogos.nzuiManto,
  },
  {
    id: 'overdose',
    name: 'OVERDOSE BASKETBALL',
    logo: teamLogos.overdose,
  },
];

// Analysis
export const analysis = {
  title: 'FAP\'s Strategic Approach: The Key to Their Winning Streak',
  image: 'https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  description: 'FAP has established themselves as the team to beat this season. Their balanced offense and aggressive defense have overwhelmed opponents and made them title favorites.',
  points: [
    {
      id: '1',
      text: 'Aggressive perimeter defense forcing turnovers that lead to easy transition points.',
    },
    {
      id: '2',
      text: 'Balanced scoring attack with four players averaging double figures.',
    },
    {
      id: '3',
      text: 'Superior rebounding margin (+7.5 per game) creating second-chance opportunities.',
    },
    {
      id: '4',
      text: 'Efficient three-point shooting at 38.5%, ranking first in the league.',
    },
    {
      id: '5',
      text: 'Bench depth allowing for consistent performance across all four quarters.',
    },
    {
      id: '6',
      text: 'Innovative offensive sets designed to create mismatches against any defense.',
    },
  ],
};