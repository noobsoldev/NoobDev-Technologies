import React from 'react';
import { Terminal, CodeSnippet } from './Terminal';

export const HeroTerminal = () => {
  return (
    <Terminal className="transform rotate-1 lg:rotate-3 hover:rotate-0 transition-transform duration-500">
      <CodeSnippet code={`// Initialize business automation
const studio = new NoobDevStudio();

studio.on('manual_task', (task) => {
  console.log('Automating: ' + task.name);
  return studio.ai.solve(task);
});

// Connected Services
const tools = ['Zapier', 'Make', 'Airtable', 'HubSpot'];
studio.connect(tools);

studio.deploy({
  mode: 'scaling',
  code: false
});`} />
    </Terminal>
  );
};
