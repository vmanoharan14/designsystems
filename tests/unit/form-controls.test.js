import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

describe('Inputs Component CSS', () => {
  const cssPath = path.join(process.cwd(), 'dist/components/inputs.css')
  const css = fs.readFileSync(cssPath, 'utf-8')

  it('SHALL have .input base class', () => {
    expect(css).toContain('.input')
    expect(css).toContain('font-family: var(--font-family-font')
    expect(css).toContain('border-radius: var(--inputs-radius')
  })

  it('SHALL have .input:hover state', () => {
    expect(css).toContain('.input:hover')
  })

  it('SHALL have .input:focus state', () => {
    expect(css).toContain('.input:focus')
  })

  it('SHALL have .input:disabled state', () => {
    expect(css).toContain('.input:disabled')
    expect(css).toContain('cursor: not-allowed')
  })

  it('SHALL have .input--error modifier', () => {
    expect(css).toContain('.input--error')
    expect(css).toContain('var(--inputs-error-state')
  })

  it('SHALL have .input--selected modifier', () => {
    expect(css).toContain('.input--selected')
  })

  it('SHALL have .input__label element', () => {
    expect(css).toContain('.input__label')
  })

  it('SHALL have .input__label--disabled modifier', () => {
    expect(css).toContain('.input__label--disabled')
  })

  it('SHALL have .input__icon element', () => {
    expect(css).toContain('.input__icon')
  })

  it('SHALL use CSS variables from Figma tokens', () => {
    expect(css).toContain('--inputs-bg')
    expect(css).toContain('--inputs-stroke')
    expect(css).toContain('--inputs-text')
    expect(css).toContain('--inputs-padding')
  })
})

describe('Dropdown Component CSS', () => {
  const cssPath = path.join(process.cwd(), 'dist/components/dropdown.css')
  const css = fs.readFileSync(cssPath, 'utf-8')

  it('SHALL have .dropdown base class', () => {
    expect(css).toContain('.dropdown')
    expect(css).toContain('border-radius: var(--dropdown-radius')
  })

  it('SHALL have hover, focus, disabled states', () => {
    expect(css).toContain('.dropdown:hover')
    expect(css).toContain('.dropdown:focus')
    expect(css).toContain('.dropdown:disabled')
  })

  it('SHALL have .dropdown__arrow element', () => {
    expect(css).toContain('.dropdown__arrow')
  })

  it('SHALL have .dropdown--open modifier', () => {
    expect(css).toContain('.dropdown--open')
  })

  it('SHALL have .dropdown__option element', () => {
    expect(css).toContain('.dropdown__option')
    expect(css).toContain('.dropdown__option--selected')
  })
})

describe('Search Component CSS', () => {
  const cssPath = path.join(process.cwd(), 'dist/components/search.css')
  const css = fs.readFileSync(cssPath, 'utf-8')

  it('SHALL have .search base class', () => {
    expect(css).toContain('.search')
    expect(css).toContain('border-radius: var(--search-bar-radius')
  })

  it('SHALL have hover, focus states', () => {
    expect(css).toContain('.search:hover')
    expect(css).toContain('.search:focus')
  })

  it('SHALL have .search--active modifier', () => {
    expect(css).toContain('.search--active')
  })

  it('SHALL use search-bar-* CSS variables', () => {
    expect(css).toContain('--search-bar-border')
    expect(css).toContain('--search-bar-bg-base')
  })
})

describe('Checkboxes Component CSS', () => {
  const cssPath = path.join(process.cwd(), 'dist/components/checkboxes.css')
  const css = fs.readFileSync(cssPath, 'utf-8')

  it('SHALL have .checkbox base class', () => {
    expect(css).toContain('.checkbox')
  })

  it('SHALL have .checkbox__input element', () => {
    expect(css).toContain('.checkbox__input')
    expect(css).toContain('appearance: none')
  })

  it('SHALL have checked state with checkmark', () => {
    expect(css).toContain('.checkbox__input:checked')
    expect(css).toContain("content: ''")
  })

  it('SHALL have hover, focus, disabled states', () => {
    expect(css).toContain('.checkbox__input:hover')
    expect(css).toContain('.checkbox__input:focus')
    expect(css).toContain('.checkbox__input:disabled')
  })

  it('SHALL have .checkbox--error modifier', () => {
    expect(css).toContain('.checkbox--error')
    expect(css).toContain('--checkboxes-bg-error')
  })

  it('SHALL have .checkbox--disabled modifier', () => {
    expect(css).toContain('.checkbox--disabled')
  })
})

describe('Radio Component CSS', () => {
  const cssPath = path.join(process.cwd(), 'dist/components/radio.css')
  const css = fs.readFileSync(cssPath, 'utf-8')

  it('SHALL have .radio base class', () => {
    expect(css).toContain('.radio')
  })

  it('SHALL have .radio__input element with circular shape', () => {
    expect(css).toContain('.radio__input')
    expect(css).toContain('border-radius: 50%')
  })

  it('SHALL have checked state with filled circle', () => {
    expect(css).toContain('.radio__input:checked')
    expect(css).toContain("content: ''")
  })

  it('SHALL have hover, focus, disabled states', () => {
    expect(css).toContain('.radio__input:hover')
    expect(css).toContain('.radio__input:focus')
    expect(css).toContain('.radio__input:disabled')
  })

  it('SHALL have .radio--dark modifier', () => {
    expect(css).toContain('.radio--dark')
  })

  it('SHALL have .radio--disabled modifier', () => {
    expect(css).toContain('.radio--disabled')
  })
})

describe('Toggle Component CSS', () => {
  const cssPath = path.join(process.cwd(), 'dist/components/toggle.css')
  const css = fs.readFileSync(cssPath, 'utf-8')

  it('SHALL have .toggle base class', () => {
    expect(css).toContain('.toggle')
  })

  it('SHALL have .toggle__switch element with rounded shape', () => {
    expect(css).toContain('.toggle__switch')
    expect(css).toContain('border-radius: var(--toggle-radius')
  })

  it('SHALL have .toggle__input:checked state that transforms switch', () => {
    expect(css).toContain('.toggle__input:checked')
    expect(css).toContain('transform: translateX')
  })

  it('SHALL have focus state', () => {
    expect(css).toContain('.toggle__input:focus')
  })

  it('SHALL have disabled state', () => {
    expect(css).toContain('.toggle__input:disabled')
  })

  it('SHALL use toggle-on-bg and toggle-off-bg tokens', () => {
    expect(css).toContain('--toggle-on-bg')
    expect(css).toContain('--toggle-off-bg')
  })
})
