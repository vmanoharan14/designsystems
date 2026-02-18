import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const buttonCss = fs.readFileSync(path.resolve('dist/components/button.css'), 'utf-8')

describe('Button CSS', () => {
  describe('Base styles', () => {
    it('should have .btn base class', () => {
      expect(buttonCss).toContain('.btn {')
    })

    it('should use CSS variables for styling', () => {
      expect(buttonCss).toContain('var(--')
    })

    it('should have font-family from tokens', () => {
      expect(buttonCss).toContain('var(--font-family')
    })

    it('should have padding from tokens', () => {
      expect(buttonCss).toContain('var(--btn-primary-padding')
    })

    it('should have border-radius', () => {
      expect(buttonCss).toContain('border-radius')
    })

    it('should have transition for state changes', () => {
      expect(buttonCss).toContain('transition')
    })
  })

  describe('Primary variant', () => {
    it('should have .btn-primary class', () => {
      expect(buttonCss).toContain('.btn-primary')
    })

    it('should use primary token for background', () => {
      expect(buttonCss).toContain('var(--btn-primary-main)')
    })

    it('should have hover state', () => {
      expect(buttonCss).toContain('.btn-primary:hover')
      expect(buttonCss).toContain('var(--btn-primary-hover)')
    })

    it('should have focus state', () => {
      expect(buttonCss).toContain('.btn-primary:focus')
    })

    it('should have active/pressed state', () => {
      expect(buttonCss).toMatch(/\.btn-primary:active|\.btn-primary\.active/)
    })

    it('should have disabled state', () => {
      expect(buttonCss).toContain('.btn-primary:disabled')
    })
  })

  describe('Secondary variant', () => {
    it('should have .btn-secondary class', () => {
      expect(buttonCss).toContain('.btn-secondary')
    })

    it('should use secondary tokens', () => {
      expect(buttonCss).toContain('var(--btn-secondary-bg-main)')
      expect(buttonCss).toContain('var(--btn-secondary-border-main)')
    })

    it('should have hover state', () => {
      expect(buttonCss).toContain('.btn-secondary:hover')
    })

    it('should have disabled state', () => {
      expect(buttonCss).toContain('.btn-secondary:disabled')
    })
  })

  describe('Figma adherence', () => {
    it('should NOT have .btn-tertiary (not in Figma)', () => {
      expect(buttonCss).not.toContain('.btn-tertiary')
    })

    it('should NOT have .btn-sm (not in Figma)', () => {
      expect(buttonCss).not.toContain('.btn-sm')
    })

    it('should NOT have .btn-lg (not in Figma)', () => {
      expect(buttonCss).not.toContain('.btn-lg')
    })

    it('should NOT have .btn-icon class (not in Figma)', () => {
      expect(buttonCss).not.toContain('.btn-icon')
    })
  })
})
