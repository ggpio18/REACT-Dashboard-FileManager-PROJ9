import React from 'react'

const Home = () => {
  return (
    <>
         <div className="min-h-screen flex flex-col bg-zinc-900 text-white">
          <div className="flex flex-1">
            
            <aside className="w-64 bg-zinc-800 p-4">
              <nav className="space-y-2">
                <h2 className="text-zinc-400">NAVIGATIONS</h2>
                <a href="#" className="block py-2 px-4 rounded bg-zinc-700">Dashboards</a>
                <a href="#" className="block py-2 px-4 rounded">Layouts</a>
                <a href="#" className="block py-2 px-4 rounded">Mailbox</a>
                <a href="#" className="block py-2 px-4 rounded">Ecommerce</a>
                <h2 className="text-zinc-400 mt-4">APPS</h2>
                <a href="#" className="block py-2 px-4 rounded">Calendar</a>
                <a href="#" className="block py-2 px-4 rounded">Messenger</a>
                <a href="#" className="block py-2 px-4 rounded">Contacts</a>
                <a href="#" className="block py-2 px-4 rounded bg-purple-600">File Manager</a>
                <a href="#" className="block py-2 px-4 rounded">To-Do</a>
                <a href="#" className="block py-2 px-4 rounded">News Feed</a>
                <h2 className="text-zinc-400 mt-4">PAGES</h2>
                <a href="#" className="block py-2 px-4 rounded">Invoices</a>
                <a href="#" className="block py-2 px-4 rounded">Events</a>
                <a href="#" className="block py-2 px-4 rounded">404 Page</a>
                <a href="#" className="block py-2 px-4 rounded">Projects</a>
                <a href="#" className="block py-2 px-4 rounded">Coming Soon</a>
                <a href="#" className="block py-2 px-4 rounded">Profile</a>
                <a href="#" className="block py-2 px-4 rounded">Logout</a>
              </nav>
            </aside>
            
            <main className="flex-1 p-6">
              <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl">Welcome</h1>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-semibold">Ingradia Nutirisha</p>
                  </div>
                  <img className="w-10 h-10 rounded-full" src="https://placehold.co/100x100" alt="User Avatar"/>
                </div>
              </header>
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-zinc-800 p-4 rounded">
                  <h2 className="text-lg font-semibold">Files Storage (70%)</h2>
                  <div className="h-2 bg-zinc-700 rounded mt-2 overflow-hidden">
                    <div className="h-full bg-pink-500 width: 70%;"></div>
                  </div>
                  <p className="mt-2">7TB of 10TB</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded">
                  <h2 className="text-lg font-semibold">Documents</h2>
                  <p className="text-2xl font-bold">2480</p>
                  <p className="text-sm text-zinc-400">154 GB Upload</p>
                  <p className="text-sm text-zinc-400">448 GB Download</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded">
                  <h2 className="text-lg font-semibold">Images</h2>
                  <p className="text-2xl font-bold">62,450</p>
                  <p className="text-sm text-zinc-400">175 GB Upload</p>
                  <p className="text-sm text-zinc-400">256 GB Download</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded">
                  <h2 className="text-lg font-semibold">Videos</h2>
                  <p className="text-2xl font-bold">125</p>
                  <p className="text-sm text-zinc-400">58 GB Upload</p>
                  <p className="text-sm text-zinc-400">146 GB Download</p>
                </div>
              </section>
              <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-zinc-800 p-4 rounded">
                  <h2 className="text-lg font-semibold">Hospital Survey</h2>
                  <div className="mt-4">
                    <canvas id="chart"></canvas>
                  </div>
                </div>
                <div className="bg-zinc-800 p-4 rounded flex items-center">
                  <img className="w-16 h-16 rounded-full mr-4" src="https://placehold.co/100x100" alt="User Avatar"/>
                  <div>
                    <p className="font-semibold">Inverness McKenzie</p>
                    <p className="text-sm text-zinc-400">info@newsac.in</p>
                    <p className="text-sm text-zinc-400">+91 987 654 4324</p>
                    <button className="mt-2 bg-pink-500 text-white py-1 px-4 rounded">Book Appointment</button>
                  </div>
                </div>
                <div className="bg-zinc-800 p-4 rounded">
                  <h2 className="text-lg font-semibold">Total Revenue</h2>
                  <p className="text-2xl font-bold">75%</p>
                  <p className="text-sm text-zinc-400">Revenue today</p>
                </div>
              </section>
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-zinc-800 p-4 rounded">
                  <h2 className="text-lg font-semibold">Documents (2480)</h2>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-zinc-700 p-2 rounded text-center">
                      <img src="https://placehold.co/50x50" alt="PDF Icon" className="mx-auto mb-2"/>
                      <p className="text-sm">Lesson 01.pdf</p>
                    </div>
                    <div className="bg-zinc-700 p-2 rounded text-center">
                      <img src="https://placehold.co/50x50" alt="PDF Icon" className="mx-auto mb-2"/>
                      <p className="text-sm">Statistic.pdf</p>
                    </div>
                    <div className="bg-zinc-700 p-2 rounded text-center">
                      <img src="https://placehold.co/50x50" alt="PDF Icon" className="mx-auto mb-2"/>
                      <p className="text-sm">Lesson 02.pdf</p>
                    </div>
                    <div className="bg-zinc-700 p-2 rounded text-center">
                      <img src="https://placehold.co/50x50" alt="PDF Icon" className="mx-auto mb-2"/>
                      <p className="text-sm">Icons.pdf</p>
                    </div>
                  </div>
                  <button className="mt-4 bg-purple-600 text-white py-1 px-4 rounded w-full">Show all</button>
                </div>
                <div className="bg-zinc-800 p-4 rounded">
                  <h2 className="text-lg font-semibold">Videos (125)</h2>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-zinc-700 p-2 rounded text-center">
                      <img src="https://placehold.co/50x50" alt="MP4 Icon" className="mx-auto mb-2"/>
                      <p className="text-sm">Collector.mp4</p>
                    </div>
                    <div className="bg-zinc-700 p-2 rounded text-center">
                      <img src="https://placehold.co/50x50" alt="MP4 Icon" className="mx-auto mb-2"/>
                      <p className="text-sm">Clip.mp4</p>
                    </div>
                  </div>
                  <button className="mt-4 bg-purple-600 text-white py-1 px-4 rounded w-full">Show all</button>
                </div>
                <div className="bg-zinc-800 p-4 rounded">
                  <h2 className="text-lg font-semibold">Audios (750)</h2>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-zinc-700 p-2 rounded text-center">
                      <img src="https://placehold.co/50x50" alt="MP3 Icon" className="mx-auto mb-2"/>
                      <p className="text-sm">Intro song.mp3</p>
                    </div>
                    <div className="bg-zinc-700 p-2 rounded text-center">
                      <img src="https://placehold.co/50x50" alt="MP3 Icon" className="mx-auto mb-2"/>
                      <p className="text-sm">Theme.mp3</p>
                    </div>
                  </div>
                  <button className="mt-4 bg-purple-600 text-white py-1 px-4 rounded w-full">Show all</button>
                </div>
                <div className="bg-zinc-800 p-4 rounded">
                  <h2 className="text-lg font-semibold">Images (62,450)</h2>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-zinc-700 p-2 rounded text-center">
                      <img src="https://placehold.co/50x50" alt="JPG Icon" className="mx-auto mb-2"/>
                      <p className="text-sm">Pexels.jpg</p>
                    </div>
                    <div className="bg-zinc-700 p-2 rounded text-center">
                      <img src="https://placehold.co/50x50" alt="JPG Icon" className="mx-auto mb-2"/>
                      <p className="text-sm">Dribbble.jpg</p>
                    </div>
                  </div>
                  <button className="mt-4 bg-purple-600 text-white py-1 px-4 rounded w-full">Show all</button>
                </div>
              </section>
            </main>
          </div>
        </div>
    </>
  )
}

export default Home