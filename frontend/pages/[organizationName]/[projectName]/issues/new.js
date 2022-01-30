import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

function NewIssue() {
    const [value, setValue] = useState("# This is markdown\n**Bold**");

    const handleForm = event => {
        event.preventDefault()
        const title = event.target.title.value
        const description = value
    }
    return (
        <>
        <h1>
            <p class="text-5xl">New Issue</p>
        </h1>
        <form className="my-20" onSubmit={handleForm}>
        <div class="mb-6">
            <label for="title" class="block mb-2 text-mm font-medium text-gray-900">Title</label>
            <input type="text" id="text" name="title" class="outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title" required />
        </div>
        <div className="my-20">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
        <MDEditor
        value={value}
        onChange={setValue}
        />
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>

        </>
    );
}

export default NewIssue;