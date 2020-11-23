import CommonTitle from '@/components/atoms/CommonTitle'

export default {
  title: 'components/atoms/CommonTitle',
}

const sampleText = 'サンプルタイトル'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, { argTypes }) => ({
  components: { CommonTitle },
  props: Object.keys(argTypes),
  template:
    '<CommonTitle :text="text" :level="level" :visual-level="visualLevel"/>',
})

export const Default = Template.bind({})
Default.args = { text: sampleText }
Default.storyName = 'デフォルト'

export const H1 = Template.bind({})
H1.args = { text: sampleText, level: 1, visualLevel: 'h1' }
H1.storyName = 'h1'

export const H2 = Template.bind({})
H2.args = { text: sampleText, level: 2, visualLevel: 'h2' }
H2.storyName = 'h2'

export const H3 = Template.bind({})
H3.args = { text: sampleText, level: 3, visualLevel: 'h3' }
H3.storyName = 'h3'

export const H4 = Template.bind({})
H4.args = { text: sampleText, level: 4, visualLevel: 'h4' }
H4.storyName = 'h4'

export const H5 = Template.bind({})
H5.args = { text: sampleText, level: 5, visualLevel: 'h5' }
H5.storyName = 'h5'

export const H6 = Template.bind({})
H6.args = { text: sampleText, level: 6, visualLevel: 'h6' }
H6.storyName = 'h6'
