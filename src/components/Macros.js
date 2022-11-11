// Configure product objects in src/macrosConfig.js first, then
// follow the examples in this file to add macro tags.
// To use the macro tags in a Markdown file, import the JS modules in the MD file as follows:
// import { MacroCloudRelease, StudioMacros } from '@site/src/components/Macros'
// import { nebula, cloud, studio } from '@site/src/macrosConfig';
// Then use the macro tags in the content like:
// NebulaGraph <MacroNebulaRelease></MacroNebulaRelease>
// which will be rendered as NebulaGraph 3.3.0 (if the macro value is 3.3.0).

import React from 'react';
import { nebula, cloud, studio, dashboard, explorer } from '@site/src/macrosConfig';

export function MacroCloudRelease() {
    return (
      <span>{cloud.release}</span>
    );
  }

export function MacroStudioRelease() {
  return (
    <span>{studio.release}</span>
  );
}

export function MacroNebulaRelease() {
  return (
    <span>{nebula.release}</span>
  );
}

// To use macros in a code block, you must use the HTML tags pre and code as follows:
// <pre>
// <code>
// wget https://oss-cdn.nebula-graph.com.cn/package/<MacroNebulaRelease></MacroNebulaRelease>/nebula-graph-<MacroNebulaRelease></MacroNebulaRelease>.el7.x86_64.rpm
// </code>
// </pre>