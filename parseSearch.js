/**
 * 解析location.search为JSON对象
 */

function parseSearch(qs) {
  if (typeof qs != 'string') {
    throw new Error('search is not a string')
  }
  // 1. 清除?号
  qs = qs.slice(1)
  // 2. 使用map记录key,value
  const searchMap = {}
  qs = qs.split('&')
  for(let i = 0; i < qs.length; i++) {
    let [key, value] = qs[i].split('=')
    key = decodeURIComponent(key)
    value = decodeURIComponent(value)
    if (key.length) {
      searchMap[key] = value
    }
  }
  return searchMap
}

var testSearch = '?vt=45946492&keyword=bom&from_source=webtop_search&spm_id_from=333.1007&search_source=5&page=2&o=36'

const result = parseSearch(testSearch)
// console.log(result)


// 使用URLSearchParams API

let searchParams = new URLSearchParams(testSearch)
console.log(searchParams.get('vt'))
