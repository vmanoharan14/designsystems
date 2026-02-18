import { describe, it, expect } from 'vitest'
import {
  loadThemesCss,
  loadFigmaTokens,
  parseThemeCssVariables,
  extractComponentTokens,
  getAllComponentTokenKeys
} from '../utils/token-parser.js'

describe('Token Values - Braven Theme', () => {
  const cssContent = loadThemesCss()
  const cssVars = parseThemeCssVariables(cssContent, 'braven')
  const figmaTokens = loadFigmaTokens()
  const bravenTokens = extractComponentTokens(figmaTokens, 'braven')
  const allTokenKeys = getAllComponentTokenKeys(figmaTokens, 'braven')

  describe('Button Tokens - Braven', () => {
    const buttonTokens = Object.entries(bravenTokens)
      .filter(([key]) => key.startsWith('btn-'))
    
    it.each(buttonTokens)(
      'SHALL have matching braven button token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          expect.fail(`Missing CSS variable: --${key}`)
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Alert Tokens - Braven', () => {
    const alertTokens = Object.entries(bravenTokens)
      .filter(([key]) => key.startsWith('alert-'))
    
    it.each(alertTokens)(
      'SHALL have matching braven alert token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          expect.fail(`Missing CSS variable: --${key}`)
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Avatar Tokens - Braven', () => {
    const avatarTokens = Object.entries(bravenTokens)
      .filter(([key]) => key.startsWith('avatar-'))
    
    it.each(avatarTokens)(
      'SHALL have matching braven avatar token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Chip Tokens - Braven', () => {
    const chipTokens = Object.entries(bravenTokens)
      .filter(([key]) => key.startsWith('chip-'))
    
    it.each(chipTokens)(
      'SHALL have matching braven chip token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Data Table Tokens - Braven', () => {
    const dataTokens = Object.entries(bravenTokens)
      .filter(([key]) => key.startsWith('data-'))
    
    it.each(dataTokens)(
      'SHALL have matching braven data-table token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Input Tokens - Braven', () => {
    const inputTokens = Object.entries(bravenTokens)
      .filter(([key]) => key.startsWith('input') || key.startsWith('inputs-'))
    
    it.each(inputTokens)(
      'SHALL have matching braven input token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Header Tokens - Braven', () => {
    const headerTokens = Object.entries(bravenTokens)
      .filter(([key]) => key.startsWith('header-'))
    
    it.each(headerTokens)(
      'SHALL have matching braven header token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Footer Tokens - Braven', () => {
    const footerTokens = Object.entries(bravenTokens)
      .filter(([key]) => key.startsWith('footer-'))
    
    it.each(footerTokens)(
      'SHALL have matching braven footer token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Sidebar Tokens - Braven', () => {
    const sidebarTokens = Object.entries(bravenTokens)
      .filter(([key]) => key.startsWith('sidebar-'))
    
    it.each(sidebarTokens)(
      'SHALL have matching braven sidebar token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Pagination Tokens - Braven', () => {
    const paginationTokens = Object.entries(bravenTokens)
      .filter(([key]) => key.startsWith('pagination-'))
    
    it.each(paginationTokens)(
      'SHALL have matching braven pagination token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Toggle Tokens - Braven', () => {
    const toggleTokens = Object.entries(bravenTokens)
      .filter(([key]) => key.startsWith('toggle-'))
    
    it.each(toggleTokens)(
      'SHALL have matching braven toggle token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Other Component Tokens - Braven', () => {
    const otherTokens = Object.entries(bravenTokens)
      .filter(([key]) => 
        !key.startsWith('btn-') &&
        !key.startsWith('alert-') &&
        !key.startsWith('avatar-') &&
        !key.startsWith('chip-') &&
        !key.startsWith('data-') &&
        !key.startsWith('input') &&
        !key.startsWith('header-') &&
        !key.startsWith('footer-') &&
        !key.startsWith('sidebar-') &&
        !key.startsWith('pagination-') &&
        !key.startsWith('toggle-')
      )
    
    it.each(otherTokens)(
      'SHALL have matching braven token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Braven Token Completeness', () => {
    it('SHALL have all button tokens in CSS', () => {
      const buttonTokens = allTokenKeys.filter(k => k.startsWith('btn-'))
      const missing = buttonTokens.filter(k => !cssVars[k])
      
      expect(missing).toHaveLength(0)
    })

    it('SHALL have all alert tokens in CSS', () => {
      const alertTokens = allTokenKeys.filter(k => k.startsWith('alert-'))
      const missing = alertTokens.filter(k => !cssVars[k])
      
      expect(missing).toHaveLength(0)
    })
  })

  describe('Theme Parity', () => {
    it('SHALL have matching token keys between horizon and braven', () => {
      const horizonKeys = getAllComponentTokenKeys(figmaTokens, 'horizon')
      const bravenKeys = getAllComponentTokenKeys(figmaTokens, 'braven')
      
      const onlyInHorizon = horizonKeys.filter(k => !bravenKeys.includes(k))
      const onlyInBraven = bravenKeys.filter(k => !horizonKeys.includes(k))
      
      expect(onlyInHorizon).toHaveLength(0)
      expect(onlyInBraven).toHaveLength(0)
    })
  })
})
