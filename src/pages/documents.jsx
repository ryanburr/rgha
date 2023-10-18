import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getDocuments } from '@/lib/getDocuments'

const importantDocs = [
  {
    name: 'Bylaws',
    description:
      'Rules and guidelines around how the neighborhood is governed.',
    link: {
      href: '/documents/Rochester_Glens_Bylaws.pdf',
      label: 'View PDF',
    },
  },
  {
    name: 'Deed Restrictions',
    description:
      'Because we are a deed restricted neighborhood, there are a few limitations on how you can use your property.',
    link: {
      href: '/documents/Rochester_Glens_Deed_Restrictions.pdf',
      label: 'View PDF',
    },
  },
]

export default function Documents({
  annual_minutes = [],
  board_minutes = [],
  newsletters = [],
}) {
  return (
    <>
      <Head>
        <title>Documents - Rochester Glens</title>
        <meta
          name="description"
          content="Historical documents for the neighborhood."
        />
      </Head>
      <SimpleLayout title="Historical documents for the neighborhood." intro="">
        <h2 className="mb-6 flex text-2xl font-semibold text-stone-900 dark:text-stone-100">
          Important Documents
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {importantDocs.map((doc) => (
            <Card as="li" key={doc.name}>
              <h2 className="text-base font-semibold text-stone-800 dark:text-stone-100">
                {doc.name}
              </h2>
              <Card.Description>{doc.description}</Card.Description>
              <Card.Cta>
                <Link
                  href={doc.link.href}
                  className="text-blue-500 no-underline visited:text-purple-600 hover:underline focus:underline active:hover:underline"
                >
                  {doc.link.label}
                </Link>
              </Card.Cta>
            </Card>
          ))}
        </ul>
        <h2 className="mt-8 flex text-2xl font-semibold text-stone-900 dark:text-stone-100">
          Newsletters
        </h2>
        <ul
          role="list"
          className="mt-6 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {newsletters.map((doc) => (
            <Card as="li" key={doc.date}>
              <Card.Eyebrow as="time" dateTime={doc.date} decorate>
                <Link
                  href={doc.path}
                  className="text-blue-500 no-underline visited:text-purple-600 hover:underline focus:underline active:hover:underline"
                >
                  {formatDate(doc.date)}
                </Link>
              </Card.Eyebrow>
            </Card>
          ))}
        </ul>
        <h2 className="mt-8 flex text-2xl font-semibold text-stone-900 dark:text-stone-100">
          Annual Meeting Minutes
        </h2>
        <ul
          role="list"
          className="mt-6 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {annual_minutes.map((doc) => (
            <Card as="li" key={doc.date}>
              <Card.Eyebrow as="time" dateTime={doc.date} decorate>
                <Link
                  href={doc.path}
                  className="text-blue-500 no-underline visited:text-purple-600 hover:underline focus:underline active:hover:underline"
                >
                  {formatDate(doc.date)}
                </Link>
              </Card.Eyebrow>
            </Card>
          ))}
        </ul>
        <h2 className="mt-8 flex text-2xl font-semibold text-stone-900 dark:text-stone-100">
          Board Meeting Minutes
        </h2>
        <ul
          role="list"
          className="mt-6 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {board_minutes.map((doc) => (
            <Card as="li" key={doc.date}>
              <Card.Eyebrow as="time" dateTime={doc.date} decorate>
                <Link
                  href={doc.path}
                  className="text-blue-500 no-underline visited:text-purple-600 hover:underline focus:underline active:hover:underline"
                >
                  {formatDate(doc.date)}
                </Link>
              </Card.Eyebrow>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  // if (process.env.NODE_ENV === 'production') {
  //   await generateRssFeed()
  // }
  return {
    props: {
      newsletters: await getDocuments('newsletters'),
      annual_minutes: await getDocuments('annual_minutes'),
      board_minutes: await getDocuments('board_minutes'),
    },
  }
}
