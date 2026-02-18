import { test, expect } from '@playwright/test'

test.describe('Layout Navigation Components', () => {
  test.describe('Header', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/header.html')
    })

    test('SHALL render header', async ({ page }) => {
      await expect(page.locator('.header')).toBeVisible()
    })

    test('SHALL switch themes', async ({ page }) => {
      await page.selectOption('#theme-select', 'braven')
      await expect(page.locator('body')).toHaveAttribute('data-theme', 'braven')
    })

    test('@visual header rendering', async ({ page }) => {
      await expect(page.locator('.header')).toHaveScreenshot('header.png')
    })
  })

  test.describe('Footer', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/footer.html')
    })

    test('SHALL render footer', async ({ page }) => {
      await expect(page.locator('.footer')).toBeVisible()
    })

    test('@visual footer rendering', async ({ page }) => {
      await expect(page.locator('.footer')).toHaveScreenshot('footer.png')
    })
  })

  test.describe('Sidebar', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/sidebar.html')
    })

    test('SHALL render sidebar', async ({ page }) => {
      await expect(page.locator('.sidebar')).toBeVisible()
    })

    test('SHALL have navigation items', async ({ page }) => {
      await expect(page.locator('.sidebar-nav-item')).toHaveCount(5)
    })

    test('@visual sidebar rendering', async ({ page }) => {
      await expect(page.locator('.sidebar')).toHaveScreenshot('sidebar.png')
    })
  })

  test.describe('Breadcrumb', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/breadcrumb.html')
    })

    test('SHALL render breadcrumb', async ({ page }) => {
      await expect(page.locator('.breadcrumb')).toBeVisible()
    })

    test('@visual breadcrumb rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('breadcrumb.png')
    })
  })

  test.describe('Pagination', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/pagination.html')
    })

    test('SHALL render pagination', async ({ page }) => {
      await expect(page.locator('.pagination')).toBeVisible()
    })

    test('SHALL have active and disabled states', async ({ page }) => {
      await expect(page.locator('.pagination-item.active')).toBeVisible()
      await expect(page.locator('.pagination-item.disabled')).toBeVisible()
    })

    test('@visual pagination rendering', async ({ page }) => {
      await expect(page.locator('.demo-container')).toHaveScreenshot('pagination.png')
    })
  })

  test.describe('Modal', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/examples/modal.html')
    })

    test('SHALL open modal on button click', async ({ page }) => {
      await page.click('button.btn-primary')
      await expect(page.locator('.modal-overlay')).toHaveClass(/open/)
    })

    test('SHALL close modal on close button', async ({ page }) => {
      await page.click('button.btn-primary')
      await page.click('.modal-close')
      await expect(page.locator('.modal-overlay')).not.toHaveClass(/open/)
    })

    test('@visual modal rendering', async ({ page }) => {
      await page.click('button.btn-primary')
      await expect(page.locator('.modal')).toHaveScreenshot('modal.png')
    })
  })
})
