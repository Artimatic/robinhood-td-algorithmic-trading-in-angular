import { AlgoParam } from '../shared';
import * as moment from 'moment';

const start = moment().format('YYYY-MM-DD');
const end = moment().subtract(700, 'days').format('YYYY-MM-DD');

function createParam(ticker: string): AlgoParam {
  return {
    ticker,
    start,
    end
  };
}

const stockList = [
  'AA',
  'GOLD',
  'AAPL',
  'ABT',
  'ADBE',
  'CVX',
  'MTCH',
  'AGG',
  'AIG',
  'AOS',
  'NRZ',
  'ATVI',
  'AXP',
  'EA',
  'BAC',
  'BDN',
  'BIG',
  'BK',
  'DOCU',
  'BMY',
  'BRKL',
  'GOOS',
  'BTG',
  'BX',
  'C',
  'CAG',
  'F',
  'CCI',
  'CCK',
  'CCL',
  'CFG',
  'CIEN',
  'COF',
  'COST',
  'CSCO',
  'FCAU',
  'CSX',
  'DAL',
  'EWC',
  'DHR',
  'DIS',
  'DLPH',
  'DOV',
  'DPZ',
  'DRI',
  'EBAY',
  'EFV',
  'ETFC',
  'FAST',
  'FB',
  'FDX',
  'FEYE',
  'FHN',
  'FITB',
  'IQ',
  'XLU',
  'JD',
  'GDX',
  'GE',
  'GIS',
  'GNRC',
  'GNTX',
  'AEM',
  'GOOG',
  'GS',
  'HAS',
  'HBAN',
  'HD',
  'HIMX',
  'HOG',
  'HON',
  'HPE',
  'HPQ',
  'HRB',
  'HEAR',
  'IBM',
  'IEF',
  'IEFA',
  'IEMG',
  'IJH',
  'IJR',
  'INTC',
  'ISRG',
  'IVV',
  'IWN',
  'JBHT',
  'JBL',
  'JBLU',
  'JPM',
  'KBH',
  'KEY',
  'GDXJ',
  'KO',
  'KR',
  'KSU',
  'LEN',
  'LOGM',
  'LOW',
  'LQD',
  'LRCX',
  'AMAT',
  'MCO',
  'MDY',
  'PG',
  'MKC',
  'RYN',
  'MRVL',
  'MS',
  'MTG',
  'MU',
  'MXIM',
  'NEM',
  'NFLX',
  'NKE',
  'NR',
  'NUE',
  'NVDA',
  'NXPI',
  'ORCL',
  'PANW',
  'PAYX',
  'PBCT',
  'PBYI',
  'PEP',
  'PFE',
  'PGR',
  'PLD',
  'PM',
  'PNC',
  'QCOM',
  'RAD',
  'BOX',
  'RF',
  'RTN',
  'SCCO',
  'SCHE',
  'SCHF',
  'PYPL',
  'SCZ',
  'SHY',
  'SKX',
  'SLM',
  'SNE',
  'SPWR',
  'SPY',
  'JCP',
  'STI',
  'STLD',
  'STZ',
  'SWKS',
  'SYF',
  'TD',
  'TEAM',
  'TER',
  'TERP',
  'TGT',
  'TLT',
  'TMUS',
  'TRV',
  'TWLO',
  'TXT',
  'UAA',
  'UAL',
  'UMPQ',
  'UNH',
  'UNP',
  'URI',
  'USB',
  'USO',
  'V',
  'VB',
  'VEA',
  'VFC',
  'VFH',
  'VNQ',
  'VOO',
  'VTI',
  'VTV',
  'VWO',
  'WBA',
  'WBT',
  'WDC',
  'WEN',
  'WFC',
  'WGO',
  'XOM',
  'YUMC',
  'ALGN',
  'AMZN',
  'FRT',
  'SQ',
  'RDFN',
  'XLF',
  'BABA',
  'MO',
  'AMD',
  'CTL',
  'NRG',
  'EXC',
  'VST',
  'PNW',
  'DUK',
  'NEE',
  'D',
  'SO',
  'AEP',
  'ED',
  'XEL',
  'PCG',
  'WEC',
  'EIX',
  'ETR',
  'FE',
  'CMS',
  'S',
  'OGE',
  'AES',
  'PEG',
  'GM',
  'NGG',
  'TSLA',
  'BA',
  'MCHI',
  'XLE',
  'XLB',
  'IYR',
  'JNPR',
  'MCD',
  'SAP',
  'KEM',
  'AOBC',
  'CHGG',
  'GLD',
  'MA',
  'EWZ',
  'MSFT',
  'EUO',
  'TVIX',
  'FMC',
  'THO',
  'OKTA',
  'TMF',
  'TMV',
  'EMR',
  'TBT',
  'XOP',
  'SBUX',
  'JNJ',
  'PLAY',
  'W',
  'LMT',
  'CVS',
  'MDR',
  'TWTR',
  'SFIX',
  'T',
  'TXN',
  'MMM',
  'GRUB',
  'GILD',
  'SYK',
  'SIRI',
  'CMG',
  'SPOT',
  'UPS',
  'MRK',
  'GT',
  'IRM',
  'BLL',
  'MGM',
  'LVS',
  'WYNN',
  'ARNC',
  'HAL',
  'WHR',
  'CAT',
  'AKS',
  'STX',
  'SPG',
  'RIG',
  'BP',
  'AKAM',
  'P',
  'CHK',
  'SHAK',
  'BIDU',
  'AMC',
  'FSLR',
  'AVGO',
  'VXX',
  'UVXY',
  'TOT',
  'SNAP',
  'FIT',
  'GPRO',
  'KHC',
  'CCEP',
  'ROKU',
  'DBX',
  'OSTK',
  'PLNT',
  'MYL',
  'NCLH',
  'YELP',
  'CARS',
  'MCHP',
  'PLUG',
  'M',
  'JWN',
  'WMT',
  'SYY',
  'CLF',
  'SONO',
  'RUN',
  'PEGI',
  'BB',
  'ACN',
  'PBR',
  'MJ',
  'RLJ',
  'NYCB',
  'AMRN',
  'AAL',
  'FCX',
  'TLRY',
  'CRM',
  'VZ',
  'GOOGL',
  'CMCSA',
  'BHC',
  'TEVA',
  'X',
  'VALE',
  'UTX',
  'CGC',
  'NIO',
  'CELG',
  'GME',
  'SLB',
  'DHI',
  'BBD',
  'AABA',
  'LULU',
  'SWN',
  'CS',
  'ITUB',
  'VIPS',
  'KMI',
  'PENN',
  'CRON',
  'BKNG',
  'HIG',
  'ZION',
  'FOXA',
  'CX',
  'YPF',
  'MDLZ',
  'DISH',
  'TTWO',
  'BPY',
  'DVN',
  'RRC',
  'GERN',
  'DLTR',
  'HUN',
  'LLY',
  'CZR',
  'KGC',
  'WMB',
  'ABBV',
  'DB',
  'BBBY',
  'KKR',
  'COP',
  'NWL',
  'MRO',
  'ACRX',
  'EXAS',
  'OXY',
  'AFL',
  'MPC',
  'AMGN',
  'ALLY',
  'MLCO',
  'SCHW',
  'APC',
  'MAT',
  'AXL',
  'WDAY',
  'CAR',
  'CTSH',
  'TSN',
  'ITB',
  'XHB',
  'TPR',
  'EOG',
  'PSX',
  'SU',
  'SC',
  'CNC',
  'TRMB',
  'DXC',
  'XLNX',
  'MTW',
  'ECL',
  'CPB',
  'TRIP',
  'HYG',
  'EEM',
  'SH',
  'LC',
  'DLR',
  'AMT',
  'WELL',
  'TZA',
  'TQQQ',
  'SPXS',
  'FAZ',
  'SDS',
  'SPXU',
  'NI',
  'ARRY',
  'OIH',
  'SQQQ',
  'AGN',
  'ANTM',
  'ADSK',
  'AVYA',
  'CHTR',
  'LNG',
  'CI',
  'HLT',
  'IQV',
  'LKQ',
  'NOW',
  'TJX',
  'VMW',
  'SPLK',
  'AZO',
  'BUD',
  'MDB',
  'TTD',
  'SHOP',
  'VEEV',
  'HUBS',
  'FSLY',
  'SOHU',
  'LYFT',
  'UBER',
  'WORK',
  'PINS'
];

const Stocks: AlgoParam[] = [];

for (const s of stockList) {
  Stocks.push(createParam(s));
}

export default Stocks;
