import type { Meta, StoryObj } from '@storybook/react';

import { SeatMapComponent } from './SeatMapComponent';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: SeatMapComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof SeatMapComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MiniMap: Story = {
  args: {
    viewType: 'miniMap',
    wheeLable: true,
  },
};

export const Section: Story = {
  args: {
    viewType: 'section',
    wheeLable: true,
  },
};
