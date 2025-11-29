"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

// react-page-flip doesn't like SSR, so we load it only on the client
const HTMLFlipBook = dynamic(
  () => import("react-pageflip").then((m) => m.default),
  { ssr: false }
);

const PAGE_WIDTH = 360;   // single page width (portrait)
const PAGE_HEIGHT = 520;  // single page height (portrait)

function StaticBaseSpread() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden items-stretch overflow-hidden rounded-md min-[720px]:flex"
    >
      <div
        className="relative flex h-full w-1/2 items-center justify-center bg-transparent"
        style={{ borderRight: "1px solid rgba(229, 216, 197, 0.8)" }}
      >
        <div className="relative h-[80%] w-[80%]">
          <Image
            src="/bee.svg"
            alt="Bee doodle"
            width={64}
            height={64}
            className="absolute left-20 top-6 w-15 object-contain"
            priority
          />
          <Image
            src="/flowers.svg"
            alt="Flowers doodle"
            width={120}
            height={120}
            className="absolute bottom-14 left-2 w-32 object-contain"
            priority
          />
          <Image
            src="/idea.png"
            alt="Idea doodle"
            width={120}
            height={200}
            className="absolute bottom-10 right-2 w-35 object-contain"
            priority
          />
        </div>
      </div>
      <div className="flex h-full w-1/2 items-center justify-center bg-transparent">
        <Image
          src="/more_coming-letters.png"
          alt="More coming soon"
          width={260}
          height={200}
          className="h-auto w-[70%] object-contain"
          priority
        />
      </div>
    </div>
  );
}

function CoverPage() {
  return (
    <div className="book-page-inner relative h-full w-full overflow-hidden">
      {/* brown paper background */}
      <Image
        src="/brown-paper-text-space.jpg"
        alt=""
        fill
        priority
        sizes={`${PAGE_WIDTH}px`}
        className="object-cover pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* projects letters */}
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src="/projects-letter.png"
          alt="Projects title"
          width={220}
          height={120}
          className="object-contain"
        />
      </div>

      <p className="pointer-events-none absolute bottom-6 w-full text-center text-sm tracking-wide text-[#4a3424]">
        Rosa&apos;s Notebook
      </p>
    </div>
  );
}

function NotesTextPage() {
  return (
    <div className="book-page-inner flex h-full w-full items-center bg-stone-200">
      <div className="px-8">
        <Image 
          src={`/calendar-letters.png`}
          alt="Calendar"
          width={200}
          height={100}
          className="mb-5"
        />
        <p className="w-[90%] text-[11px] leading-relaxed text-neutral-800">
          Notes app using Amazon Web Services to store data.
        </p>
        <p className="mt-4 text-[10px] text-neutral-600">Visit the site published on github pages: </p>
        <a href="https://rosa-ammala.github.io/angular_calendar/" className=" text-[11px] text-neutral-800 underline underline-offset-2 hover:bg-orange-50">https://rosa-ammala.github.io/angular_calendar/</a>
        <p className="mt-4 text-[10px] text-neutral-600">See the source code: </p>
        <a href="https://github.com/rosa-ammala/angular_calendar" className="text-[11px] text-neutral-800 underline underline-offset-2 hover:bg-orange-50">https://github.com/rosa-ammala/angular_calendar</a>
        <p className="mt-4 text-[10px] text-neutral-600">Year: January 2025</p>
        <p className="mt-4 text-[10px] text-neutral-600">Tools:</p>
        <div className="w-[90%] flex flex-row gap-2 mt-2">
          <Image
            src={`/icons/angular.svg`}
            alt="Angular Icon"
            width={32}
            height={32}
            className="w-10"
          />
          <Image
            src={`/icons/typescript.svg`}
            alt="TypeScript Icon"
            width={24}
            height={24}
            className="w-10"
          />
          <Image
            src={`/icons/aws.svg`}
            alt="AWS Icon"
            width={24}
            height={24}
            className="w-10"
          />
        </div>
      </div>
    </div>
  );
}

function NotesImagePage() {
  return (
    <div className="book-page-inner flex h-full w-full items-center justify-center bg-stone-200">
      {/* placeholder for calendar screenshot */}
      {/* <div className="w-[80%] h-[70%] bg-white shadow-[0_8px_16px_rgba(0,0,0,0.12)] border border-neutral-200" /> */}
      <Image 
        src={`/angular-calendar.png`}
        alt="TypeScript Icon"
        width={150}
        height={100}
        className="w-[80%]"
      />
    </div>
  );
}

function CalendarTextPage() {
  return (
    <div className="book-page-inner flex h-full w-full items-center bg-stone-200">
      <div className="px-8">
        <Image 
          src={`/calendar-letters.png`}
          alt="Calendar"
          width={200}
          height={100}
          className="mb-5"
        />
        <p className="w-[90%] text-[11px] leading-relaxed text-neutral-800">
          A simple Angular application utilizing the FullCalendar component. 
          Users can add all-day events or events with specific start and end times. 
          Events can be easily dragged and dropped to different days or times, 
          and the calendar view can be switched as needed. 
          All events are saved to local storage, ensuring they persist even if the browser tab is closed and reopened.
        </p>
        <p className="mt-4 text-[10px] text-neutral-600">Visit the site published on github pages: </p>
        <a href="https://rosa-ammala.github.io/angular_calendar/" className=" text-[11px] text-neutral-800 underline underline-offset-2 hover:bg-orange-50">https://rosa-ammala.github.io/angular_calendar/</a>
        <p className="mt-4 text-[10px] text-neutral-600">See the source code: </p>
        <a href="https://github.com/rosa-ammala/angular_calendar" className="text-[11px] text-neutral-800 underline underline-offset-2 hover:bg-orange-50">https://github.com/rosa-ammala/angular_calendar</a>
        <p className="mt-4 text-[10px] text-neutral-600">Year: January 2025</p>
        <p className="mt-4 text-[10px] text-neutral-600">Tools:</p>
        <div className="w-[90%] flex flex-row gap-2 mt-2">
          <Image
            src={`/icons/angular.svg`}
            alt="Angular Icon"
            width={32}
            height={32}
            className="w-10"
          />
          <Image
            src={`/icons/typescript.svg`}
            alt="TypeScript Icon"
            width={24}
            height={24}
            className="w-10"
          />
        </div>
      </div>
    </div>
  );
}

