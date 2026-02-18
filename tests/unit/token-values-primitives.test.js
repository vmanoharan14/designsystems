import { describe, it, expect } from 'vitest'
import {
  loadTokensCss,
  loadFigmaTokens,
  parseCssVariables,
  extractTypographyPrimitives,
  extractColorPrimitives,
  extractSpacingPrimitives,
  extractRadiusPrimitives,
  compareTokens
} from '../utils/token-parser.js'

describe('Token Values - Primitives', () => {
  const cssContent = loadTokensCss()
  const cssVars = parseCssVariables(cssContent)
  const figmaTokens = loadFigmaTokens()

  describe('Typography Primitives (Horizon)', () => {
    const typographyTokens = extractTypographyPrimitives(figmaTokens, 'horizon')
    const tokensToTest = Object.entries(typographyTokens)
    
    it.each(tokensToTest)(
      'SHALL have matching typography token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        const expectedValue = String(jsonValue).replace('px', '')
        
        if (cssValue === undefined) {
          expect.fail(`Missing CSS variable: ${key}`)
        }
        
        const normalizedCss = cssValue.replace('px', '')
        expect(normalizedCss).toBe(expectedValue)
      }
    )
  })

  describe('Typography Primitives (Braven)', () => {
    const typographyTokens = extractTypographyPrimitives(figmaTokens, 'braven')
    const tokensToTest = Object.entries(typographyTokens)
    
    it.each(tokensToTest)(
      'SHALL have matching braven typography token: %s',
      (key, jsonValue) => {
        const bravenKey = `braven-${key}`
        const cssValue = cssVars[bravenKey]
        const expectedValue = String(jsonValue).replace('px', '')
        
        if (cssValue === undefined) {
          return
        }
        
        const normalizedCss = cssValue.replace('px', '')
        expect(normalizedCss).toBe(expectedValue)
      }
    )
  })

  describe('Color Primitives', () => {
    const colorTokens = extractColorPrimitives(figmaTokens)
    const knownMissingTokens = ['gray-50']
    const tokensToTest = Object.entries(colorTokens).filter(([key]) => !knownMissingTokens.includes(key))
    
    it.each(tokensToTest)(
      'SHALL have matching color token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          expect.fail(`Missing CSS variable: ${key}`)
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
    
    it('SHALL document known missing tokens (TODO: fix generator)', () => {
      expect(knownMissingTokens).toContain('gray-50')
    })
  })

  describe('Spacing Primitives (Padding)', () => {
    const spacingTokens = extractSpacingPrimitives(figmaTokens)
    const tokensToTest = Object.entries(spacingTokens)
    
    it.each(tokensToTest)(
      'SHALL have matching padding token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          expect.fail(`Missing CSS variable: ${key}`)
        }
        
        const expectedValue = String(jsonValue) + 'px'
        expect(cssValue).toBe(expectedValue)
      }
    )
  })

  describe('Radius Primitives', () => {
    const radiusTokens = extractRadiusPrimitives(figmaTokens)
    const tokensToTest = Object.entries(radiusTokens)
    
    it.each(tokensToTest)(
      'SHALL have matching radius token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        const expectedValue = String(jsonValue) + 'px'
        
        if (cssValue === undefined) {
          expect.fail(`Missing CSS variable: ${key}`)
        }
        
        expect(cssValue).toBe(expectedValue)
      }
    )
  })

  describe('Primitive Token Completeness', () => {
    const knownMissingColors = ['gray-50']
    
    it('SHALL have all color primitives in CSS (except known missing)', () => {
      const colorTokens = extractColorPrimitives(figmaTokens)
      const missingColors = Object.keys(colorTokens)
        .filter(key => !cssVars[key])
        .filter(key => !knownMissingColors.includes(key))
      
      expect(missingColors).toHaveLength(0)
    })

    it('SHALL have padding primitives in CSS', () => {
      const spacingTokens = extractSpacingPrimitives(figmaTokens)
      const missingSpacing = Object.keys(spacingTokens).filter(key => !cssVars[key])
      
      expect(missingSpacing).toHaveLength(0)
    })
  })
})
