<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>E-Commerce Dashboard</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#4F46E5",
              "background-light": "#F3F4F6",
              "background-dark": "#111827",
              "card-light": "#FFFFFF",
              "card-dark": "#1F2937",
              "text-light": "#1F2937",
              "text-dark": "#F3F4F6",
              "text-muted-light": "#6B7280",
              "text-muted-dark": "#9CA3AF",
            },
            fontFamily: {
              display: ["Inter", "sans-serif"],
            },
            borderRadius: {
              DEFAULT: "0.5rem",
            },
          },
        },
      };
    </script>
    <style>
      body {
        font-family: "Inter", sans-serif;
      }
    </style>
  </head>
  <body
    class="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
  >
    <div class="flex h-screen">
      <aside class="w-64 bg-background-dark text-white flex flex-col">
        <div class="p-6 flex items-center space-x-3">
          <div class="bg-primary p-2 rounded-lg">
            <span class="material-icons text-white">insights</span>
          </div>
          <h1 class="text-xl font-bold">Brand</h1>
        </div>
        <nav class="flex-1 px-4 py-2 space-y-2">
          <div class="px-4 py-2 text-gray-400 font-semibold text-sm">Menu</div>
          <a
            class="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700"
            href="#"
          >
            <span class="material-icons">dashboard</span>
            <span>Dashboards</span>
          </a>
          <a
            class="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700"
            href="#"
          >
            <span class="material-icons">web</span>
            <span>Landing Page</span>
          </a>
          <a
            class="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700"
            href="#"
          >
            <span class="material-icons">apps</span>
            <span>APPS</span>
          </a>
          <a
            class="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700"
            href="#"
          >
            <span class="material-icons">chat</span>
            <span>Chat</span>
          </a>
          <a
            class="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700"
            href="#"
          >
            <span class="material-icons">calendar_today</span>
            <span>Calendar</span>
          </a>
          <a
            class="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700"
            href="#"
          >
            <span class="material-icons">email</span>
            <span>Email</span>
          </a>
          <a
            class="flex items-center space-x-3 px-4 py-2 rounded-lg bg-gray-700 text-white"
            href="#"
          >
            <span class="material-icons">shopping_cart</span>
            <span>eCommerce</span>
          </a>
          <a
            class="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700"
            href="#"
          >
            <span class="material-icons">folder</span>
            <span>File Manager</span>
          </a>
          <a
            class="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700"
            href="#"
          >
            <span class="material-icons">work</span>
            <span>Projects</span>
          </a>
        </nav>
        <div class="p-4">
          <button
            class="w-full bg-primary text-white py-3 rounded-lg flex items-center justify-center space-x-2"
          >
            <span class="material-icons">logout</span>
            <span>Log Out</span>
          </button>
        </div>
      </aside>
      <main
        class="flex-1 flex flex-col bg-background-light dark:bg-background-dark"
      >
        <header
          class="flex items-center justify-between p-6 bg-card-light dark:bg-card-dark rounded-tl-3xl"
        >
          <div class="flex-1 max-w-lg">
            <div class="relative">
              <span
                class="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark"
                >search</span
              >
              <input
                class="w-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Search products, orders..."
                type="text"
              />
            </div>
          </div>
          <div class="flex items-center space-x-6">
            <button
              class="bg-primary text-white p-3 rounded-lg -ml-12 hidden md:block"
            >
              <span class="material-icons">store</span>
            </button>
            <span
              class="material-icons text-text-muted-light dark:text-text-muted-dark cursor-pointer"
              >settings</span
            >
            <span
              class="material-icons text-text-muted-light dark:text-text-muted-dark cursor-pointer"
              >notifications</span
            >
          </div>
        </header>
        <div class="flex-1 p-6 overflow-y-auto">
          <div
            class="bg-primary text-white rounded-lg p-6 flex items-center justify-between mb-6"
          >
            <div>
              <h3 class="text-2xl font-bold">Welcome Back Linda Brown</h3>
              <p class="text-indigo-200">
                You have earned 23% more than last month
              </p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="text-right">
                <p class="text-sm">Overall Performance: 49%</p>
                <p class="text-sm text-indigo-300">ID: 02120</p>
              </div>
              <img
                alt="Linda Brown's profile picture"
                class="w-16 h-16 rounded-full border-4 border-white"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlH8zXH2hgzmUPWw9bJXabb-GWIPRGixGPBtsoD_OqBuzmZZ0MrhZyGg3UJv4qYu13zleWshHfoJfacYCpui96B1XVK5MbjNG7rREO_6cxC4E0xDYVJBIK7VqBOc7PUBvheYR327aJ1REIeJ0GOKGYRV1nWr1udYMpkokpZDuhxL5fwLi1Ga594v1QKZHr61D0MjtQOjalB8Qrmos4DVTi1AlsDA8DahIOIwtsWD6Tf5hJI9F6zPZKlE94EcO2dcvm5h2eHf67k7E"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="col-span-1 space-y-6">
              <div class="grid grid-cols-2 gap-6">
                <div
                  class="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow"
                >
                  <p
                    class="text-sm text-text-muted-light dark:text-text-muted-dark"
                  >
                    Expense
                  </p>
                  <p class="text-2xl font-bold">$18,725</p>
                  <p class="text-sm text-green-500">2.87% this month</p>
                  <div class="h-16 w-full mt-2">
                    <svg class="w-full h-full" viewBox="0 0 100 50">
                      <path
                        d="M 0 50 Q 25 10, 50 25 T 100 20"
                        fill="transparent"
                        stroke="#4F46E5"
                        stroke-width="4"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  class="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow"
                >
                  <p
                    class="text-sm text-text-muted-light dark:text-text-muted-dark"
                  >
                    Net Profit
                  </p>
                  <p class="text-2xl font-bold">$245M</p>
                  <p class="text-sm text-green-500">2.87% this month</p>
                  <div class="h-16 w-full mt-2 flex items-end space-x-2">
                    <div class="w-1/4 h-1/2 bg-primary rounded-t-sm"></div>
                    <div class="w-1/4 h-3/4 bg-primary rounded-t-sm"></div>
                    <div class="w-1/4 h-1/3 bg-primary rounded-t-sm"></div>
                    <div class="w-1/4 h-full bg-primary rounded-t-sm"></div>
                  </div>
                </div>
                <div
                  class="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow"
                >
                  <p
                    class="text-sm text-text-muted-light dark:text-text-muted-dark"
                  >
                    Sales Profit
                  </p>
                  <p class="text-2xl font-bold">$25,874</p>
                  <p class="text-sm text-green-500">2.87% this month</p>
                  <div
                    class="mt-2 text-primary flex justify-center items-center h-16"
                  >
                    <span class="material-icons text-6xl">cloud_upload</span>
                  </div>
                </div>
                <div
                  class="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow"
                >
                  <p
                    class="text-sm text-text-muted-light dark:text-text-muted-dark"
                  >
                    Daily Metting
                  </p>
                  <p
                    class="text-sm text-text-muted-light dark:text-text-muted-dark"
                  >
                    10 Person
                  </p>
                  <div class="flex -space-x-2 overflow-hidden my-2">
                    <img
                      alt="User A"
                      class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4ggRJ65e8eo0y69eDtyjwQwFDSFWiP2VUHyg3P1mMA35QoHLF9rkatpZY3dHeEAGmxeP5yW7Vl6pGwFcZIhCofcuvQAwHon9l7QSlfEC6IDIzr_yWL8v0ruDR1jv2vrlIJP20wmAa2V-I-xYeictfxMuTAdaDzVTIuGpqASeOtcNBB4t65_6fNLDMnauha5oN0STxXO1PF4o0FhxWp2dG-2q3BwTqyDRwCvCKvg7YZv5DUHPXzHrUIUCgkddOD6eET_-qmGBpadg"
                    />
                    <img
                      alt="User B"
                      class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTrn24X9BlHYSSsftYSl2j8z_QI-DUmutY5J-l64Kfwm1eJXt3pG0h8UDSLENIij9PI6F1JAAmNpjTVA3QzcX3RoOAE324UBjnQhPlY-TkMYauftkH0pnjkgBHihFuhq5FU__ROQJi_fYTIeHgA4L-16axcLVpH7xza7JrdUDMffcWkIdIyKTWjSGoXtmnIFb48aomUuXhjra1GyhdUKkMvnEXBPzpRTpHqAzKg_xwLhSMUGHgBqqeL1FAVBGMaJrWeexY-uhZDIU"
                    />
                    <img
                      alt="User C"
                      class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQJPuDKlFbSSWrknLg-8WA7hubyH5FZ0BV93SvogxJmrisYUOTkcfVhGKovd2rmYXvpsLhmSIJHTXltRKiSTaPaKkaJ62dd565_8t5S9zRYYGm_smWOioCdu_Ff5P_-Aeqqu-JdD3oKvvHKhXQUGBU9b5X8YbJEsv2RJkpqQ7DcsJKpbVMfb9FpDFEHeaJ4Ks0_mV_L44U2-u5-fsTUvrahgPhrjbuQccImXW9TYwgWbgsvyVmVEdsoGDI0FJ7h1C4NP86vMM2rl8"
                    />
                  </div>
                  <button
                    class="w-full bg-primary text-white py-2 rounded-lg text-sm"
                  >
                    Click to Metting
                  </button>
                </div>
              </div>
              <div
                class="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow"
              >
                <div class="flex justify-between items-center mb-4">
                  <h4 class="font-bold">Top selling Products</h4>
                  <a class="text-primary text-sm" href="#">View All</a>
                </div>
                <div class="space-y-4">
                  <div class="flex items-center space-x-4">
                    <img
                      alt="Cloud storage solution"
                      class="w-12 h-12 rounded-lg object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqvfbxfpn-YxxH2nZNyU_2fdzysZWuGuoCYz4IQrqogbcdcvLSkWXqlXgByYmbA6_11pPcNoP98t-F5h9Cq7j4XFlg7fJ0snj3tnAZcYrX3mPhyXf_J9FCJnyyLCIvZBB_MIuWljD3-2td2Jtz3iGmdxKm9QHzbNYAVpkmhyw0viZzVtn7pBwSoiafv3PeY3rdJRjbkGNwxy3ftBoLMYUczH6poLfJJS9TbE6F6IU5m4Efy1mZPOCI0A-9KqfseEJzvQ7TtAT5gR0"
                    />
                    <div>
                      <p class="font-semibold">Cloud storage solution</p>
                      <p
                        class="text-sm text-text-muted-light dark:text-text-muted-dark"
                      >
                        $1279
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <img
                      alt="Gen virtual reality headset"
                      class="w-12 h-12 rounded-lg object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPhhVbUv01ds94Bwvqb2sJAgbmpl7-mDcc2ytRGDL2eAh89qp9w7bMIasq-MVNqxo4TSDrQp8Y6OGKo8RFjc6yKX73OjGCJGE_ef8hWE99ns-rc36qFdtIrrm5pGsg9u17EPFMwgJF3tSoe4tYeCp46xQMZPfNN5d-FwJbIWcY-d0HW-mQWjEzj9CilsU6J56JJbHy3HZ65Ww3QPMYqaahrJ2pglc5kdEOZgQn2j0t0PVKf54XL07bzEj0hXA_9stlJ6cjY_dRt_E"
                    />
                    <div>
                      <p class="font-semibold">Gen virtual reality headset</p>
                      <p
                        class="text-sm text-text-muted-light dark:text-text-muted-dark"
                      >
                        $500
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <img
                      alt="Gen virtual reality headset"
                      class="w-12 h-12 rounded-lg object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuADgn4FGqIHqlEleOCfWYAQjmeFBgPOrQkFpYIQMm6XlrlSTHBS5pJwtOiiU18sUd8jOwt9Hy4G2r-fhi9yV-aQTJ3u4FJUPcQBSVJJMGfZN31PVkfDcMdp6G2ehVcvz3gAuQd8d8qLjyL-LUn6xyyZUXpLOcycB5tVjdmGzP39yh3xSP_pdsoehkpsh2wlnyIcWmsFEui180z-7GVLLtJX0VOsW4xTIb6A7IoxxbHKTVTQ2bHEZWQQInZzgJZ6wG8Rx8mW6ytr9_Q"
                    />
                    <div>
                      <p class="font-semibold">Gen virtual reality headset</p>
                      <p
                        class="text-sm text-text-muted-light dark:text-text-muted-dark"
                      >
                        $500
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1 lg:col-span-2 space-y-6">
              <div
                class="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow"
              >
                <div class="flex justify-between items-center mb-4">
                  <div>
                    <p class="text-2xl font-bold">
                      8,956.55
                      <span class="text-sm text-green-500 align-middle"
                        >2.87%</span
                      >
                    </p>
                    <p
                      class="text-sm text-text-muted-light dark:text-text-muted-dark"
                    >
                      Orders This Month
                    </p>
                  </div>
                  <button class="bg-primary text-white px-4 py-2 rounded-lg">
                    MARCH
                  </button>
                </div>
                <div
                  class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"
                >
                  <div
                    class="bg-primary h-2 rounded-full"
                    style="width: 65%"
                  ></div>
                </div>
              </div>
              <div
                class="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow"
              >
                <div class="flex justify-between items-center mb-4">
                  <h4 class="font-bold">Product Sales</h4>
                  <div
                    class="flex space-x-4 text-sm text-text-muted-light dark:text-text-muted-dark"
                  >
                    <a class="text-primary font-semibold" href="#">All</a>
                    <a href="#">Weekly</a>
                    <a href="#">Monthly</a>
                    <a href="#">Yearly</a>
                  </div>
                </div>
                <div class="h-64">
                  <div
                    class="h-full flex items-end justify-between px-4"
                    style="font-size: 10px"
                  >
                    <div class="w-1/6 flex items-end justify-center space-x-1">
                      <div
                        class="w-1/2 bg-orange-400 rounded-t-sm"
                        style="height: 40%"
                      ></div>
                      <div
                        class="w-1/2 bg-primary rounded-t-sm"
                        style="height: 60%"
                      ></div>
                    </div>
                    <div class="w-1/6 flex items-end justify-center space-x-1">
                      <div
                        class="w-1/2 bg-orange-400 rounded-t-sm"
                        style="height: 60%"
                      ></div>
                      <div
                        class="w-1/2 bg-primary rounded-t-sm"
                        style="height: 80%"
                      ></div>
                    </div>
                    <div class="w-1/6 flex items-end justify-center space-x-1">
                      <div
                        class="w-1/2 bg-orange-400 rounded-t-sm"
                        style="height: 70%"
                      ></div>
                      <div
                        class="w-1/2 bg-primary rounded-t-sm"
                        style="height: 90%"
                      ></div>
                    </div>
                    <div class="w-1/6 flex items-end justify-center space-x-1">
                      <div
                        class="w-1/2 bg-orange-400 rounded-t-sm"
                        style="height: 50%"
                      ></div>
                      <div
                        class="w-1/2 bg-primary rounded-t-sm"
                        style="height: 75%"
                      ></div>
                    </div>
                    <div class="w-1/6 flex items-end justify-center space-x-1">
                      <div
                        class="w-1/2 bg-orange-400 rounded-t-sm"
                        style="height: 80%"
                      ></div>
                      <div
                        class="w-1/2 bg-primary rounded-t-sm"
                        style="height: 95%"
                      ></div>
                    </div>
                    <div class="w-1/6 flex items-end justify-center space-x-1">
                      <div
                        class="w-1/2 bg-orange-400 rounded-t-sm"
                        style="height: 65%"
                      ></div>
                      <div
                        class="w-1/2 bg-primary rounded-t-sm"
                        style="height: 85%"
                      ></div>
                    </div>
                  </div>
                  <div
                    class="flex justify-between px-4 text-xs text-text-muted-light dark:text-text-muted-dark border-t border-gray-200 dark:border-gray-700 pt-2"
                  >
                    <span>Jan</span><span>Feb</span><span>Mar</span
                    ><span>Apr</span><span>May</span><span>Jun</span>
                  </div>
                </div>
                <div
                  class="flex justify-center items-center space-x-4 mt-4 text-sm"
                >
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 rounded-full bg-orange-400"></div>
                    <span>Net Profit</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 rounded-full bg-primary"></div>
                    <span>Revenue</span>
                  </div>
                </div>
              </div>
              <div
                class="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow overflow-x-auto"
              >
                <table class="w-full text-sm text-left">
                  <thead class="bg-primary/10 dark:bg-primary/20 text-primary">
                    <tr>
                      <th class="p-3">Product code</th>
                      <th class="p-3">Item</th>
                      <th class="p-3">Qty Left</th>
                      <th class="p-3">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <td class="p-3">PEP-1279</td>
                      <td class="p-3">Cloud storage solution</td>
                      <td class="p-3">410</td>
                      <td class="p-3">$78.99</td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <td class="p-3">PEP-1279</td>
                      <td class="p-3">gen virtual reality headset</td>
                      <td class="p-3">851</td>
                      <td class="p-3">$99.99</td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <td class="p-3">PEP-1280</td>
                      <td class="p-3">Ultra-fast wireless charger</td>
                      <td class="p-3">452</td>
                      <td class="p-3">$12.49</td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <td class="p-3">PEP-1281</td>
                      <td class="p-3">AI-powered cybersecurity</td>
                      <td class="p-3">310</td>
                      <td class="p-3">$10.78</td>
                    </tr>
                    <tr>
                      <td class="p-3">PEP-1282</td>
                      <td class="p-3">Smart fitness &amp; health tracker</td>
                      <td class="p-3">12</td>
                      <td class="p-3">$55.99</td>
                    </tr>
                  </tbody>
                </table>
                <div
                  class="flex justify-between items-center mt-4 text-sm text-text-muted-light dark:text-text-muted-dark"
                >
                  <span>Showing 1 - 8 of 12 Results</span>
                  <div class="flex items-center space-x-2">
                    <button
                      class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Prev
                    </button>
                    <button class="px-3 py-1 rounded-md bg-primary text-white">
                      1
                    </button>
                    <button
                      class="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      2
                    </button>
                    <button
                      class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</html>