function CalendarImagePage() {
  return (
    <div className="book-page-inner flex h-full w-full items-center justify-center bg-stone-200">
      {/* placeholder for calendar screenshot */}
      {/* <div className="w-[80%] h-[70%] bg-white shadow-[0_8px_16px_rgba(0,0,0,0.12)] border border-neutral-200" /> */}
      <Image 
        src={`/angular-calendar.png`}
        alt="TypeScript Icon"
        width={150}
        height={100}
        className="w-[80%]"
      />
    </div>
  );
}

function RecipesTextPage() {
  return (
    <div className="book-page-inner flex h-full w-full items-center bg-stone-200">
      <div className="px-8">
        <Image 
          src={`/recipes-letters.png`}
          alt="Recipes"
          width={200}
          height={100}
          className="mb-5"
        />
        {/* <p className="mb-2 text-[10px] tracking-[0.35em] uppercase text-neutral-700">
          Recipes
        </p> */}
        <p className="w-[90%] text-[11px] leading-relaxed text-neutral-800">
          Rosa&apos;s Recipes is a website that I created to learn about the basics of working with WordPress. 
          This included customizing themes, managing plugins, and integrationg widgets.
        </p>
        <p className="mt-4 text-[10px] text-neutral-600">Visit the site published on github pages: </p>
        <a href="https://rosa-ammala.github.io/rosas-recipes/" className=" text-[11px] text-neutral-800 underline underline-offset-2 hover:bg-orange-50">https://rosa-ammala.github.io/rosas-recipes/</a>
        <p className="mt-4 text-[10px] text-neutral-600">See the source code: </p>
        <a href="https://github.com/rosa-ammala/rosas-recipes" className="text-[11px] text-neutral-800 underline underline-offset-2 hover:bg-orange-50">https://github.com/rosa-ammala/rosas-recipes</a>
        <p className="mt-4 text-[10px] text-neutral-600">Year: 2024</p>
        <p className="mt-4 text-[10px] text-neutral-600">Tools:</p>
        <div className="w-[90%] flex flex-row gap-2 mt-2">
          <Image
            src={`/icons/wordpress.svg`}
            alt="WordPress Icon"
            width={32}
            height={32}
            className="w-10"
          />
          <Image
            src={`/icons/php.svg`}
            alt="PHP Icon"
            width={24}
            height={24}
            className="w-10"
          />
        </div>
      </div>
    </div>
  );
}

function RecipesImagePage() {
  return (
    <div className="book-page-inner flex flex-col gap-4 h-full w-full items-center justify-center bg-stone-200">
      {/* placeholder for recipes screenshot */}
      {/* <div className="w-[80%] h-[70%] bg-white shadow-[0_8px_16px_rgba(0,0,0,0.12)] border border-neutral-200" /> */}
      <Image 
        src="/recipes-home.png"
        alt="TypeScript Icon"
        width={150}
        height={100}
        className="max-w-[80%] w-full"
      />
      <Image 
        src="/recipes-category.png"
        alt="TypeScript Icon"
        width={150}
        height={100}
        className="max-w-[80%] w-full"
      />
      <Image 
        src="/recipes-dish.png"
        alt="TypeScript Icon"
        width={150}
        height={100}
        className="max-w-[80%] w-full"
      />
    </div>
  );
}

function BackCoverPage() {
  return (
    <div className="book-page-inner relative h-full w-full overflow-hidden">
      {/* brown paper background */}
      <Image
        src="/brown-paper-text-space.jpg"
        alt=""
        fill
        sizes={`${PAGE_WIDTH}px`}
        className="object-cover pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* sticker */}
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src="/new-ideas-in-process.png"
          alt="New ideas in process sticker"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function ProjectsBook() {
  return (
    <div className="w-full flex justify-center lg:mt-10">
      <div
        className="
          relative
          flex items-center justify-center
          h-[520px]
          w-full
          max-w-[360px]
          min-[720px]:max-w-[720px]
        "
      >
        <StaticBaseSpread />
        <HTMLFlipBook
          width={PAGE_WIDTH}
          height={PAGE_HEIGHT}
          size="fixed"
          maxShadowOpacity={0.5}
          drawShadow={true}
          style={{}}
          startPage={0}
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1536}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={10}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          mobileScrollSupport={true}
          disableFlipByClick={false}
          showCover={true}
          className=""
        >
          {/* 1. Front cover */}
          <div className="book-page shadow-xl">
            <CoverPage />
          </div>

          {/* 2–7 interior pages */}
          {/* <div className="book-page shadow-xl">
            <NotesTextPage />
          </div>

          <div className="book-page shadow-xl">
            <NotesImagePage />
          </div> */}

          <div className="book-page shadow-xl">
            <CalendarTextPage />
          </div>

          <div className="book-page shadow-xl">
            <CalendarImagePage />
          </div>

          <div className="book-page shadow-xl">
            <RecipesTextPage />
          </div>

          <div className="book-page shadow-xl">
            <RecipesImagePage />
          </div>

          {/* 8. Back cover */}
          <div className="book-page shadow-xl">
            <BackCoverPage />
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
