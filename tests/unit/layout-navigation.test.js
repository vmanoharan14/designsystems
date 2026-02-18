import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const readCss = (file) => fs.readFileSync(path.join('./dist/components', file), 'utf-8')

describe('Layout Navigation Components', () => {
  describe('Header CSS', () => {
    it('SHALL have header class', () => {
      const css = readCss('header.css')
      expect(css).toContain('.header')
    })
    it('SHALL have header elements', () => {
      const css = readCss('header.css')
      expect(css).toContain('.header-logo')
      expect(css).toContain('.header-nav')
      expect(css).toContain('.header-nav-link')
    })
  })

  describe('Footer CSS', () => {
    it('SHALL have footer class', () => {
      const css = readCss('footer.css')
      expect(css).toContain('.footer')
    })
    it('SHALL have footer elements', () => {
      const css = readCss('footer.css')
      expect(css).toContain('.footer-content')
      expect(css).toContain('.footer-section')
      expect(css).toContain('.footer-link')
    })
  })

  describe('Sidebar CSS', () => {
    it('SHALL have sidebar class', () => {
      const css = readCss('sidebar.css')
      expect(css).toContain('.sidebar')
    })
    it('SHALL have sidebar nav elements', () => {
      const css = readCss('sidebar.css')
      expect(css).toContain('.sidebar-nav')
      expect(css).toContain('.sidebar-nav-item')
    })
  })

  describe('Breadcrumb CSS', () => {
    it('SHALL have breadcrumb class', () => {
      const css = readCss('breadcrumb.css')
      expect(css).toContain('.breadcrumb')
    })
    it('SHALL have breadcrumb elements', () => {
      const css = readCss('breadcrumb.css')
      expect(css).toContain('.breadcrumb-item')
      expect(css).toContain('.breadcrumb-link')
      expect(css).toContain('.breadcrumb-separator')
    })
  })

  describe('Pagination CSS', () => {
    it('SHALL have pagination class', () => {
      const css = readCss('pagination.css')
      expect(css).toContain('.pagination')
    })
    it('SHALL have pagination states', () => {
      const css = readCss('pagination.css')
      expect(css).toContain('.pagination-item')
      expect(css).toContain('.pagination-item.active')
      expect(css).toContain('.pagination-item.disabled')
    })
  })

  describe('Modal CSS', () => {
    it('SHALL have modal class', () => {
      const css = readCss('modal.css')
      expect(css).toContain('.modal')
    })
    it('SHALL have modal elements', () => {
      const css = readCss('modal.css')
      expect(css).toContain('.modal-overlay')
      expect(css).toContain('.modal-header')
      expect(css).toContain('.modal-body')
      expect(css).toContain('.modal-footer')
    })
  })
})
