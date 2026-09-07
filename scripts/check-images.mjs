import fs from 'node:fs';
import path from 'node:path';

const workspaceRoot = process.cwd();
const publicRoot = path.join(workspaceRoot, 'public');
const sourceExtensions = new Set(['.js', '.jsx', '.ts', '.tsx', '.css', '.html']);
const ignoredDirs = new Set(['.git', 'node_modules', 'dist', 'build']);
const imageRefRegex = /\/[^"'`()<>]+?\.(?:png|jpe?g|webp|gif|svg)/gi;

function walk(dir, output = []) {
  if (!fs.existsSync(dir)) return output;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (ignoredDirs.has(entry.name)) continue;
      walk(path.join(dir, entry.name), output);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (sourceExtensions.has(ext)) {
      output.push(path.join(dir, entry.name));
    }
  }

  return output;
}

function lineFromIndex(text, index) {
  let line = 1;
  for (let i = 0; i < index; i += 1) {
    if (text.charCodeAt(i) === 10) line += 1;
  }
  return line;
}

function resolvePathWithCase(baseDir, relativePath) {
  const parts = relativePath.split('/').filter(Boolean);
  let current = baseDir;
  const actualParts = [];
  let caseMismatch = false;

  for (const part of parts) {
    if (!fs.existsSync(current) || !fs.statSync(current).isDirectory()) {
      return { exists: false, caseMismatch: false, actualRelativePath: null };
    }

    const entries = fs.readdirSync(current);
    const exact = entries.find(name => name === part);

    if (exact) {
      actualParts.push(exact);
      current = path.join(current, exact);
      continue;
    }

    const insensitive = entries.find(name => name.toLowerCase() === part.toLowerCase());
    if (!insensitive) {
      return { exists: false, caseMismatch: false, actualRelativePath: null };
    }

    caseMismatch = true;
    actualParts.push(insensitive);
    current = path.join(current, insensitive);
  }

  return {
    exists: true,
    caseMismatch,
    actualRelativePath: actualParts.join('/'),
  };
}

const sourceFiles = walk(workspaceRoot);
const refs = new Map();

for (const filePath of sourceFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  for (const match of content.matchAll(imageRefRegex)) {
    const ref = match[0];
    if (!ref.startsWith('/')) continue;

    const relativeFile = path.relative(workspaceRoot, filePath).replaceAll('\\', '/');
    const line = lineFromIndex(content, match.index ?? 0);

    if (!refs.has(ref)) refs.set(ref, []);
    refs.get(ref).push(`${relativeFile}:${line}`);
  }
}

const missing = [];
const wrongCase = [];

for (const ref of [...refs.keys()].sort((a, b) => a.localeCompare(b))) {
  const relativeAssetPath = ref.replace(/^\/+/, '');
  const status = resolvePathWithCase(publicRoot, relativeAssetPath);

  if (!status.exists) {
    missing.push(ref);
    continue;
  }

  if (status.caseMismatch) {
    wrongCase.push({ expected: ref, actual: `/${status.actualRelativePath}` });
  }
}

console.log(`Image references found: ${refs.size}`);

if (!fs.existsSync(publicRoot)) {
  console.log('WARNING: public/ folder does not exist yet.');
}

if (missing.length > 0) {
  console.log(`\nMissing files (${missing.length}):`);
  for (const ref of missing) {
    console.log(`- ${ref}`);
    for (const usage of refs.get(ref).slice(0, 3)) {
      console.log(`  used at ${usage}`);
    }
  }
}

if (wrongCase.length > 0) {
  console.log(`\nCase mismatches (${wrongCase.length}):`);
  for (const row of wrongCase) {
    console.log(`- expected ${row.expected} but found ${row.actual}`);
  }
}

if (missing.length === 0 && wrongCase.length === 0) {
  console.log('\nOK: all image references exist in public/ with matching case.');
  process.exit(0);
}

process.exit(1);
