import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const readCss = (file) => fs.readFileSync(path.join('./dist/components', file), 'utf-8')

describe('Feedback Status Components', () => {
  describe('Badges CSS', () => {
    it('SHALL have badge class', () => {
      const css = readCss('badges.css')
      expect(css).toContain('.badge')
    })
    it('SHALL have badge variants', () => {
      const css = readCss('badges.css')
      expect(css).toContain('.badge-default')
      expect(css).toContain('.badge-primary')
      expect(css).toContain('.badge-success')
      expect(css).toContain('.badge-warning')
      expect(css).toContain('.badge-error')
    })
  })

  describe('Chip CSS', () => {
    it('SHALL have chip class', () => {
      const css = readCss('chip.css')
      expect(css).toContain('.chip')
    })
    it('SHALL have chip states', () => {
      const css = readCss('chip.css')
      expect(css).toContain('.chip-default')
      expect(css).toContain('.chip-primary')
      expect(css).toContain('.chip-selected')
      expect(css).toContain('.chip-disabled')
    })
  })

  describe('Progress CSS', () => {
    it('SHALL have progress class', () => {
      const css = readCss('progress.css')
      expect(css).toContain('.progress')
      expect(css).toContain('.progress-bar')
    })
    it('SHALL have progress sizes', () => {
      const css = readCss('progress.css')
      expect(css).toContain('.progress-lg')
      expect(css).toContain('.progress-sm')
    })
  })

  describe('Preloader CSS', () => {
    it('SHALL have preloader class', () => {
      const css = readCss('preloader.css')
      expect(css).toContain('.preloader')
      expect(css).toContain('.preloader-spinner')
    })
    it('SHALL have spin animation', () => {
      const css = readCss('preloader.css')
      expect(css).toContain('@keyframes spin')
    })
  })

  describe('Tooltips CSS', () => {
    it('SHALL have tooltip class', () => {
      const css = readCss('tooltips.css')
      expect(css).toContain('.tooltip')
      expect(css).toContain('.tooltip-content')
    })
    it('SHALL have tooltip positions', () => {
      const css = readCss('tooltips.css')
      expect(css).toContain('.tooltip-top')
      expect(css).toContain('.tooltip-bottom')
      expect(css).toContain('.tooltip-left')
      expect(css).toContain('.tooltip-right')
    })
  })

  describe('Disclaimers CSS', () => {
    it('SHALL have disclaimer class', () => {
      const css = readCss('disclaimers.css')
      expect(css).toContain('.disclaimer')
    })
    it('SHALL have disclaimer variants', () => {
      const css = readCss('disclaimers.css')
      expect(css).toContain('.disclaimer-info')
      expect(css).toContain('.disclaimer-warning')
      expect(css).toContain('.disclaimer-error')
      expect(css).toContain('.disclaimer-success')
    })
  })
})
