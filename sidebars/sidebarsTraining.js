/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 module.exports = {
  training: [
    'index', // Directly set the doc ID to refer to the doc. Omit the file name suffix such as .md.
    {
      type: 'category',
      label: '图技术基础',
      link: {
        type: 'generated-index',
      },
      items: [
        'graph-basics/overview',
        'graph-basics/basic-knowledge-graph',
        'graph-basics/basic-knowledge-graph-structure',
        'graph-basics/basic-knowledge-graph-property',
      ],
    },
  ],
  
  };
  