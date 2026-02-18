import { test, expect } from '@playwright/test'

test.describe('Button Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/button.html')
  })

  test('should render primary button', async ({ page }) => {
    const button = page.locator('.btn-primary').first()
    await expect(button).toBeVisible()
    await expect(button).toHaveText(/Primary Button/)
  })

  test('should render secondary button', async ({ page }) => {
    const button = page.locator('.btn-secondary').first()
    await expect(button).toBeVisible()
    await expect(button).toHaveText(/Secondary Button/)
  })

  test('should have correct base styles on primary button', async ({ page }) => {
    const button = page.locator('.btn-primary').first()
    
    await expect(button).toHaveCSS('font-family', /Roboto/)
    await expect(button).toHaveCSS('border-radius', '8px')
    await expect(button).toHaveCSS('cursor', 'pointer')
  })

  test('should show disabled state', async ({ page }) => {
    const disabledButton = page.locator('.btn-primary:disabled')
    
    await expect(disabledButton).toBeVisible()
    await expect(disabledButton).toHaveCSS('cursor', 'not-allowed')
  })

  test('should NOT have tertiary button (not in Figma)', async ({ page }) => {
    const tertiaryButton = page.locator('.btn-tertiary')
    await expect(tertiaryButton).toHaveCount(0)
  })

  test('should NOT have sm/lg size buttons (not in Figma)', async ({ page }) => {
    const smButton = page.locator('.btn-sm')
    const lgButton = page.locator('.btn-lg')
    
    await expect(smButton).toHaveCount(0)
    await expect(lgButton).toHaveCount(0)
  })

  test.describe('Theme Switching', () => {
    test('should switch from horizon to braven theme', async ({ page }) => {
      const html = page.locator('html')
      const themeSelect = page.locator('#theme')
      
      await themeSelect.selectOption('horizon')
      await expect(html).toHaveAttribute('data-theme', 'horizon')
      
      await themeSelect.selectOption('braven')
      await expect(html).toHaveAttribute('data-theme', 'braven')
    })

    test('should have different primary colors between themes', async ({ page }) => {
      const themeSelect = page.locator('#theme')
      
      await themeSelect.selectOption('horizon')
      await page.waitForTimeout(100)
      const horizonBg = await page.locator('.btn-primary').first().evaluate(el => 
        getComputedStyle(el).backgroundColor
      )
      
      await themeSelect.selectOption('braven')
      await page.waitForTimeout(100)
      const bravenBg = await page.locator('.btn-primary').first().evaluate(el => 
        getComputedStyle(el).backgroundColor
      )
      
      expect(horizonBg).not.toBe(bravenBg)
    })

    test('horizon theme should use blue primary', async ({ page }) => {
      const button = page.locator('.btn-primary').first()
      const themeSelect = page.locator('#theme')
      
      await themeSelect.selectOption('horizon')
      
      const bgColor = await button.evaluate(el => 
        getComputedStyle(el).backgroundColor
      )
      
      expect(bgColor).toBe('rgb(0, 84, 168)')
    })

    test('braven theme should use purple primary', async ({ page }) => {
      const button = page.locator('.btn-primary').first()
      const themeSelect = page.locator('#theme')
      
      await themeSelect.selectOption('braven')
      await page.waitForTimeout(100)
      
      const tokenValue = await button.evaluate(el => 
        getComputedStyle(el).getPropertyValue('--btn-primary-main').trim()
      )
      
      expect(tokenValue).toBe('#333988')
    })
  })

  test.describe('Visual Tests @visual', () => {
    test('primary button visual', async ({ page }) => {
      const button = page.locator('.btn-primary').first()
      await expect(button).toHaveScreenshot('btn-primary.png')
    })

    test('secondary button visual', async ({ page }) => {
      const button = page.locator('.btn-secondary').first()
      await expect(button).toHaveScreenshot('btn-secondary.png')
    })

    test('full page visual - horizon', async ({ page }) => {
      await page.locator('#theme').selectOption('horizon')
      await expect(page).toHaveScreenshot('button-page-horizon.png')
    })

    test('full page visual - braven', async ({ page }) => {
      await page.locator('#theme').selectOption('braven')
      await expect(page).toHaveScreenshot('button-page-braven.png')
    })
  })
})
