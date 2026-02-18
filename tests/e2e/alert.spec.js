import { test, expect } from '@playwright/test'

test.describe('Alert Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/alert.html')
  })

  test('should render error alert', async ({ page }) => {
    const alert = page.locator('.alert-error').first()
    await expect(alert).toBeVisible()
  })

  test('should render warning alert', async ({ page }) => {
    const alert = page.locator('.alert-warning').first()
    await expect(alert).toBeVisible()
  })

  test('should render success alert', async ({ page }) => {
    const alert = page.locator('.alert-success').first()
    await expect(alert).toBeVisible()
  })

  test('should render info alert', async ({ page }) => {
    const alert = page.locator('.alert-info').first()
    await expect(alert).toBeVisible()
  })

  test('should have correct base styles', async ({ page }) => {
    const alert = page.locator('.alert').first()
    
    await expect(alert).toHaveCSS('border-radius', '8px')
  })

  test('should have alert content structure', async ({ page }) => {
    const alert = page.locator('.alert').first()
    const content = alert.locator('.alert-content')
    
    await expect(content).toBeVisible()
  })

  test('should have alert title', async ({ page }) => {
    const title = page.locator('.alert-title').first()
    await expect(title).toBeVisible()
  })

  test('should have alert body', async ({ page }) => {
    const body = page.locator('.alert-body').first()
    await expect(body).toBeVisible()
  })

  test.describe('Theme Switching', () => {
    test('should switch themes', async ({ page }) => {
      const html = page.locator('html')
      const themeSelect = page.locator('#theme')
      
      await themeSelect.selectOption('horizon')
      await expect(html).toHaveAttribute('data-theme', 'horizon')
      
      await themeSelect.selectOption('braven')
      await expect(html).toHaveAttribute('data-theme', 'braven')
    })

    test('error alert should have SAME colors between themes (per Figma tokens)', async ({ page }) => {
      const alert = page.locator('.alert-error').first()
      const themeSelect = page.locator('#theme')
      
      await themeSelect.selectOption('horizon')
      const horizonBg = await alert.evaluate(el => 
        getComputedStyle(el).backgroundColor
      )
      
      await themeSelect.selectOption('braven')
      await page.waitForTimeout(100)
      const bravenBg = await alert.evaluate(el => 
        getComputedStyle(el).backgroundColor
      )
      
      expect(horizonBg).toBe(bravenBg)
      expect(horizonBg).toBe('rgb(255, 234, 234)')
    })
  })

  test.describe('Visual Tests @visual', () => {
    test('error alert visual', async ({ page }) => {
      const alert = page.locator('.alert-error').first()
      await expect(alert).toHaveScreenshot('alert-error.png')
    })

    test('warning alert visual', async ({ page }) => {
      const alert = page.locator('.alert-warning').first()
      await expect(alert).toHaveScreenshot('alert-warning.png')
    })

    test('success alert visual', async ({ page }) => {
      const alert = page.locator('.alert-success').first()
      await expect(alert).toHaveScreenshot('alert-success.png')
    })

    test('info alert visual', async ({ page }) => {
      const alert = page.locator('.alert-info').first()
      await expect(alert).toHaveScreenshot('alert-info.png')
    })

    test('full page visual - horizon', async ({ page }) => {
      await page.locator('#theme').selectOption('horizon')
      await expect(page).toHaveScreenshot('alert-page-horizon.png')
    })

    test('full page visual - braven', async ({ page }) => {
      await page.locator('#theme').selectOption('braven')
      await expect(page).toHaveScreenshot('alert-page-braven.png')
    })
  })
})
