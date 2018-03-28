import {
  mount,
} from '@vue/test-utils'

import UProse from '@/components/UProse.vue'

describe(`${UProse.name}`, () => {
  it('Parses markdown', () => {
    const defaultSlotContent = `# Hello **World**\n`
    const wrapper = mount(UProse, {
      slots: {
        default: defaultSlotContent,
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
