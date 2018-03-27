import {
  mount,
} from '@vue/test-utils'
import Vue from 'vue'
import Component from '@/components/UProse.vue'

describe(`${Component.name}.vue`, () => {
  it('Parses markdown', () => {
    const defaultSlotContent = `# Hello **World**\n`
    const wrapper = mount(Component, {
      slots: {
        default: defaultSlotContent,
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
