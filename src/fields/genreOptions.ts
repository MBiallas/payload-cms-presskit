import { Option } from 'payload';

interface GenreOption {
  label: string;
  value: string;
}

export const mainCategories: GenreOption[] = [
  { label: 'Chill', value: 'chill' },
  { label: 'Electronic', value: 'electronic' },
  { label: 'Rap', value: 'rap' },
  { label: 'Pop', value: 'pop' },
  { label: 'Rock', value: 'rock' },
];

export const parentGenres: Record<string, GenreOption[]> = {
  chill: [
    { label: 'Ambient', value: 'ambient' },
    { label: 'Broken Beat', value: 'broken-beat' },
    { label: 'Chillwave', value: 'chillwave' },
    { label: 'Downtempo', value: 'downtempo' },
    { label: 'Dub Music', value: 'dub-music' },
    { label: 'Lo-Fi', value: 'lo-fi' },
    { label: 'Lounge', value: 'lounge' },
  ],
  electronic: [
    { label: '140 / Deep Dubstep / Grime', value: '140-deep-dubstep-grime' },
    { label: 'Afro House', value: 'afro-house' },
    { label: 'Amapiano', value: 'amapiano' },
    { label: 'Bass / Club', value: 'bass-club' },
    { label: 'Bass House', value: 'bass-house' },
    { label: 'Breaks / Breakbeat / UK Bass', value: 'breaks-breakbeat-uk-bass' },
    { label: 'Dance / Electro Pop', value: 'dance-electro-pop' },
    { label: 'Deep House', value: 'deep-house' },
    { label: 'Drum & Bass', value: 'drum-and-bass' },
    { label: 'Dubstep', value: 'dubstep' },
    { label: 'Electro (Classic / Detroit / Modern)', value: 'electro' },
    { label: 'Electronica', value: 'electronica' },
    { label: 'Funky House', value: 'funky-house' },
    { label: 'Hard Dance / Hardcore', value: 'hard-dance-hardcore' },
    { label: 'Hard Techno', value: 'hard-techno' },
    { label: 'House', value: 'house' },
    { label: 'Indie Dance', value: 'indie-dance' },
    { label: 'Jackin House', value: 'jackin-house' },
    { label: 'Latin Electronic', value: 'latin-electronic' },
    { label: 'Mainstage', value: 'mainstage' },
    { label: 'Melodic House', value: 'melodic-house' },
    { label: 'Minimal / Deep Tech', value: 'minimal-deep-tech' },
    { label: 'Nu Disco / Disco', value: 'nu-disco-disco' },
    { label: 'Organic House', value: 'organic-house' },
    { label: 'Progressive House', value: 'progressive-house' },
    { label: 'Psy-Trance', value: 'psy-trance' },
    { label: 'Tech House', value: 'tech-house' },
    { label: 'Techno', value: 'techno' },
    { label: 'Trance (Main Floor)', value: 'trance-main-floor' },
    { label: 'Trance (Raw / Deep / Hypnotic)', value: 'trance-raw-deep-hypnotic' },
    { label: 'Trap / Wave', value: 'trap-wave' },
    { label: 'UK Garage / Bassline', value: 'uk-garage-bassline' },
  ],
  rap: [
    { label: 'Bounce', value: 'bounce' },
    { label: 'Christian & Gospel', value: 'christian-gospel' },
    { label: 'Conscious', value: 'conscious' },
    { label: 'Drill', value: 'drill' },
    { label: 'East Coast', value: 'east-coast' },
    { label: 'Hardcore', value: 'hardcore' },
    { label: 'Old School', value: 'old-school' },
    { label: 'Rap', value: 'rap' },
    { label: 'Southern', value: 'southern' },
    { label: 'West Coast', value: 'west-coast' },
  ],
  pop: [
    { label: 'Country Pop', value: 'country-pop' },
    { label: 'Dance Pop', value: 'dance-pop' },
    { label: 'Easy Listening', value: 'easy-listening' },
    { label: 'Euro Pop', value: 'euro-pop' },
    { label: 'Indie Pop', value: 'indie-pop' },
    { label: 'Instrumental Pop', value: 'instrumental-pop' },
    { label: 'J Pop', value: 'j-pop' },
    { label: 'K Pop', value: 'k-pop' },
    { label: 'Pop Punk', value: 'pop-punk' },
    { label: 'Pop Rock', value: 'pop-rock' },
    { label: 'R&B', value: 'r-and-b' },
    { label: 'Reggaeton', value: 'reggaeton' },
    { label: 'Score & Soundtrack', value: 'score-soundtrack' },
    { label: 'Singer Songwriter', value: 'singer-songwriter' },
    { label: 'Synth Pop', value: 'synth-pop' },
  ],
  rock: [
    { label: 'Alternative', value: 'alternative' },
    { label: 'Crossover', value: 'crossover' },
    { label: 'Electronic Rock', value: 'electronic-rock' },
    { label: 'Heavy Metal', value: 'heavy-metal' },
    { label: 'Indie Rock', value: 'indie-rock' },
    { label: 'Instrumental Rock', value: 'instrumental-rock' },
    { label: 'Progressive Rock', value: 'progressive-rock' },
    { label: 'Psychedelic Rock', value: 'psychedelic-rock' },
    { label: 'Rock & Roll', value: 'rock-and-roll' },
  ],
};

