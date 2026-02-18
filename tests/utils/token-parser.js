import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '../../')

export function parseCssVariables(cssContent) {
  const variables = {}
  const regex = /--([a-zA-Z0-9-]+):\s*([^;]+);/g
  let match
  while ((match = regex.exec(cssContent)) !== null) {
    const name = match[1]
    const value = match[2].trim()
    variables[name] = value
  }
  return variables
}

export function parseThemeCssVariables(cssContent, theme) {
  const variables = {}
  const themeRegex = theme === 'root' 
    ? /:root\s*\{([^}]+)\}/ 
    : new RegExp(`\\[data-theme="${theme}"\\]\\s*\\{([^}]+)\\}`, 'g')
  
  const match = themeRegex.exec(cssContent)
  if (match) {
    const content = match[1]
    const varRegex = /--([a-zA-Z0-9-]+):\s*([^;]+);/g
    let varMatch
    while ((varMatch = varRegex.exec(content)) !== null) {
      variables[varMatch[1]] = varMatch[2].trim()
    }
  }
  return variables
}

export function loadTokensCss() {
  const cssPath = path.join(projectRoot, 'dist/tokens.css')
  return fs.readFileSync(cssPath, 'utf-8')
}

export function loadThemesCss() {
  const cssPath = path.join(projectRoot, 'dist/themes.css')
  return fs.readFileSync(cssPath, 'utf-8')
}

export function loadFigmaTokens() {
  const jsonPath = path.join(projectRoot, 'tokens-json-v1.1.json')
  return JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
}

export function extractTypographyPrimitives(tokens, theme = 'horizon') {
  const typography = tokens['typography-primitive']?.[theme] || {}
  const result = {}
  
  for (const [key, value] of Object.entries(typography)) {
    if (typeof value === 'object' && value.value !== undefined) {
      result[key] = value.value
    } else if (typeof value === 'string' || typeof value === 'number') {
      result[key] = String(value)
    }
  }
  return result
}

export function extractColorPrimitives(tokens) {
  const colors = tokens['colors-primitives'] || {}
  const result = {}
  
  for (const [key, value] of Object.entries(colors)) {
    const normalizedKey = /^\d+$/.test(key) ? `gray-${key}` : key
    if (typeof value === 'object' && value.value !== undefined) {
      result[normalizedKey] = value.value
    } else if (typeof value === 'string') {
      result[normalizedKey] = value
    }
  }
  return result
}

export function extractSpacingPrimitives(tokens) {
  const padding = tokens['padding'] || {}
  const result = {}
  
  for (const [key, value] of Object.entries(padding)) {
    // Keys already include prefix (e.g., 'padding-16', not '16')
    const normalizedKey = key.startsWith('padding-') ? key : `padding-${key}`
    if (typeof value === 'object' && value.value !== undefined) {
      result[normalizedKey] = value.value
    } else if (typeof value === 'string' || typeof value === 'number') {
      result[normalizedKey] = value
    }
  }
  return result
}

export function extractRadiusPrimitives(tokens) {
  const radius = tokens['radius'] || {}
  const result = {}
  
  for (const [key, value] of Object.entries(radius)) {
    if (typeof value === 'object' && value.value !== undefined) {
      result[key] = value.value
    } else if (typeof value === 'string' || typeof value === 'number') {
      result[key] = String(value)
    }
  }
  return result
}

export function extractElevationPrimitives(tokens) {
  const elevation = tokens['elevation'] || {}
  const result = {}
  
  for (const [key, value] of Object.entries(elevation)) {
    if (typeof value === 'object') {
      for (const [subKey, subValue] of Object.entries(value)) {
        if (subValue?.value !== undefined) {
          result[`${key}-${subKey}`] = subValue.value
        }
      }
    }
  }
  return result
}

export function extractComponentTokens(tokens, theme = 'horizon') {
  const components = tokens.components?.[theme] || {}
  const result = {}
  
  for (const [key, value] of Object.entries(components)) {
    if (typeof value === 'string') {
      result[key] = value
    } else if (typeof value === 'object' && value.value !== undefined) {
      result[key] = value.value
    }
  }
  return result
}

export function normalizeValue(value) {
  if (typeof value !== 'string') return String(value)
  let normalized = value.toLowerCase().trim()
  if (normalized.endsWith('px')) {
    normalized = normalized.slice(0, -2)
  }
  return normalized
}

export function compareTokens(jsonTokens, cssTokens, prefix = '') {
  const mismatches = []
  const missing = []
  const matched = []
  
  for (const [key, jsonValue] of Object.entries(jsonTokens)) {
    const cssKey = prefix ? `${prefix}-${key}` : key
    const cssValue = cssTokens[cssKey]
    
    if (cssValue === undefined) {
      missing.push({ key: cssKey, jsonValue })
    } else {
      const normalizedJson = normalizeValue(jsonValue)
      const normalizedCss = normalizeValue(cssValue)
      
      if (normalizedJson !== normalizedCss) {
        mismatches.push({ 
          key: cssKey, 
          jsonValue: normalizedJson, 
          cssValue: normalizedCss 
        })
      } else {
        matched.push(cssKey)
      }
    }
  }
  
  return { matched, mismatches, missing }
}

export function getAllComponentTokenKeys(tokens, theme = 'horizon') {
  return Object.keys(tokens.components?.[theme] || {})
}
