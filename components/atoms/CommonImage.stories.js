import CommonImage from '@/components/atoms/CommonImage'
import UserImage from '@/assets/icon_1000x1000.png'

export default {
  title: 'components/atoms/CommonImage',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, { argTypes }) => ({
  components: { CommonImage },
  props: Object.keys(argTypes),
  template:
    '<CommonImage :src="src" :alt="alt" :width="width" :height="height" :shape="shape"/>',
})

export const Default = Template.bind({})
Default.args = { src: UserImage }
Default.storyName = 'デフォルト'

export const Circle = Template.bind({})
Circle.args = { src: UserImage, shape: 'circle' }
Circle.storyName = '円形'

export const Small = Template.bind({})
Small.args = { src: UserImage, width: 100, height: 100 }
Small.storyName = '小サイズ'
