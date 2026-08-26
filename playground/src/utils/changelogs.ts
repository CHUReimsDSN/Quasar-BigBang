export type TChanglog = {
  version: string;
  date: string;
  caption?: string;
  changes: string[];
};

export const changelogs = <TChanglog[]>[
  {
    version: '0.0.1',
    date: '2026/08/26',
    changes: [
      'Added documentation'
    ]
  },
]
