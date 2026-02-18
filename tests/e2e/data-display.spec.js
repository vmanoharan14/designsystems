import { test, expect } from '@playwright/test'

test.describe('Data Display Components', () => {
  test.describe('Avatar', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/avatar.html')
    })

    test('SHALL render avatars', async ({ page }) => {
      await expect(page.locator('.avatar').first()).toBeVisible()
    })

    test('@visual avatar rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('avatar.png')
    })
  })

  test.describe('Card', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/card.html')
    })

    test('SHALL render cards', async ({ page }) => {
      await expect(page.locator('.card').first()).toBeVisible()
    })

    test('@visual card rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('card.png')
    })
  })

  test.describe('Data Table', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/data.html')
    })

    test('SHALL render data table', async ({ page }) => {
      await expect(page.locator('.data-table')).toBeVisible()
    })

    test('@visual data table rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('data-table.png')
    })
  })

  test.describe('Accordions', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/accordions.html')
    })

    test('SHALL render accordions', async ({ page }) => {
      await expect(page.locator('.accordion')).toBeVisible()
    })

    test('SHALL toggle accordion on click', async ({ page }) => {
      await page.click('.accordion-header')
      await expect(page.locator('.accordion-body').first()).toHaveClass(/open/)
    })

    test('@visual accordion rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('accordion.png')
    })
  })

  test.describe('Text Area', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/text.html')
    })

    test('SHALL render text areas', async ({ page }) => {
      await expect(page.locator('.text-area-input').first()).toBeVisible()
    })

    test('@visual text area rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('text-area.png')
    })
  })

  test.describe('List', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/list.html')
    })

    test('SHALL render list', async ({ page }) => {
      await expect(page.locator('.list')).toBeVisible()
    })

    test('@visual list rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('list.png')
    })
  })
})
