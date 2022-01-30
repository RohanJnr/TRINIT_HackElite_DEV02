export default function OrganizationNavbar() {
    let current = "Projects"
    return (
        <nav class="flex items-center justify-between flex-wrap bg-slate-100 p-6 border rounded">
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-grey-800 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                <a href="#responsive-header" class={(current == "Projects"?"bg-gray-800 text-white":"text-gray-800") + " block mt-2 lg:inline-block lg:mt-0  hover:bg-gray-800 hover:text-white py-2 px-4 rounded-full mx-3"}>
                    Projects
                </a>
                <a href="#responsive-header" class={(current == "Roles"?"bg-gray-800 text-white":"text-gray-800") + " block mt-2 lg:inline-block lg:mt-0  hover:bg-gray-800 hover:text-white py-2 px-4 rounded-full mx-3"}>
                    Roles
                </a>
                <a href="#responsive-header" class={(current == "Members"?"bg-gray-800 text-white":"text-gray-800") + " block mt-2 lg:inline-block lg:mt-0  hover:bg-gray-800 hover:text-white py-2 px-4 rounded-full mx-3"}>
                    Members
                </a>
                </div>
                <div>
                <a href="#responsive-header" class="block mt-2 lg:inline-block lg:mt-0 text-gray-800 hover:bg-gray-800 hover:text-white py-2 px-4 rounded-full mx-3">
                    Settings
                </a>
                <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-800 border-gray-800 hover:border-transparent hover:text-white hover:bg-gray-800 mt-4 lg:mt-0">New Project</a>
                </div>
            </div>
            </nav>
    )
}