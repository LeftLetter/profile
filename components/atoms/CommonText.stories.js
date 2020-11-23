import CommonText from '@/components/atoms/CommonText'

export default {
  title: 'components/atoms/CommonText',
}

const sampleText = 'サンプルテキストです。'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, { argTypes }) => ({
  components: { CommonText },
  props: Object.keys(argTypes),
  template: '<CommonText :text="text" :color="color" :size="size"/>',
})

export const Default = Template.bind({})
Default.args = { text: sampleText }
Default.storyName = 'デフォルト'

export const Small = Template.bind({})
Small.args = { text: sampleText, size: 's' }
Small.storyName = '小さい文字'

export const Middle = Template.bind({})
Middle.args = { text: sampleText }
Middle.storyName = '中くらいの文字'

export const Large = Template.bind({})
Large.args = { text: sampleText, size: 'l' }
Large.storyName = '大きい文字'

export const Warning = Template.bind({})
Warning.args = { text: sampleText, color: 'warning' }
Warning.storyName = 'ワーニングの色'

export const Error = Template.bind({})
Error.args = { text: sampleText, color: 'error' }
Error.storyName = 'エラーの色'
