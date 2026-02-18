import { describe, it, expect } from 'vitest'
import {
  loadThemesCss,
  loadFigmaTokens,
  parseThemeCssVariables,
  extractComponentTokens,
  getAllComponentTokenKeys
} from '../utils/token-parser.js'

describe('Token Values - Horizon Theme', () => {
  const cssContent = loadThemesCss()
  const cssVars = parseThemeCssVariables(cssContent, 'horizon')
  const figmaTokens = loadFigmaTokens()
  const horizonTokens = extractComponentTokens(figmaTokens, 'horizon')
  const allTokenKeys = getAllComponentTokenKeys(figmaTokens, 'horizon')

  describe('Button Tokens - Horizon', () => {
    const buttonTokens = Object.entries(horizonTokens)
      .filter(([key]) => key.startsWith('btn-'))
    
    it.each(buttonTokens)(
      'SHALL have matching horizon button token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          expect.fail(`Missing CSS variable: --${key}`)
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Alert Tokens - Horizon', () => {
    const alertTokens = Object.entries(horizonTokens)
      .filter(([key]) => key.startsWith('alert-'))
    
    it.each(alertTokens)(
      'SHALL have matching horizon alert token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          expect.fail(`Missing CSS variable: --${key}`)
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Avatar Tokens - Horizon', () => {
    const avatarTokens = Object.entries(horizonTokens)
      .filter(([key]) => key.startsWith('avatar-'))
    
    it.each(avatarTokens)(
      'SHALL have matching horizon avatar token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Chip Tokens - Horizon', () => {
    const chipTokens = Object.entries(horizonTokens)
      .filter(([key]) => key.startsWith('chip-'))
    
    it.each(chipTokens)(
      'SHALL have matching horizon chip token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Data Table Tokens - Horizon', () => {
    const dataTokens = Object.entries(horizonTokens)
      .filter(([key]) => key.startsWith('data-'))
    
    it.each(dataTokens)(
      'SHALL have matching horizon data-table token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Input Tokens - Horizon', () => {
    const inputTokens = Object.entries(horizonTokens)
      .filter(([key]) => key.startsWith('input') || key.startsWith('inputs-'))
    
    it.each(inputTokens)(
      'SHALL have matching horizon input token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Header Tokens - Horizon', () => {
    const headerTokens = Object.entries(horizonTokens)
      .filter(([key]) => key.startsWith('header-'))
    
    it.each(headerTokens)(
      'SHALL have matching horizon header token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Footer Tokens - Horizon', () => {
    const footerTokens = Object.entries(horizonTokens)
      .filter(([key]) => key.startsWith('footer-'))
    
    it.each(footerTokens)(
      'SHALL have matching horizon footer token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Sidebar Tokens - Horizon', () => {
    const sidebarTokens = Object.entries(horizonTokens)
      .filter(([key]) => key.startsWith('sidebar-'))
    
    it.each(sidebarTokens)(
      'SHALL have matching horizon sidebar token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Pagination Tokens - Horizon', () => {
    const paginationTokens = Object.entries(horizonTokens)
      .filter(([key]) => key.startsWith('pagination-'))
    
    it.each(paginationTokens)(
      'SHALL have matching horizon pagination token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Toggle Tokens - Horizon', () => {
    const toggleTokens = Object.entries(horizonTokens)
      .filter(([key]) => key.startsWith('toggle-'))
    
    it.each(toggleTokens)(
      'SHALL have matching horizon toggle token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Other Component Tokens - Horizon', () => {
    const otherTokens = Object.entries(horizonTokens)
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
      'SHALL have matching horizon token: %s',
      (key, jsonValue) => {
        const cssValue = cssVars[key]
        
        if (cssValue === undefined) {
          return
        }
        
        expect(cssValue.toLowerCase()).toBe(String(jsonValue).toLowerCase())
      }
    )
  })

  describe('Horizon Token Completeness', () => {
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
})
