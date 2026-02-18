import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const readCss = (file) => fs.readFileSync(path.join('./dist/components', file), 'utf-8')

describe('Advanced Form Components', () => {
  describe('Date Picker CSS', () => {
    it('SHALL have date-picker class', () => {
      const css = readCss('date.css')
      expect(css).toContain('.date-picker')
    })
    it('SHALL have date-picker elements', () => {
      const css = readCss('date.css')
      expect(css).toContain('.date-picker-label')
      expect(css).toContain('.date-picker-input')
      expect(css).toContain('.date-picker-calendar')
    })
    it('SHALL have date-picker states', () => {
      const css = readCss('date.css')
      expect(css).toContain('.date-picker-input.error')
      expect(css).toContain('.date-picker-input.disabled')
    })
  })

  describe('Password CSS', () => {
    it('SHALL have password-input class', () => {
      const css = readCss('password.css')
      expect(css).toContain('.password-input')
    })
    it('SHALL have password elements', () => {
      const css = readCss('password.css')
      expect(css).toContain('.password-field')
      expect(css).toContain('.password-input-field')
      expect(css).toContain('.password-toggle')
    })
    it('SHALL have password strength indicators', () => {
      const css = readCss('password.css')
      expect(css).toContain('.password-strength')
      expect(css).toContain('.password-strength-fill.weak')
      expect(css).toContain('.password-strength-fill.strong')
    })
    it('SHALL have password states', () => {
      const css = readCss('password.css')
      expect(css).toContain('.password-input-field.error')
      expect(css).toContain('.password-input-field.success')
    })
  })
})
