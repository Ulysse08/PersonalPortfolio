'use client'
import React from 'react'
import type { ImageProps } from '@relume_io/relume-ui'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

type Props = {
  heading: string
  children: React.ReactNode
  image: ImageProps
}

export type DigitalKornerProps = React.ComponentPropsWithoutRef<'section'> &
  Props

export const DigitalKorner = (props: DigitalKornerProps) => {
  const { heading, children, image } = {
    ...DigitalKornerDefaults,
    ...props,
  } as Props

  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
    )
  }, [])

  return (
    <section ref={sectionRef} className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto w-full max-w-lg items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <div className="prose mb-6 md:mb-8 lg:mb-10">
              <h3>Overview</h3>
              <p>
                As a Digital Marketing Intern at Digital Korner, I was
                responsible for managing various aspects of the company’s
                digital presence. My role involved planning and executing
                marketing campaigns, managing social media accounts, maintaining
                the company website and blog, editing tutorial videos, and
                handling customer support and backlog management. This
                internship provided me with a comprehensive understanding of
                digital marketing strategies and the technical skills needed to
                implement them effectively.
              </p>
            </div>
            <img
              src={image.src}
              className="w-full object-cover "
              alt={image.alt}
            />
          </div>

          <div className="prose">{children}</div>
        </div>
      </div>
    </section>
  )
}

