export const content = {
  meta: {
    title: 'Onsite Insight · Version 3.2',
    subtitle: 'July – August 2026',
    audience: 'Client Review',
    footer: true,
  },
  sections: [
    {
      id: 'goals',
      label: 'Goals',
      type: 'two-col',
      eyebrow: 'VERSION 3.2',
      heading: 'Two goals for this version',
      icon: 'Target',
      left: {
        title: 'Development',
        icon: 'Code2',
        iconBg: '#035A71',
        items: [
          'Give workers a map-guided, sequential task experience',
          'Give supervisors the tools to set up and manage their company end-to-end',
        ],
      },
      right: {
        title: 'Research',
        icon: 'FlaskConical',
        iconBg: '#046D89',
        items: [
          'Validate the product performance and value in a real construction site pilot',
          'Define what success looks like for workers and supervisors in the field',
        ],
      },
    },
    {
      id: 'pilot',
      label: 'Research Pilot',
      type: 'three-col',
      eyebrow: 'RESEARCH',
      heading: 'Pilot plan',
      columns: [
        {
          label: 'Before',
          items: [
            { title: 'Technical setup', body: 'What should be pre-defined or pre-built? User creation, company creation, key features in development.' },
            { title: 'Define what we want to test', body: 'Write the hypotheses. Identify which features and flows matter most. Write the questions to ask.' },
            { title: 'Understand the user context', body: 'Industry, phones, uniforms, language, BLE vs audio vs both, number of users, pilot duration.' },
            { title: 'Define feedback collection', body: 'Anything we should build? Prepare forms? Plan interviews?' },
          ],
        },
        {
          label: 'During',
          items: [
            { title: 'What do you need from our side?', body: 'We want to make sure you have everything you need to run the pilot smoothly.' },
            { title: 'Field observation — recommended', body: 'Have someone present at the site. Take notes and photo register of what happens in real conditions.' },
            { title: 'Track task completion', body: 'Monitor success rates as workers interact with the product during the pilot.' },
          ],
        },
        {
          label: 'After',
          items: [
            { title: 'Interviews', body: 'Talk to workers and managers to capture their experience and pain points.' },
            { title: 'Analyze collected data', body: 'Resume and process everything gathered during the pilot — notes, metrics, feedback.' },
            { title: 'Map fixes and features', body: 'Turn findings into concrete product improvements and new stories.' },
            { title: 'Define next steps', body: 'Align on what comes next based on what we learned.' },
          ],
        },
      ],
    },
    {
      id: 'epics',
      label: 'V3.2 Features',
      type: 'epics',
      eyebrow: 'DEVELOPMENT',
      heading: "What we're building",
      icon: 'Layers',
      epics: [
        {
          number: 'Epic 1',
          title: 'Maps & Sequences',
          goal: 'Give workers a map-guided, sequential task experience.',
          features: [
            'Map view — site map with location and audio points  · #492',
            'Map view — tap a marker to navigate to that task  · #493',
            'Mandatory floor & BLE auto-assignment  · #496',
            'Sequence logic in SDK (ordered audio list)  · #467',
            'Sequences on the map — numbered markers, auto-play in order  · #499',
            'Filter by floor in map view  · #530',
          ],
        },
        {
          number: 'Epic 2',
          title: 'Task Progress & Follow-up',
          goal: 'Let workers track and update task outcomes in the field.',
          features: [
            'Edit task status within the same shift  · #517',
            'Reminder push notification for unresolved tasks  · #505',
            'Push notification setup — SDK  · #531',
          ],
        },
        {
          number: 'Epic 3',
          title: 'Company Management',
          goal: 'Give supervisors end-to-end company setup and control.',
          features: [
            'Company Admin can create companies  · #405',
            'Mandatory setup wizard after company creation  · #455',
            'Supervisor sets company timezone for temporary audios  · #520',
            'Glossary tooltips V1 — core product terms  · #406',
            'Glossary tooltips V2 — audio point creation modal  · #407',
            'Glossary tooltips V3 — envelopes and shift summary  · #408',
          ],
        },
        {
          number: 'Epic 4',
          title: 'Platform Reliability',
          goal: 'Fix known issues and ensure stability in the field.',
          features: [
            'Fix: envelope names with special characters (ñ) not loading  · #459',
            'Fix: case-sensitive search in audio point filter  · #414',
            'Fix: BLE audio state not resetting after re-login  · #475',
            'SDK alert system analysis  · #514',
          ],
        },
      ],
    },
    {
      id: 'pricing',
      label: 'Investment',
      type: 'pricing',
      eyebrow: 'INVESTMENT',
      heading: 'Scope & team',
      price: '$23k',
      priceLabel: 'Per month · July – August 2026',
    },
  ],
  closing: {
    title: 'Thank you.',
    subtitle: 'Questions, feedback, priorities.',
  },
};
