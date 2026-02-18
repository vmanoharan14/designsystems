import { test, expect } from '@playwright/test'

test.describe('Feedback Status Components', () => {
  test.describe('Badges', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/badges.html')
      await page.waitForLoadState('networkidle')
    })

    test('SHALL render badge variants', async ({ page }) => {
      await page.waitForSelector('.badge', { state: 'visible' })
      await expect(page.locator('.badge-default').first()).toBeVisible()
      await expect(page.locator('.badge-primary').first()).toBeVisible()
      await expect(page.locator('.badge-success').first()).toBeVisible()
      await expect(page.locator('.badge-warning').first()).toBeVisible()
      await expect(page.locator('.badge-error').first()).toBeVisible()
    })

    test('SHALL switch themes', async ({ page }) => {
      await page.selectOption('#theme-select', 'horizon')
      await expect(page.locator('body')).toHaveAttribute('data-theme', 'horizon')
      
      await page.selectOption('#theme-select', 'braven')
      await expect(page.locator('body')).toHaveAttribute('data-theme', 'braven')
    })

    test('@visual badge rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('badges.png')
    })
  })

  test.describe('Chips', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/chip.html')
      await page.waitForLoadState('networkidle')
    })

    test('SHALL render chip variants', async ({ page }) => {
      await page.waitForSelector('.chip', { state: 'visible' })
      await expect(page.locator('.chip-default').first()).toBeVisible()
      await expect(page.locator('.chip-primary').first()).toBeVisible()
      await expect(page.locator('.chip-selected').first()).toBeVisible()
      await expect(page.locator('.chip-disabled').first()).toBeVisible()
    })

    test('@visual chip rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('chips.png')
    })
  })

  test.describe('Progress', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/progress.html')
    })

    test('SHALL render progress bars', async ({ page }) => {
      await expect(page.locator('.progress')).toHaveCount(4)
    })

    test('@visual progress rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('progress.png')
    })
  })

  test.describe('Preloader', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/preloader.html')
    })

    test('SHALL render preloaders', async ({ page }) => {
      await expect(page.locator('.preloader-spinner')).toHaveCount(4)
    })

    test('@visual preloader rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('preloader.png')
    })
  })

  test.describe('Tooltips', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/tooltips.html')
    })

    test('SHALL show tooltip on hover', async ({ page }) => {
      const tooltip = page.locator('.tooltip-top')
      await tooltip.hover()
      await expect(tooltip.locator('.tooltip-content')).toBeVisible()
    })

    test('@visual tooltip rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('tooltips.png')
    })
  })

  test.describe('Disclaimers', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/disclaimers.html')
    })

    test('SHALL render disclaimer variants', async ({ page }) => {
      await expect(page.locator('.disclaimer-info')).toBeVisible()
      await expect(page.locator('.disclaimer-warning')).toBeVisible()
      await expect(page.locator('.disclaimer-error')).toBeVisible()
      await expect(page.locator('.disclaimer-success')).toBeVisible()
    })

    test('@visual disclaimer rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('disclaimers.png')
    })
  })
})
