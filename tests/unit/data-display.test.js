import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const readCss = (file) => fs.readFileSync(path.join('./dist/components', file), 'utf-8')

describe('Data Display Components', () => {
  describe('Avatar CSS', () => {
    it('SHALL have avatar class', () => {
      const css = readCss('avatar.css')
      expect(css).toContain('.avatar')
    })
    it('SHALL have avatar sizes and colors', () => {
      const css = readCss('avatar.css')
      expect(css).toContain('.avatar-sm')
      expect(css).toContain('.avatar-lg')
      expect(css).toContain('.avatar-blue')
      expect(css).toContain('.avatar-gray')
    })
  })

  describe('Card CSS', () => {
    it('SHALL have card class', () => {
      const css = readCss('card.css')
      expect(css).toContain('.card')
    })
    it('SHALL have card elements', () => {
      const css = readCss('card.css')
      expect(css).toContain('.card-header')
      expect(css).toContain('.card-body')
      expect(css).toContain('.card-title')
    })
  })

  describe('List CSS', () => {
    it('SHALL have list class', () => {
      const css = readCss('list.css')
      expect(css).toContain('.list')
    })
    it('SHALL have list elements', () => {
      const css = readCss('list.css')
      expect(css).toContain('.list-header')
      expect(css).toContain('.list-row')
    })
  })

  describe('Data Table CSS', () => {
    it('SHALL have data-table class', () => {
      const css = readCss('data.css')
      expect(css).toContain('.data-table')
    })
    it('SHALL have table elements', () => {
      const css = readCss('data.css')
      expect(css).toContain('.data-table th')
      expect(css).toContain('.data-table td')
    })
  })

  describe('Accordions CSS', () => {
    it('SHALL have accordion class', () => {
      const css = readCss('accordions.css')
      expect(css).toContain('.accordion')
    })
    it('SHALL have accordion elements', () => {
      const css = readCss('accordions.css')
      expect(css).toContain('.accordion-header')
      expect(css).toContain('.accordion-body')
    })
  })

  describe('Text Area CSS', () => {
    it('SHALL have text-area class', () => {
      const css = readCss('text.css')
      expect(css).toContain('.text-area')
    })
    it('SHALL have text-area states', () => {
      const css = readCss('text.css')
      expect(css).toContain('.text-area-input')
      expect(css).toContain('.text-area-input.error')
    })
  })
})
