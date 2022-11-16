 module.exports = {
  training: [
    'intro', // Directly set the doc ID to refer to the doc. Omit the file name suffix such as .md.
    {
      type: 'category',
      label: '图技术基础',
      link: {
        type: 'doc',
        id: 'graph-basics/overview'
      },
      items: [
        'graph-basics/basic-knowledge-graph',
        'graph-basics/basic-knowledge-graph-structure',
        'graph-basics/basic-knowledge-graph-property',
      ],
    },
  ],
  
  };
  