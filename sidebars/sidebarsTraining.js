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
      link:  {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: '图基础知识',
          link: {
            type: 'doc',
            id: 'graph-basics/basic-knowledge/overview'
          },
          items: [
            'graph-basics/basic-knowledge/basic-knowledge-graph',
            'graph-basics/basic-knowledge/basic-knowledge-graph-structure',
            'graph-basics/basic-knowledge/basic-knowledge-graph-property',
          ],
        },
        {
          type: 'category',
          label: '磨人小概念',
          link: {
            type: 'doc',
            id: 'graph-basics/widen-knowledge/overview'
          },
          items: [
            'graph-basics/widen-knowledge/tag-edgetype-rank-vid',
            'graph-basics/widen-knowledge/dangling-edge',
            'graph-basics/widen-knowledge/path-type',
            'graph-basics/widen-knowledge/selfloop',

          ],
        },
      ],
    },
    'practice-cloud-deployment',
    {
      type: 'category',
      label: 'NebulaGraph 简介',
      link:  {
        type: 'doc',
        id: 'nebulagraph-intro/overview'
      },
      items: [
        'nebulagraph-intro/nebulagraph-concept',
        'nebulagraph-intro/nebulagraph-architecture',
        'nebulagraph-intro/nebulagraph-features',
      ],
    },
    'practice-nebulagraph-app',
  ],
  
  };
  