export const DigitalKornerDefaults: DigitalKornerProps = {
  heading: 'Digital Marketing Intern - Digital Korner',
  children: (
    <>
      <h3>Responsibilities</h3>
      <ul>
        <li>
          <strong>Managed Marketing Campaigns</strong>
          <ul>
            <li>
              <strong>Context:</strong> To increase engagement and reach,
              Digital Korner needed comprehensive email marketing campaigns
              targeting potential and existing customers.
            </li>
            <li>
              <strong>Actions:</strong> I was tasked with creating targeted
              email lists based on customer segmentation. I designed visually
              appealing email templates, wrote compelling copy, and set up
              automated email workflows. Throughout the campaigns, I monitored
              performance metrics such as open rates, click-through rates, and
              conversions to adjust strategies in real-time.
            </li>
            <li>
              <strong>Results:</strong> The campaigns led to a 15% increase in
              open rates and a 10% increase in click-through rates,
              significantly enhancing customer engagement and generating more
              leads for the company.
            </li>
          </ul>
        </li>
        <li>
          <strong>Social Media Management</strong>
          <ul>
            <li>
              <strong>Context:</strong> Social media platforms were critical for
              brand awareness and customer engagement. The goal was to boost the
              company's presence on LinkedIn and Twitter.
            </li>
            <li>
              <strong>Actions:</strong> I developed a content calendar and
              scheduled posts to ensure a consistent online presence. I created
              engaging content tailored to each platform, including articles,
              infographics, and promotional materials. Additionally, I responded
              to follower interactions and tracked engagement metrics to
              identify what resonated most with the audience.
            </li>
            <li>
              <strong>Results:</strong> These efforts resulted in a 10% increase
              in LinkedIn followers and a 15% increase in Twitter followers.
              Traffic from these platforms increased by 40% and 35%
              respectively, demonstrating the effectiveness of our social media
              strategy.
            </li>
          </ul>
        </li>
        <li>
          <strong>Website and Blog Management</strong>
          <ul>
            <li>
              <strong>Context:</strong> The company's website needed regular
              updates to stay relevant and engaging, while the blog required
              high-quality content to improve SEO.
            </li>
            <li>
              <strong>Actions:</strong> I managed the website content, ensuring
              it was up-to-date with the latest company news and offerings. I
              optimized the site for SEO by implementing best practices such as
              keyword optimization and meta tags. For the blog, I researched and
              wrote articles on industry trends, company updates, and product
              features.
            </li>
            <li>
              <strong>Results:</strong> These activities led to increased
              website traffic and improved search engine rankings, making it
              easier for potential customers to find and engage with our
              content.
            </li>
          </ul>
        </li>
        <li>
          <strong>Video Editing</strong>
          <ul>
            <li>
              <strong>Context:</strong> To reduce the number of customer support
              tickets, we needed to provide more self-help resources in the form
              of tutorial videos.
            </li>
            <li>
              <strong>Actions:</strong> I used professional video editing
              software to create high-quality tutorial videos. This included
              scripting, recording, editing, and publishing the videos on the
              company’s YouTube channel. The tutorials covered various topics,
              from basic product usage to advanced features.
            </li>
            <li>
              <strong>Results:</strong> The videos were well-received by
              customers, leading to a significant reduction in support tickets.
              By providing these resources, we empowered customers to
              troubleshoot issues on their own, which improved their overall
              experience.
            </li>
          </ul>
        </li>
        <li>
          <strong>Customer Support and Backlog Management</strong>
          <ul>
            <li>
              <strong>Context:</strong> Efficiently handling customer queries
              and managing the backlog of tasks were crucial for maintaining
              customer satisfaction.
            </li>
            <li>
              <strong>Actions:</strong> I addressed customer queries via email
              and the company’s support platform, ensuring timely and accurate
              responses. I also prioritized backlog tasks, coordinating with
              freelance workers to ensure that critical issues were addressed
              promptly.
            </li>
            <li>
              <strong>Results:</strong> This approach improved customer
              satisfaction by reducing response times and ensuring that support
              issues were resolved efficiently. It also streamlined our
              workflow, allowing us to manage the backlog more effectively.
            </li>
          </ul>
        </li>
      </ul>
      <h3>Achievements</h3>
      <ul>
        <li>
          <strong>Social Media Metrics</strong>
          <ul>
            <li>LinkedIn: Increased followers by 10%, traffic by 40%.</li>
            <li>Twitter: Increased followers by 15%, traffic by 35%.</li>
            <li>
              YouTube: Reduced customer support tickets by providing more video
              resources.
            </li>
          </ul>
        </li>
        <li>
          <strong>Innovative Strategies</strong>
          <ul>
            <li>
              Developed and implemented strategies that significantly enhanced
              social media engagement.
            </li>
            <li>
              Improved customer satisfaction through detailed documentation and
              video resources.
            </li>
          </ul>
        </li>
        <li>
          <strong>Video Resources</strong>
          <ul>
            <li>
              Created comprehensive tutorial videos that significantly decreased
              customer support needs.
            </li>
            <li>
              Enhanced the company’s YouTube channel with valuable content,
              leading to a more informed customer base.
            </li>
          </ul>
        </li>
      </ul>
      <h3>Challenges and Solutions</h3>
      <p>
        During my internship, I had to quickly acquire video editing skills and
        adapt to new tools and software to produce quality content. This
        involved self-learning through online tutorials and practice.
        Additionally, managing customer support and backlog required developing
        efficient problem-solving techniques to address various issues promptly.
      </p>
      <p>
        I researched and implemented new tools and methods to address the
        challenges I faced, such as utilizing advanced features of video editing
        software to create engaging content. By creating comprehensive resources
        and documentation, I was able to reduce the number of support tickets,
        ensuring that customers had access to the information they needed before
        reaching out for support.
      </p>
      <h3>Image Ideas and Placement</h3>
      <ul>
        <li>
          <strong>Campaign Planning</strong>
          <ul>
            <li>
              <em>Image Placement:</em> Top of the page, under the "Overview"
              section.
            </li>
            <li>
              <em>Description:</em> A marketing campaign plan on a whiteboard or
              digital screen.
            </li>
          </ul>
        </li>
        <li>
          <strong>Social Media Posts</strong>
          <ul>
            <li>
              <em>Image Placement:</em> Next to the "Social Media Management"
              subheading.
            </li>
            <li>
              <em>Description:</em> Screenshots of LinkedIn and Twitter posts
              with high engagement.
            </li>
          </ul>
        </li>
        <li>
          <strong>Video Editing</strong>
          <ul>
            <li>
              <em>Image Placement:</em> Adjacent to the "Video Editing"
              subheading.
            </li>
            <li>
              <em>Description:</em> Screenshot of a video editing software
              interface with a tutorial video in progress.
            </li>
          </ul>
        </li>
        <li>
          <strong>Customer Support</strong>
          <ul>
            <li>
              <em>Image Placement:</em> Near the "Customer Support and Backlog
              Management" subheading.
            </li>
            <li>
              <em>Description:</em> Image showing a support ticket dashboard or
              a satisfied customer testimonial.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  image: {
    src: 'https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg',
    alt: 'Digital Korner Overview Image',
  },
}
