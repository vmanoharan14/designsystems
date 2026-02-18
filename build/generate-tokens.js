const fs = require('fs');
const path = require('path');

const TOKENS_FILE = path.join(__dirname, '..', 'tokens-json-v1.1.json');
const DIST_DIR = path.join(__dirname, '..', 'dist');

function toCssVarName(name) {
  return '--' + String(name).toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-');
}

function formatValue(value) {
  if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
    return `var(${toCssVarName(value.slice(1, -1))})`;
  }
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
}

function generateCssRules(tokens, indent = '  ') {
  return Object.entries(tokens)
    .filter(([, value]) => value !== null && value !== undefined)
    .map(([name, value]) => `${indent}${toCssVarName(name)}: ${formatValue(value)};`)
    .join('\n');
}

function extractPrimitives(data) {
  const primitives = {};
  
  if (data['typography-primitive']?.horizon) {
    primitives.typography = data['typography-primitive'].horizon;
  }
  
  if (data['colors-primitives']) {
    primitives.colors = data['colors-primitives'];
  }
  
  if (data['padding']) {
    primitives.padding = data['padding'];
  }
  
  if (data['radius']) {
    primitives.radius = data['radius'];
  }
  
  if (data['elevation']) {
    primitives.elevation = data['elevation'];
  }
  
  return primitives;
}

function extractComponentTokens(data) {
  const themes = {};
  
  if (data.components?.horizon) {
    themes.horizon = data.components.horizon;
  }
  
  if (data.components?.braven) {
    themes.braven = data.components.braven;
  }
  
  return themes;
}

function generateTokensCss(primitives) {
  const lines = [];
  
  lines.push('/* =========================================');
  lines.push('   DESIGN TOKENS - Primitives');
  lines.push('   Generated from Figma tokens');
  lines.push('   ========================================= */');
  lines.push('');
  lines.push(':root {');
  
  if (primitives.typography) {
    lines.push('  /* Typography */');
    lines.push(generateCssRules(primitives.typography));
    lines.push('');
  }
  
  if (primitives.colors) {
    lines.push('  /* Colors */');
    lines.push(generateCssRules(primitives.colors));
    lines.push('');
  }
  
  if (primitives.padding) {
    lines.push('  /* Spacing */');
    lines.push(generateCssRules(primitives.padding));
    lines.push('');
  }
  
  if (primitives.radius) {
    lines.push('  /* Border Radius */');
    lines.push(generateCssRules(primitives.radius));
    lines.push('');
  }
  
  if (primitives.elevation) {
    lines.push('  /* Elevation / Shadows */');
    lines.push(generateCssRules(primitives.elevation));
  }
  
  lines.push('}');
  lines.push('');
  
  return lines.join('\n');
}

function generateThemesCss(themes) {
  const lines = [];
  
  lines.push('/* =========================================');
  lines.push('   THEME TOKENS - Component Variables');
  lines.push('   Generated from Figma tokens');
  lines.push('   ========================================= */');
  lines.push('');
  
  if (themes.horizon) {
    lines.push('/* Horizon Theme (Default) */');
    lines.push(':root,');
    lines.push('[data-theme="horizon"] {');
    lines.push(generateCssRules(themes.horizon));
    lines.push('}');
    lines.push('');
  }
  
  if (themes.braven) {
    lines.push('/* Braven Theme */');
    lines.push('[data-theme="braven"] {');
    lines.push(generateCssRules(themes.braven));
    lines.push('}');
    lines.push('');
  }
  
  return lines.join('\n');
}

function main() {
  console.log('Reading tokens from:', TOKENS_FILE);
  
  const rawData = fs.readFileSync(TOKENS_FILE, 'utf8');
  const data = JSON.parse(rawData);
  
  console.log('Extracting primitives...');
  const primitives = extractPrimitives(data);
  const primitiveCount = Object.values(primitives).reduce((sum, obj) => sum + Object.keys(obj || {}).length, 0);
  console.log(`  Found ${primitiveCount} primitive tokens`);
  
  console.log('Extracting component tokens...');
  const themes = extractComponentTokens(data);
  console.log(`  Horizon: ${Object.keys(themes.horizon || {}).length} tokens`);
  console.log(`  Braven: ${Object.keys(themes.braven || {}).length} tokens`);
  
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }
  
  console.log('Generating dist/tokens.css...');
  const tokensCss = generateTokensCss(primitives);
  fs.writeFileSync(path.join(DIST_DIR, 'tokens.css'), tokensCss);
  
  console.log('Generating dist/themes.css...');
  const themesCss = generateThemesCss(themes);
  fs.writeFileSync(path.join(DIST_DIR, 'themes.css'), themesCss);
  
  console.log('\n✓ Token generation complete!');
  console.log(`  - dist/tokens.css (${tokensCss.split('\n').length} lines)`);
  console.log(`  - dist/themes.css (${themesCss.split('\n').length} lines)`);
}

main();