export const subGenres: Record<string, GenreOption[]> = {
  // Electronic subgenres
  '140-deep-dubstep-grime': [{ label: 'Grime', value: 'grime' }],
  'afro-house': [{ label: 'Afro / Latin', value: 'afro-latin' }],
  'amapiano': [{ label: 'Gqom', value: 'gqom' }],
  'bass-club': [
    { label: 'Bass / Club 2', value: 'bass-club-2' },
    { label: 'Global Club', value: 'global-club' },
    { label: 'Jersey Club', value: 'jersey-club' },
    { label: 'Juke / Footwork', value: 'juke-footwork' },
    { label: 'Reggae / Dancehall', value: 'reggae-dancehall' },
  ],
  'breaks-breakbeat-uk-bass': [{ label: 'Glitch Hop', value: 'glitch-hop' }],
  'dance-electro-pop': [
    { label: 'Afro Pop', value: 'afro-pop' },
    { label: 'Future Bass', value: 'future-bass' },
    { label: 'Slap House', value: 'slap-house' },
    { label: 'Tropical House', value: 'tropical-house' },
  ],
  'drum-and-bass': [
    { label: 'Deep', value: 'deep' },
    { label: 'Halftime', value: 'halftime' },
    { label: 'Jump Up', value: 'jump-up' },
    { label: 'Jungle', value: 'jungle' },
    { label: 'Liquid', value: 'liquid' },
  ],
  'dubstep': [
    { label: 'Melodic Dubstep', value: 'melodic-dubstep' },
    { label: 'Midtempo', value: 'midtempo' },
  ],
  'electronica': [
    { label: 'Ambient', value: 'electronic-ambient' },
    { label: 'Funk / Soul', value: 'electronic-funk-soul' },
  ],
  'hard-dance-hardcore': [
    { label: 'Frenchcore', value: 'electronic-frenchcore' },
    { label: 'Hard House', value: 'electronic-hard-house' },
    { label: 'Hard Trance', value: 'electronic-hard-trance' },
    { label: 'Hardstyle', value: 'electronic-hardstyle' },
    { label: 'Terror UK / Happy Hardcore', value: 'electronic-terror-uk-hardcore' },
    { label: 'Uptempo', value: 'electronic-uptempo' },
  ],
  'house': [
    { label: 'Acid', value: 'acid' },
    { label: 'Soulful', value: 'soulful' },
  ],
  'indie-dance': [{ label: 'Dark Disco', value: 'dark-disco' }],
  'mainstage': [
    { label: 'Big Room', value: 'big-room' },
    { label: 'Electro House', value: 'electro-house' },
    { label: 'Future House', value: 'future-house' },
    { label: 'Future Rave', value: 'future-rave' },
    { label: 'Moombahton', value: 'moombahton' },
    { label: 'Speed House', value: 'speed-house' },
  ],
  'melodic-house': [
    { label: 'Melodic House', value: 'melodic-house' },
    { label: 'Melodic Techno', value: 'melodic-techno' },
  ],
  'minimal-deep-tech': [
    { label: 'Bounce', value: 'electronic-bounce' },
    { label: 'Deeptech', value: 'deeptech' },
  ],
  'nu-disco-disco': [
    { label: 'Funk / Soul', value: 'disco-funk-soul' },
    { label: 'Italo', value: 'italo' },
  ],
  'psy-trance': [
    { label: 'Dark & Forest', value: 'dark-forest' },
    { label: 'Full-On', value: 'full-on' },
    { label: 'Goa Trance', value: 'goa-trance' },
    { label: 'Progressive Psy', value: 'progressive-psy' },
    { label: 'Psy Core', value: 'psy-core' },
    { label: 'Hi-Tech', value: 'hi-tech' },
    { label: 'Psychedelic', value: 'psychedelic' },
  ],
  'tech-house': [{ label: 'Latin Tech', value: 'latin-tech' }],
  'techno': [
    { label: 'Broken', value: 'broken' },
    { label: 'Deep / Hypnotic', value: 'deep-hypnotic' },
    { label: 'Driving', value: 'driving' },
    { label: 'Dub', value: 'dub' },
    { label: 'EBM', value: 'ebm' },
    { label: 'Peak Time', value: 'peak-time' },
    { label: 'Raw', value: 'raw' },
  ],
  'trance-main-floor': [
    { label: 'Hard Trance', value: 'hard-trance' },
    { label: 'Progressive Trance', value: 'progressive-trance' },
    { label: 'Tech Trance', value: 'tech-trance' },
    { label: 'Uplifting Trance', value: 'uplifting-trance' },
    { label: 'Vocal Trance', value: 'vocal-trance' },
  ],
  'trance-raw-deep-hypnotic': [
    { label: 'Deep Trance', value: 'deep-trance' },
    { label: 'Hypnotic Trance', value: 'hypnotic-trance' },
    { label: 'Raw Trance', value: 'raw-trance' },
  ],
  'trap-wave': [
    { label: 'Phonk', value: 'phonk' },
    { label: 'Trap', value: 'trap' },
    { label: 'Wave', value: 'wave' },
  ],
  'uk-garage-bassline': [
    { label: 'Bassline', value: 'bassline' },
    { label: 'UK Garage', value: 'uk-garage' },
  ],

  // Rap subgenres
  'drill': [{ label: 'UK Drill', value: 'uk-drill' }],
  'old-school': [{ label: 'Boom Bap', value: 'boom-bap' }],
  'rap': [
    { label: 'African Rap', value: 'rap-african' },
    { label: 'Cloud Rap', value: 'rap-cloud' },
    { label: 'Country Rap', value: 'rap-country' },
    { label: 'Emo Rap', value: 'rap-emo' },
    { label: 'Gangsta Rap', value: 'rap-gangsta' },
    { label: 'Jazz Rap', value: 'rap-jazz' },
    { label: 'Hardcore', value: 'rap-hardcore' },
  ],

  // Pop subgenres
  'r-and-b': [
    { label: 'Funk', value: 'funk' },
    { label: 'Motown', value: 'motown' },
    { label: 'Soul', value: 'soul' },
    { label: 'Soul & Blues', value: 'soul-and-blues' },
  ],

  // Rock subgenres
  'heavy-metal': [
    { label: 'Death Metal', value: 'metal-death' },
    { label: 'Hardcore', value: 'metal-hardcore' },
    { label: 'Industrial', value: 'metal-industrial' },
    { label: 'Metal Core', value: 'metal-core' },
  ],
}; 