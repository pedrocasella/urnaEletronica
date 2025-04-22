import '@testing-library/jest-dom/extend-expect'
import 'jest-canvas-mock'

const { defineProperty } = Object

Object.defineProperty = function (object, name, meta) {
  if (meta.get && !meta.configurable) {
    return defineProperty(object, name, {
      ...meta,
      configurable: true,
    })
  }

  return defineProperty(object, name, meta)
}
