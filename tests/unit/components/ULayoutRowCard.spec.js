import {
  mount,
} from '@vue/test-utils'

import ULayoutRowCard from '@/components/ULayoutRowCard.vue'

describe(`${ULayoutRowCard.name}`, () => {
  it('Parses markdown', () => {
    const title = `How much wood would a woodchuck chuck if a woodchuck could chuck wood?`
    const wrapper = mount(ULayoutRowCard, {
      propsData: {
        title,
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
