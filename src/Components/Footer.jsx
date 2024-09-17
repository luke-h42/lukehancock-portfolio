import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-white shadow font-body">
    <div class="w-full mx-auto max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between">
    <ul class="flex flex-wrap items-center mt-3 text-sm  sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Github </a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">LinkedIn</a>
        </li>
    </ul>
      <span class="text-sm sm:text-center">© 2024 Luke Hancock. All Rights Reserved.
    </span>

    </div>
</footer>
  )
}
