import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const alertCss = fs.readFileSync(path.resolve('dist/components/alert.css'), 'utf-8')

describe('Alert CSS', () => {
  describe('Base styles', () => {
    it('should have .alert base class', () => {
      expect(alertCss).toContain('.alert {')
    })

    it('should use CSS variables for styling', () => {
      expect(alertCss).toContain('var(--')
    })

    it('should have padding from tokens', () => {
      expect(alertCss).toContain('var(--alert-padding')
    })

    it('should have border-radius', () => {
      expect(alertCss).toContain('border-radius')
    })
  })

  describe('Alert elements', () => {
    it('should have .alert-content class', () => {
      expect(alertCss).toContain('.alert-content')
    })

    it('should have .alert-title class', () => {
      expect(alertCss).toContain('.alert-title')
    })

    it('should have .alert-body class', () => {
      expect(alertCss).toContain('.alert-body')
    })

    it('should have .alert-icon class', () => {
      expect(alertCss).toContain('.alert-icon')
    })
  })

  describe('Error variant', () => {
    it('should have .alert-error class', () => {
      expect(alertCss).toContain('.alert-error')
    })

    it('should use error tokens', () => {
      expect(alertCss).toContain('var(--alert-bg-error)')
      expect(alertCss).toContain('var(--alert-icon-error)')
    })
  })

  describe('Warning variant', () => {
    it('should have .alert-warning class', () => {
      expect(alertCss).toContain('.alert-warning')
    })

    it('should use warning tokens', () => {
      expect(alertCss).toContain('var(--alert-bg-warning)')
      expect(alertCss).toContain('var(--alert-icon-warning)')
    })
  })

  describe('Success variant', () => {
    it('should have .alert-success class', () => {
      expect(alertCss).toContain('.alert-success')
    })

    it('should use success tokens', () => {
      expect(alertCss).toContain('var(--alert-bg-success)')
      expect(alertCss).toContain('var(--alert-icon-success)')
    })
  })

  describe('Info variant', () => {
    it('should have .alert-info class', () => {
      expect(alertCss).toContain('.alert-info')
    })

    it('should use info tokens', () => {
      expect(alertCss).toContain('var(--alert-bg-info)')
      expect(alertCss).toContain('var(--alert-icon-info)')
    })
  })
})
