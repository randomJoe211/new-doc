import React from 'react';
import { cloud, studio } from '@site/src/config.js';

export function CloudMacros() {
    return (
      <span>{cloud.release}</span>
    );
  }

export function StudioMacros() {
  return (
    <span>{studio.release}</span>
  );
}