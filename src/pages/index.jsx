import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-stone-100 stroke-stone-400 dark:fill-stone-100/10 dark:stroke-stone-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-stone-400 dark:stroke-stone-500"
      />
    </svg>
  )
}

function QuestionMarkIcon(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M30.249 2.065C18.612 2.789 12.531 9.379 12 21.296h11.739c.147-4.128 2.451-7.214 6.741-7.669c4.211-.447 8.206.556 9.416 3.435c1.307 3.11-1.627 6.724-3.022 8.241c-2.582 2.813-6.776 4.865-8.95 7.9c-2.131 2.974-2.51 6.887-2.674 11.676h10.346c.145-3.062.349-5.995 1.742-7.898c2.266-3.092 5.65-4.541 8.486-6.983c2.709-2.334 5.559-5.147 6.043-9.501C53.32 7.466 42.683 1.289 30.249 2.065"
        className="fill-stone-100 stroke-stone-400 dark:fill-stone-100/10 dark:stroke-stone-500"
      ></path>

      <ellipse
        cx="30.515"
        cy="55.567"
        rx="6.532"
        ry="6.433"
        className="fill-stone-100 stroke-stone-400 dark:fill-stone-100/10 dark:stroke-stone-500"
      ></ellipse>
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-stone-100 stroke-stone-400 dark:fill-stone-100/10 dark:stroke-stone-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-stone-400 dark:stroke-stone-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Event({ event }) {
  return (
    <Card as="section">
      <Card.Title>{event.name}</Card.Title>
      <Card.Eyebrow as="time" dateTime={event.date} decorate>
        {formatDate(event.date)}
      </Card.Eyebrow>
      <Card.Description>{event.location}</Card.Description>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-stone-500 transition group-hover:fill-stone-600 dark:fill-stone-400 dark:group-hover:fill-stone-300" />
    </Link>
  )
}

function Contact() {
  return (
    <section className="rounded-2xl border border-stone-100 p-6 dark:border-stone-700/40">
      <h2 className="flex text-lg font-semibold text-stone-900 dark:text-stone-100">
        <QuestionMarkIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Contact the Board</span>
      </h2>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
        For questions about the neighborhood, requests, or if you'd like to
        check you dues balance,
      </p>
      <Button
        href="mailto:board@rochesterglens.org"
        variant="primary"
        className="group mt-6 w-full"
      >
        Email the Board
      </Button>
    </section>
  )
}

function Newsletter() {
  return (
    // TODO: set up email subscription
    <section
      // action="/thank-you"
      className="rounded-2xl border border-stone-100 p-6 dark:border-stone-700/40"
    >
      <h2 className="flex text-lg font-semibold text-stone-900 dark:text-stone-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
        For current homeowners, join the{' '}
      </p>
      <Link
        href="http://tinyurl.com/rochesterglens"
        className="text-blue-500 no-underline visited:text-purple-600 hover:underline focus:underline active:hover:underline"
      >
        Rochester Glens Facebook group.
      </Link>
      {/* <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-stone-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-stone-800/5 placeholder:text-stone-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-stone-700 dark:bg-lime-700/[0.15] dark:text-stone-200 dark:placeholder:text-stone-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div> */}
    </section>
  )
}

function Members() {
  let members = [
    {
      name: 'Stephanie Quick',
      title: 'President',
      email: 'president@rochesterglens.org',
    },
    {
      name: 'Stephanie Pollock',
      title: 'Vice President',
      email: 'vicepresident@rochesterglens.org',
    },
    {
      name: 'Paul Merlo',
      title: 'Treasurer',
      email: 'treasurer@rochesterglens.org',
    },
    {
      name: 'Ryan Burr',
      title: 'Secretary',
      email: 'secretary@rochesterglens.org',
    },
    {
      name: 'Andrew Kim',
      title: 'General',
      email: 'general1@rochesterglens.org',
    },
    {
      name: 'Bob Hare',
      title: 'General',
      email: 'general2@rochesterglens.org',
    },
    {
      name: 'Aubrey Alquiza',
      title: 'General',
      email: 'general3@rochesterglens.org',
    },
  ]

  return (
    <div className="rounded-2xl border border-stone-100 p-6 dark:border-stone-700/40">
      <h2 className="flex text-lg font-semibold text-stone-900 dark:text-stone-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Board Members</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {members.map((member, i) => (
          <li key={i} className="flex gap-4">
            {/* <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-stone-800/5 ring-1 ring-stone-900/5 dark:border dark:border-stone-700/50 dark:bg-lime-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div> */}
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Member</dt>
              <dd className="w-full flex-none text-sm font-medium text-stone-900 dark:text-stone-100">
                {member.name}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-stone-500 dark:text-stone-400">
                {member.title}
              </dd>
              <dt className="sr-only">Email</dt>
              {!!member.email && (
                <dd
                  className="ml-auto text-xs text-stone-400 dark:text-stone-500"
                  aria-label={`${member.title} email address`}
                >
                  <Link
                    href={`mailto:${member.email}`}
                    className="text-blue-500 no-underline visited:text-purple-600 hover:underline focus:underline active:hover:underline"
                  >
                    {member.email}
                  </Link>
                </dd>
              )}
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-lime-100 dark:bg-lime-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const annualEvents = [
    {
      name: 'Annual All Homeowners Meeting',
      date: '2023-03-07T19:00:00-05:00',
      location: 'Rochester Hills City Hall (auditorium)',
    },
    // {
    //   name: 'Garage Sale',
    //   date: 'TBD',
    //   time: '',
    //   location: 'Rochester Glens Neighborhood',
    // },
    // {
    //   name: 'Halloween Parade',
    //   date: 'TBD',
    //   time: '',
    //   location: 'Rochester Glens Neighborhood',
    // },
  ]
  return (
    <>
      <Head>
        <title>Rochester Glens</title>
        <meta
          name="description"
          content="Rochester Glens, a deed restricted neighborhood."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-stone-800 dark:text-stone-100 sm:text-5xl">
            Rochester Glens Homeowners Association
          </h1>
          <h2 className="text-large sm:text-large font-bold tracking-tight text-stone-500 dark:text-stone-400">
            Rochester Hills · Oakland County · Michigan · 48307
          </h2>
          <p className="mt-6 text-base text-stone-600 dark:text-stone-400">
            Welcome to the neighborhood. As a current or future homeowner,
            you'll find everything you need here.
          </p>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-12 md:mt-14">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h2 className="flex text-2xl font-semibold text-stone-900 dark:text-stone-100">
              Upcoming Events
            </h2>
            {annualEvents.map((event) => (
              <Event key={event.name} event={event} />
            ))}
            {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Contact />
            <Newsletter />
            <Members />
          </div>
        </div>
      </Container>
    </>
  )
}

// export async function getStaticProps() {
//   if (process.env.NODE_ENV === 'production') {
//     await generateRssFeed()
//   }
//   return {
//     props: {
//       articles: (await getAllArticles())
//         .slice(0, 4)
//         .map(({ component, ...meta }) => meta),
//     },
//   }
// }
