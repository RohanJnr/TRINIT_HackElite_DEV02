import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);


export default function Comment(props) {
    return (
        <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
                
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">Author</span>
                <span class="mt-1 text-gray-500 text-sm">Commented on: 12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                <h2 class="text-1xl font-medium text-gray-500 title-font mb-2">Comment</h2>
                <MDEditor
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac risus ut dui scelerisque fringilla. Nunc nulla ligula, scelerisque et ornare sed, scelerisque blandit ligula. Phasellus mollis, est eu laoreet commodo, risus ex semper purus, nec viverra lacus felis vehicula magna. Aliquam quam ligula, rhoncus eu felis ut, tincidunt luctus odio. Praesent purus erat, pretium vel ipsum eu, ornare iaculis nulla. Fusce sagittis ex vitae ante commodo, sit amet mollis tellus consectetur. Nam consequat dapibus pellentesque. Maecenas imperdiet scelerisque enim sit amet rutrum. Vestibulum non erat porttitor, sollicitudin est sed, imperdiet augue. Duis pulvinar vulputate tincidunt. Mauris sit amet sodales nibh. Pellentesque in purus ac erat dictum dictum eget sed metus. Fusce elit velit, porta sit amet massa ut, venenatis viverra nisl. Etiam vel imperdiet est. Sed sit amet metus eget nulla accumsan rutrum."
                preview="preview"
                hideToolbar={true}
                className="my-10"
                />
                </div>
            </div>   
        </div>
    )
}