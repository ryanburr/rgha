import glob from 'fast-glob'
import * as path from 'path'

export async function getDocuments(folder) {
  const docsPath = path.join('documents', folder)
  const cwd = path.join(process.cwd(), 'public', docsPath)

  let pdfFilenames = await glob(['*.pdf'], {
    cwd,
  })

  let pdfs = await Promise.all(
    pdfFilenames.map((filename) => ({
      path: path.join('documents', folder, filename),
      date: filename.split('_')[filename.split('_').length - 1].split('.')[0],
    }))
  )
  return pdfs.sort((a, z) => (z.path < a.path ? -1 : 1))
}
