/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


module.exports = {

  cloud: [
    'what-is-cloud', // Directly set the doc ID to refer to the doc. Omit the file name suffix such as .md.
    {
      type: 'category',
      label: 'NebulaGraph on AWS',
      link: {
        type: 'generated-index',
      },
      items: [
        'nebula-cloud-on-aws/aws-overview',
        'nebula-cloud-on-aws/aws-architecture',
        'nebula-cloud-on-aws/aws-planning-deployment',
        'nebula-cloud-on-aws/aws-deployment-steps',
        'nebula-cloud-on-aws/aws-connect-to-services',
      ],
    },
  ],

};
