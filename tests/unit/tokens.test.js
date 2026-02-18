import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const distPath = path.resolve('dist')

describe('Tokens CSS', () => {
  let tokensCss
  let themesCss

  beforeAll(() => {
    tokensCss = fs.readFileSync(path.join(distPath, 'tokens.css'), 'utf-8')
    themesCss = fs.readFileSync(path.join(distPath, 'themes.css'), 'utf-8')
  })

  describe('Primitives (tokens.css)', () => {
    it('should have typography tokens', () => {
      expect(tokensCss).toContain('--font-family-font')
      expect(tokensCss).toContain('--font-size-sm')
      expect(tokensCss).toContain('--font-size-md')
      expect(tokensCss).toContain('--font-weight-regular')
      expect(tokensCss).toContain('--font-weight-bold')
    })

    it('should have color tokens', () => {
      expect(tokensCss).toContain('--gray-0')
      expect(tokensCss).toContain('--gray-90')
      expect(tokensCss).toContain('--gray-100')
    })

    it('should have spacing tokens', () => {
      expect(tokensCss).toContain('--padding-4')
      expect(tokensCss).toContain('--padding-8')
      expect(tokensCss).toContain('--padding-16')
    })

    it('should have radius tokens', () => {
      expect(tokensCss).toContain('--small')
      expect(tokensCss).toContain('--regular')
      expect(tokensCss).toContain('--medium')
    })
  })

  describe('Component Tokens (themes.css)', () => {
    it('should have horizon theme', () => {
      expect(themesCss).toContain('[data-theme="horizon"]')
    })

    it('should have braven theme', () => {
      expect(themesCss).toContain('[data-theme="braven"]')
    })

    it('should have :root defaults', () => {
      expect(themesCss).toContain(':root')
    })

    it('should have button tokens', () => {
      expect(themesCss).toContain('--btn-primary-main')
      expect(themesCss).toContain('--btn-primary-hover')
      expect(themesCss).toContain('--btn-primary-pressed')
      expect(themesCss).toContain('--btn-secondary-bg-main')
    })

    it('should have alert tokens', () => {
      expect(themesCss).toContain('--alert-bg-error')
      expect(themesCss).toContain('--alert-bg-warning')
      expect(themesCss).toContain('--alert-bg-success')
      expect(themesCss).toContain('--alert-bg-info')
    })

    it('should NOT have tertiary button tokens (not in Figma)', () => {
      expect(themesCss).not.toContain('--btn-tertiary-main')
    })
  })
})

describe('Theme Token Values', () => {
  let themesCss

  beforeAll(() => {
    themesCss = fs.readFileSync(path.join(distPath, 'themes.css'), 'utf-8')
  })

  it('should have different primary colors per theme', () => {
    const horizonMatch = themesCss.match(/\[data-theme="horizon"\][^}]*--btn-primary-main:\s*([^;]+);/)
    const bravenMatch = themesCss.match(/\[data-theme="braven"\][^}]*--btn-primary-main:\s*([^;]+);/)
    
    expect(horizonMatch).toBeDefined()
    expect(bravenMatch).toBeDefined()
    expect(horizonMatch[1]).not.toBe(bravenMatch[1])
  })
})
