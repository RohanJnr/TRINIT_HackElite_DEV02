import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Comment from "../../../../components/issues/comment"
import Tag from "../../../../components/issues/tag"

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);


let comments = [1, 2, 3]
let tags = ["tag1", "tag2", "tag3", "tag4"]

export default function Issue() {
    const [value, setValue] = useState("Add a comment.");
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className="something">
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-100">
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-gray-700">Author</span>
                        <span class="mt-1 text-gray-500 text-sm">Opened on: 12 Jun 2019</span>
                        </div>
                        <div class="md:flex-grow">
                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Issue Title</h2>
                        <MDEditor
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac risus ut dui scelerisque fringilla. Nunc nulla ligula, scelerisque et ornare sed, scelerisque blandit ligula. Phasellus mollis, est eu laoreet commodo, risus ex semper purus, nec viverra lacus felis vehicula magna. Aliquam quam ligula, rhoncus eu felis ut, tincidunt luctus odio. Praesent purus erat, pretium vel ipsum eu, ornare iaculis nulla. Fusce sagittis ex vitae ante commodo, sit amet mollis tellus consectetur. Nam consequat dapibus pellentesque. Maecenas imperdiet scelerisque enim sit amet rutrum. Vestibulum non erat porttitor, sollicitudin est sed, imperdiet augue. Duis pulvinar vulputate tincidunt. Mauris sit amet sodales nibh. Pellentesque in purus ac erat dictum dictum eget sed metus. Fusce elit velit, porta sit amet massa ut, venenatis viverra nisl. Etiam vel imperdiet est. Sed sit amet metus eget nulla accumsan rutrum."
                        preview="preview"
                        hideToolbar={true}
                        className="my-10"
                        />
                        </div>
                    </div>   
                    </div>
                </div>
                {comments.map(comment => {
                    return <Comment />
                })}
                <div className="mt-6">
                
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">Add Comment</label>
                <MDEditor
                value={value}
                onChange={setValue}
                preview="edit"
                className="border-2 my-6"
                />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add comment
                </button>
                </div>
                <div className="mt-6">
                <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Close Issue
                </button>
                <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Assign
                </button>
                </div>
            </section>
            <section className="">
                <h2 class="text-1xl font-medium text-gray-500 title-font mb-2">Tags</h2>
                {tags.map(tag => {
                    return <Tag tag={tag} />
                })}
                <div class="relative inline-block text-left">
                <div>
                    <button
                     onClick={()=>setDropdown(!dropdown)}
                     type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Add Tag
                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    </button>
                </div>

                {/* <!--
                    Dropdown menu, show/hide based on menu state.

                    Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                --> */}
                {dropdown ? (
                <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                    <button class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Tag 1</button>
                    <button class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Tag 2</button>
                    <button class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Tag 3</button>
                    </div>
                </div>

                ):<></>}
            </div>
            </section>
        </div>
    )
}