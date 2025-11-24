import { Article, Region, SourceType } from '../types';

const getDate = (daysAgo: number) => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString();
};

export const MOCK_ARTICLES: Article[] = [
  // --- MANITOBA ---
  {
    id: 'mb-1',
    headline: 'University of Manitoba Receives Historic Research Funding Boost',
    url: 'https://news.umanitoba.ca/historic-research-funding/',
    sourceName: 'University of Manitoba',
    sourceType: SourceType.INSTITUTION,
    region: Region.MANITOBA,
    publishedAt: getDate(0),
    summary: 'The U of M has secured $15M in federal grants to support climate change research in the Arctic, marking a significant milestone for the Faculty of Science.',
    tags: [
      { id: 't1', label: 'University of Manitoba', type: 'institution' },
      { id: 't2', label: 'Research Funding', type: 'topic' }
    ],
    isSuccessStory: true,
    imageUrl: 'https://picsum.photos/seed/mb1/800/400'
  },
  {
    id: 'mb-2',
    headline: 'RRC Polytech Announces New Digital Media Lab',
    url: 'https://www.rrc.ca/news/digital-media-lab/',
    sourceName: 'RRC Polytech News',
    sourceType: SourceType.INSTITUTION,
    region: Region.MANITOBA,
    publishedAt: getDate(0),
    summary: 'A new state-of-the-art facility will open downtown next fall, expanding capacity for the Digital Media Design program by 30%.',
    tags: [
      { id: 't3', label: 'Red River College Polytechnic', type: 'institution' },
      { id: 't4', label: 'Campus Development', type: 'topic' }
    ],
    isSuccessStory: true,
  },
  {
    id: 'mb-3',
    headline: 'UMFA Statement on Latest Bargaining Round',
    url: 'http://www.umfa.ca/news/bargaining-update',
    sourceName: 'UMFA',
    sourceType: SourceType.FACULTY_ASSOC,
    region: Region.MANITOBA,
    publishedAt: getDate(1),
    summary: 'The University of Manitoba Faculty Association has released a statement expressing concerns over workload distribution in the latest proposal.',
    tags: [
      { id: 't5', label: 'University of Manitoba', type: 'institution' },
      { id: 't6', label: 'Labour Relations', type: 'topic' },
      { id: 't7', label: 'Bargaining', type: 'topic' }
    ]
  },
  {
    id: 'mb-4',
    headline: 'Tuition Hikes Protested at Legislature',
    url: 'https://www.cbc.ca/news/canada/manitoba/students-protest-tuition-hikes',
    sourceName: 'CBC Manitoba',
    sourceType: SourceType.MAINSTREAM_MEDIA,
    region: Region.MANITOBA,
    publishedAt: getDate(1),
    summary: 'Students from three major Manitoba universities gathered to protest the proposed 3.5% tuition increase for international students.',
    tags: [
      { id: 't8', label: 'Tuition & Fees', type: 'topic' },
      { id: 't9', label: 'Student Action', type: 'topic' }
    ]
  },
  {
    id: 'mb-5',
    headline: 'Brandon University Launches New Indigenous Health Program',
    url: 'https://www.brandonu.ca/news/indigenous-health-program/',
    sourceName: 'Brandon University',
    sourceType: SourceType.INSTITUTION,
    region: Region.MANITOBA,
    publishedAt: getDate(3),
    summary: 'A new interdisciplinary program aimed at improving health outcomes in Indigenous communities will begin accepting students next semester.',
    tags: [
        { id: 't20', label: 'Brandon University', type: 'institution' },
        { id: 't21', label: 'Indigenous Health', type: 'topic' }
    ],
    isSuccessStory: true
  },
  {
    id: 'mb-6',
    headline: 'U of W President Announces Retirement',
    url: 'https://www.uwinnipeg.ca/news/president-announcement/',
    sourceName: 'University of Winnipeg',
    sourceType: SourceType.INSTITUTION,
    region: Region.MANITOBA,
    publishedAt: getDate(5),
    summary: 'After a decade of leadership, the President of the University of Winnipeg has announced plans to retire at the end of the academic year.',
    tags: [
        { id: 't22', label: 'University of Winnipeg', type: 'institution' },
        { id: 't23', label: 'Governance', type: 'topic' }
    ]
  },
  {
    id: 'mb-7',
    headline: 'ACC Expands Rural Nursing Cohort',
    url: 'https://assiniboine.net/news/rural-nursing-expansion/',
    sourceName: 'Assiniboine Community College',
    sourceType: SourceType.INSTITUTION,
    region: Region.MANITOBA,
    publishedAt: getDate(8),
    summary: 'Assiniboine Community College is adding 25 new seats to its practical nursing program in Dauphin to address local shortages.',
    tags: [
        { id: 't24', label: 'Assiniboine Community College', type: 'institution' },
        { id: 't25', label: 'Nursing', type: 'topic' }
    ]
  },
  {
    id: 'mb-8',
    headline: 'Province Reviews Post-Secondary Funding Model',
    url: 'https://winnipegfreepress.com/local/province-funding-review',
    sourceName: 'Winnipeg Free Press',
    sourceType: SourceType.MAINSTREAM_MEDIA,
    region: Region.MANITOBA,
    publishedAt: getDate(12),
    summary: 'The provincial government has launched a consultation to review how operating grants are distributed among colleges and universities.',
    tags: [
        { id: 't26', label: 'Provincial Gov', type: 'topic' },
        { id: 't27', label: 'Funding', type: 'topic' }
    ]
  },


  // --- CANADA ---
  {
    id: 'can-1',
    headline: 'One Thought to Start Your Day: The Blue-Ribbon Panel Fallout',
    url: 'https://higheredstrategy.com/blog/blue-ribbon-fallout/',
    sourceName: 'HESA (Alex Usher)',
    sourceType: SourceType.SECTOR_BLOG,
    region: Region.CANADA,
    publishedAt: getDate(0),
    summary: 'Analyzing the long-term implications of the Ontario government\'s response to the expert panel on financial sustainability.',
    tags: [
      { id: 't10', label: 'Policy', type: 'topic' },
      { id: 't11', label: 'Finance', type: 'topic' }
    ]
  },
  {
    id: 'can-2',
    headline: 'Federal Cap on International Student Permits: Updates',
    url: 'https://www.theglobeandmail.com/canada/article-international-student-cap-updates/',
    sourceName: 'Globe and Mail',
    sourceType: SourceType.MAINSTREAM_MEDIA,
    region: Region.CANADA,
    publishedAt: getDate(1),
    summary: 'Immigration officials clarify new exemption rules for masters and doctoral students under the new permit cap.',
    tags: [
      { id: 't12', label: 'International Students', type: 'topic' },
      { id: 't13', label: 'Federal Policy', type: 'topic' }
    ]
  },
  {
    id: 'can-3',
    headline: 'McGill Law Professors Strike Continues',
    url: 'https://www.caut.ca/news/mcgill-strike-update',
    sourceName: 'CAUT / ACPPU',
    sourceType: SourceType.FACULTY_ASSOC,
    region: Region.CANADA,
    publishedAt: getDate(1),
    summary: 'The Association of McGill Professors of Law (AMPL) remains on the picket line as negotiations stall over union recognition.',
    tags: [
      { id: 't14', label: 'Labour Relations', type: 'topic' },
      { id: 't15', label: 'Strike', type: 'topic' }
    ]
  },
  {
    id: 'can-4',
    headline: 'Tri-Council Funding Stagnation Concerns Researchers',
    url: 'https://universityaffairs.ca/news/tri-council-funding/',
    sourceName: 'University Affairs',
    sourceType: SourceType.MAINSTREAM_MEDIA,
    region: Region.CANADA,
    publishedAt: getDate(4),
    summary: 'Graduate students and post-docs across Canada are petitioning for increased federal research grants, citing cost of living increases.',
    tags: [
        { id: 't28', label: 'Research', type: 'topic' },
        { id: 't29', label: 'Federal Funding', type: 'topic' }
    ]
  },
  {
    id: 'can-5',
    headline: 'Alberta Institutions Face Budget Cuts',
    url: 'https://edmontonjournal.com/news/local-news/university-budget-cuts',
    sourceName: 'Edmonton Journal',
    sourceType: SourceType.MAINSTREAM_MEDIA,
    region: Region.CANADA,
    publishedAt: getDate(9),
    summary: 'Several major Alberta universities are preparing for budget reductions in the upcoming fiscal year following provincial directives.',
    tags: [
        { id: 't30', label: 'Alberta', type: 'topic' },
        { id: 't31', label: 'Budgets', type: 'topic' }
    ]
  },


  // --- INTERNATIONAL ---
  {
    id: 'intl-1',
    headline: 'US FAFSA Delays Cause Chaos for Fall Enrolment',
    url: 'https://www.chronicle.com/article/fafsa-delays-chaos',
    sourceName: 'Chronicle of Higher Ed',
    sourceType: SourceType.MAINSTREAM_MEDIA,
    region: Region.INTERNATIONAL,
    publishedAt: getDate(1),
    summary: 'Technical glitches in the new federal student aid form are delaying financial aid packages for millions of students.',
    tags: [
      { id: 't16', label: 'Student Aid', type: 'topic' },
      { id: 't17', label: 'USA', type: 'topic' }
    ]
  },
  {
    id: 'intl-2',
    headline: 'UK Universities Face Financial Crunch Amid Visa Restrictions',
    url: 'https://www.timeshighereducation.com/news/uk-visa-restrictions',
    sourceName: 'Times Higher Education',
    sourceType: SourceType.MAINSTREAM_MEDIA,
    region: Region.INTERNATIONAL,
    publishedAt: getDate(1),
    summary: 'A sharp decline in international applications is forcing several UK institutions to announce redundancy schemes.',
    tags: [
      { id: 't18', label: 'Global Ed', type: 'topic' },
      { id: 't19', label: 'Funding', type: 'topic' }
    ]
  },
  {
    id: 'intl-3',
    headline: 'Australia Tightens Student Visa Rules',
    url: 'https://www.smh.com.au/national/student-visa-crackdown',
    sourceName: 'Sydney Morning Herald',
    sourceType: SourceType.MAINSTREAM_MEDIA,
    region: Region.INTERNATIONAL,
    publishedAt: getDate(6),
    summary: 'The Australian government has introduced stricter English language requirements and "genuine student" tests to curb migration loopholes.',
    tags: [
        { id: 't32', label: 'Australia', type: 'topic' },
        { id: 't33', label: 'Immigration', type: 'topic' }
    ]
  },
  {
    id: 'intl-4',
    headline: 'Harvard Announces New Climate Initiative',
    url: 'https://news.harvard.edu/gazette/story/climate-initiative/',
    sourceName: 'Harvard Gazette',
    sourceType: SourceType.INSTITUTION,
    region: Region.INTERNATIONAL,
    publishedAt: getDate(10),
    summary: 'Harvard University is launching a $100M initiative to study climate adaptation strategies in developing nations.',
    tags: [
        { id: 't34', label: 'Harvard', type: 'institution' },
        { id: 't35', label: 'Research', type: 'topic' }
    ]
  }
];

export const getArticles = async (): Promise<Article[]> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_ARTICLES), 600);
  });
};