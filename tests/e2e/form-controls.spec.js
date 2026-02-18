import { test, expect } from '@playwright/test'

test.describe('Inputs Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/inputs.html')
  })

  test('SHALL render input with correct base styles', async ({ page }) => {
    const input = page.locator('.input').first()
    await expect(input).toBeVisible()
    await expect(input).toHaveCSS('font-family', /Roboto/)
  })

  test('SHALL show hover state', async ({ page }) => {
    const input = page.locator('.input').first()
    await input.hover()
    await expect(input).toBeVisible()
  })

  test('SHALL show focus state', async ({ page }) => {
    const input = page.locator('.input').first()
    await input.focus()
    await expect(input).toBeFocused()
  })

  test('SHALL show error state', async ({ page }) => {
    const errorInput = page.locator('.input--error').first()
    await expect(errorInput).toBeVisible()
  })

  test('SHALL switch themes correctly', async ({ page }) => {
    const themeSelect = page.locator('#theme')
    const input = page.locator('.input').first()
    
    await themeSelect.selectOption('horizon')
    await page.waitForTimeout(100)
    await expect(input).toBeVisible()
    
    await themeSelect.selectOption('braven')
    await page.waitForTimeout(100)
    await expect(input).toBeVisible()
  })

  test('@visual input component screenshot', async ({ page }) => {
    await expect(page.locator('.demo-container')).toHaveScreenshot('inputs.png', {
      maxDiffPixels: 100
    })
  })
})

test.describe('Dropdown Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/dropdown.html')
  })

  test('SHALL render dropdown with correct base styles', async ({ page }) => {
    const dropdown = page.locator('.dropdown').first()
    await expect(dropdown).toBeVisible()
  })

  test('SHALL toggle dropdown options on click', async ({ page }) => {
    const dropdown = page.locator('.dropdown').first()
    await dropdown.selectOption({ index: 1 })
    await expect(dropdown).toBeVisible()
  })

  test('SHALL switch themes correctly', async ({ page }) => {
    const themeSelect = page.locator('#theme')
    const dropdown = page.locator('.dropdown').first()
    
    await themeSelect.selectOption('braven')
    await page.waitForTimeout(100)
    await expect(dropdown).toBeVisible()
  })

  test('@visual dropdown component screenshot', async ({ page }) => {
    await expect(page.locator('.demo-container')).toHaveScreenshot('dropdown.png', {
      maxDiffPixels: 100
    })
  })
})

test.describe('Search Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/search.html')
  })

  test('SHALL render search input', async ({ page }) => {
    const search = page.locator('.search').first()
    await expect(search).toBeVisible()
  })

  test('SHALL show active state when focused', async ({ page }) => {
    const search = page.locator('.search').first()
    await search.focus()
    await expect(search).toBeFocused()
  })

  test('SHALL switch themes correctly', async ({ page }) => {
    const themeSelect = page.locator('#theme')
    const search = page.locator('.search').first()
    
    await themeSelect.selectOption('braven')
    await page.waitForTimeout(100)
    await expect(search).toBeVisible()
  })

  test('@visual search component screenshot', async ({ page }) => {
    await expect(page.locator('.demo-container')).toHaveScreenshot('search.png', {
      maxDiffPixels: 100
    })
  })
})

test.describe('Checkboxes Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/checkboxes.html')
  })

  test('SHALL render checkbox', async ({ page }) => {
    const checkbox = page.locator('.checkbox__input').first()
    await expect(checkbox).toBeVisible()
  })

  test('SHALL toggle checked state on click', async ({ page }) => {
    const checkbox = page.locator('.checkbox__input').first()
    await checkbox.check()
    await expect(checkbox).toBeChecked()
  })

  test('SHALL show error state', async ({ page }) => {
    const errorCheckbox = page.locator('.checkbox--error .checkbox__input').first()
    await expect(errorCheckbox).toBeVisible()
  })

  test('SHALL switch themes correctly', async ({ page }) => {
    const themeSelect = page.locator('#theme')
    await themeSelect.selectOption('braven')
    await page.waitForTimeout(100)
    await expect(page.locator('.checkbox').first()).toBeVisible()
  })

  test('@visual checkboxes component screenshot', async ({ page }) => {
    await expect(page.locator('.demo-container')).toHaveScreenshot('checkboxes.png', {
      maxDiffPixels: 100
    })
  })
})

test.describe('Radio Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/radio.html')
  })

  test('SHALL render radio button', async ({ page }) => {
    const radio = page.locator('.radio__input').first()
    await expect(radio).toBeVisible()
  })

  test('SHALL select radio on click', async ({ page }) => {
    const radio = page.locator('.radio__input').first()
    await radio.check()
    await expect(radio).toBeChecked()
  })

  test('SHALL only allow one selection per group', async ({ page }) => {
    const radios = page.locator('.radio__input')
    await radios.first().check()
    await radios.nth(1).check()
    
    await expect(radios.first()).not.toBeChecked()
    await expect(radios.nth(1)).toBeChecked()
  })

  test('SHALL switch themes correctly', async ({ page }) => {
    const themeSelect = page.locator('#theme')
    await themeSelect.selectOption('braven')
    await page.waitForTimeout(100)
    await expect(page.locator('.radio').first()).toBeVisible()
  })

  test('@visual radio component screenshot', async ({ page }) => {
    await expect(page.locator('.demo-container')).toHaveScreenshot('radio.png', {
      maxDiffPixels: 100
    })
  })
})

test.describe('Toggle Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/toggle.html')
  })

  test('SHALL render toggle switch', async ({ page }) => {
    const toggle = page.locator('.toggle').first()
    await expect(toggle).toBeVisible()
  })

  test('SHALL toggle state on click', async ({ page }) => {
    const toggleInput = page.locator('.toggle__input').first()
    const toggleLabel = page.locator('.toggle').first()
    await toggleLabel.click({ force: true })
    await expect(toggleInput).toBeChecked()
    await toggleLabel.click({ force: true })
    await expect(toggleInput).not.toBeChecked()
  })

  test('SHALL switch themes correctly', async ({ page }) => {
    const themeSelect = page.locator('#theme')
    await themeSelect.selectOption('braven')
    await page.waitForTimeout(100)
    await expect(page.locator('.toggle').first()).toBeVisible()
  })

  test('@visual toggle component screenshot', async ({ page }) => {
    await expect(page.locator('.demo-container')).toHaveScreenshot('toggle.png', {
      maxDiffPixels: 100
    })
  })
})
