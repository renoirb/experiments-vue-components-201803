import { shallow } from '@vue/test-utils'
import Vue from 'vue'
import FooBranding from '@/components/FooBranding.vue'

describe('FooBranding.vue', () => {
  it('renders props.productName when passed', () => {
    const productName = 'sg59PgYRUqI79HW'
    const wrapper = shallow(FooBranding, {
      propsData: { productName }
    })
    expect(wrapper.text()).toMatch(productName)
    expect(wrapper.element).toMatchSnapshot()
  })
  it('Should have the following default markup', () => {
    // Thanks https://alexjoverm.github.io/2017/08/21/Write-the-first-Vue-js-Component-Unit-Test-in-Jest/
    let Component = Vue.extend(FooBranding) // Create a copy of the original component
    const vm = new Component({
      propsData: { // Replace data value with this fake data
        productName: 'SomethingElse'
      }
    }).$mount() // Instances and mounts the component
    expect(vm.$el).toMatchSnapshot()
  })
})
