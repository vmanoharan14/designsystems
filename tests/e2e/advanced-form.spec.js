import { test, expect } from '@playwright/test'

test.describe('Advanced Form Components', () => {
  test.describe('Date Picker', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/date.html')
    })

    test('SHALL render date picker', async ({ page }) => {
      await expect(page.locator('.date-picker').first()).toBeVisible()
    })

    test('SHALL switch themes', async ({ page }) => {
      await page.selectOption('#theme-select', 'braven')
      await expect(page.locator('body')).toHaveAttribute('data-theme', 'braven')
    })

    test('@visual date picker rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('date-picker.png')
    })
  })

  test.describe('Password Input', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/password.html')
    })

    test('SHALL render password input', async ({ page }) => {
      await expect(page.locator('.password-input').first()).toBeVisible()
    })

    test('SHALL toggle password visibility', async ({ page }) => {
      const input = page.locator('.password-input-field').first()
      await expect(input).toHaveAttribute('type', 'password')
      await page.click('.password-toggle')
      await expect(input).toHaveAttribute('type', 'text')
    })

    test('@visual password input rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('password.png')
    })
  })
})
