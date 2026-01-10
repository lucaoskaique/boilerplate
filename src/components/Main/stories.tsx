import type { Meta, StoryObj } from '@storybook/react'

import Main from '.'

const meta: Meta<typeof Main> = {
  title: 'Components/Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
}

export default meta
type Story = StoryObj<typeof Main>

export const Basic: Story = {
  args: {
    title: 'title basic',
    description: 'description basic'
  }
}

export const Default: Story = {}
