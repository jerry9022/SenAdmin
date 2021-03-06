/**
 * Created by jerry on 2018/6/5.
 */
import * as API from './base'
const name = 'category'

export default {
  all: () => {
    return API.GET(`/api/${name}/all`)
  },
  findList: params => {
    return API.GET(`/api/${name}/findlist`, params)
  },
  findById: (id) => {
    return API.GET(`/api/${name}/find/${id}`)
  },
  add: params => {
    return API.POST(`/api/${name}/add`, params)
  },
  update: (id, params) => {
    return API.POST(`/api/${name}/update/${id}`, params)
  },
  delete: id => {
    return API.POST(`/api/${name}/delete/${id}`)
  }
}
