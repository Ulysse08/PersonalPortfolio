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

export type ValeoComponentProps = React.ComponentPropsWithoutRef<'section'> &
  Props

export const ValeoComponentValeo = (props: ValeoComponentProps) => {
  const { heading, children, image } = {
    ...ValeoComponentValeoDefaults,
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
            <div className='prose mb-6 md:mb-8 lg:mb-10'>
            <h3>Overview</h3>
            <p>
              During my internship at Valeo France, I focused on developing and
              implementing an automation tool to streamline the company’s HR
              administrative tasks. This tool significantly improved efficiency
              and accuracy, reducing the workload for the HR team and speeding
              up the corporate card request process. My contributions helped
              streamline workflows and reduce the time and effort required for
              routine tasks.
            </p>
            </div>
            <img
              src={image.src}
              className="w-full object-cover rounded-lg"
              alt={image.alt}
            />
          </div>

          <div className="prose">{children}</div>
        </div>
      </div>
    </section>
  )
}

export const ValeoComponentValeoDefaults: ValeoComponentProps = {
  heading: 'Digitalization Process Intern - Valeo France',
  children: (
    <>
      <h3>Responsibilities</h3>
      <ul>
        <li>
          <strong>Automation Tool Development</strong>
          <ul className="mb-10">
            <li>
              <strong>Context:</strong> Valeo France needed an efficient
              solution for managing corporate card requests, which was a
              time-consuming and error-prone manual process.
            </li>
            <li>
              <strong>Actions:</strong> I designed and implemented a Google
              Script tool to automate the entire corporate card request process.
              This involved creating a system where employees could submit their
              requests online, which would then be automatically routed to their
              supervisors and the HR department for approval. The tool also
              included automated email notifications at each step of the process
              to keep all stakeholders informed.
            </li>
            <li>
              <strong>Results:</strong> The automation tool significantly
              reduced manual effort and errors, improving overall efficiency.
              The HR team could now handle requests more quickly and accurately,
              freeing up time for other important tasks.
            </li>
          </ul>
        </li>
        <li>
          <strong>Process Optimization</strong>
          <ul className="mb-10">
            <li>
              <strong>Context:</strong> The approval workflow for corporate card
              requests needed streamlining to reduce delays and improve
              efficiency.
            </li>
            <li>
              <strong>Actions:</strong> I optimized the process by linking
              approval emails and spreadsheets, ensuring that all data was
              accurately captured and easily accessible. The tool automated the
              routing of requests and approvals, eliminating the need for manual
              follow-ups and reducing processing time.
            </li>
            <li>
              <strong>Results:</strong> This streamlined workflow minimized
              manual interventions and reduced task completion times. It also
              improved transparency and accountability by ensuring that all
              steps of the process were documented and traceable.
            </li>
          </ul>
        </li>
        <li>
          <strong>Tool Specification</strong>
          <ul className="mb-10">
            <li>
              <strong>Context:</strong> The automation tool needed to be
              user-friendly and meet detailed specifications to be effective and
              widely adopted.
            </li>
            <li>
              <strong>Actions:</strong> I collaborated with the HR and IT
              departments to draft detailed specifications for the tool. This
              included defining user requirements, setting performance criteria,
              and ensuring the tool was compliant with company policies and
              regulations.
            </li>
            <li>
              <strong>Results:</strong> The tool was successfully developed and
              met all specifications. It was user-friendly, practical, and
              well-received by the HR team, who appreciated its ease of use and
              the efficiencies it introduced.
            </li>
          </ul>
        </li>
        <li>
          <strong>Data Management</strong>
          <ul className="mb-20">
            <li>
              <strong>Context:</strong> Accurate tracking and archiving of
              requests were essential for compliance and record-keeping.
            </li>
            <li>
              <strong>Actions:</strong> I created and maintained automated
              spreadsheets to track all requests, approvals, and card issuances.
              The tool ensured that all data was accurately captured and stored,
              with automated data entry processes to enhance accuracy and
              reliability.
            </li>
            <li>
              <strong>Results:</strong> The automated data management system
              improved data accuracy and reliability, making it easier for the
              HR team to retrieve and review records as needed. It also ensured
              compliance with company policies and regulatory requirements.
            </li>
          </ul>
        </li>
      </ul>
      <h3>Achievements</h3>
      <ul>
        <li>
          <strong>Efficiency Improvement</strong>
          <ul className="mb-10">
            <li>
              The automation tool I developed significantly reduced the time
              required for administrative tasks, allowing HR personnel to focus
              on strategic activities. The tool automated the entire approval
              process for corporate card requests, from initial submission to
              final issuance, streamlining communication between employees,
              supervisors, HR, and management.
            </li>
          </ul>
        </li>
        <li>
          <strong>Positive Feedback</strong>
          <ul className="mb-10">
            <li>
            <strong>Easy to Use:</strong> Received commendations for creating a practical and
              user-friendly tool.
            </li>
            <li>
            <strong>Efficiency:</strong> Noted for reducing task completion time and improving
              overall efficiency.
            </li>
          </ul>
        </li>
        <li>
          <strong>Innovative Features</strong>
          <ul className="mb-20">
            <li>
            <strong>Automation:</strong> Implemented automated email notifications and
              approvals, reducing manual intervention.
            </li>
            <li>
            <strong>Tracking System:</strong> Developed a system that tracked the entire
              process in linked spreadsheets, ensuring transparency and
              accountability.
            </li>
          </ul>
        </li>
      </ul>
      <h3>Challenges and Solutions</h3>
      <p>
        Learning Google Script on the job was a significant challenge. To
        overcome this, I dedicated extra time to understanding the language and
        its applications. This involved studying documentation, experimenting
        with different coding techniques, and applying what I learned to develop
        the tool. Balancing this learning curve with the demands of the project
        required strong time management and dedication.
      </p>
      <p>
        The tool I developed automated a traditionally manual process, leading
        to substantial time savings. This innovation not only met the immediate
        needs of the HR department but also provided a framework for future
        process enhancements. The success of the tool opened the door for
        additional process improvements, demonstrating the potential of
        automation in streamlining administrative tasks.
      </p>
      <h3>Image Ideas and Placement</h3>
      <ul>
        <li>
          <strong>Automation Tool</strong>
          <ul>
            <li>
              <em>Image Placement:</em> Top of the page, under the "Overview"
              section.
            </li>
            <li>
              <em>Description:</em> Screenshot of the Google Script code or tool
              interface.
            </li>
          </ul>
        </li>
        <li>
          <strong>Approval Process</strong>
          <ul>
            <li>
              <em>Image Placement:</em> Next to the "Process Optimization"
              subheading.
            </li>
            <li>
              <em>Description:</em> Flowchart showing the automated approval
              process.
            </li>
          </ul>
        </li>
        <li>
          <strong>Spreadsheet Management</strong>
          <ul>
            <li>
              <em>Image Placement:</em> Adjacent to the "Data Management"
              subheading.
            </li>
            <li>
              <em>Description:</em> Image of the linked spreadsheet with
              automated entries.
            </li>
          </ul>
        </li>
        <li>
          <strong>Team Feedback</strong>
          <ul>
            <li>
              <em>Image Placement:</em> Near the "Positive Feedback" subheading.
            </li>
            <li>
              <em>Description:</em> Photo of team meetings or feedback sessions.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  image: {
    src: '/images/AppScript.jpg',
    alt: 'Valeo France Overview Image',
  },
}
