import Paragraph from "@editorjs/paragraph";
import Header from '@editorjs/header';
import List from "@editorjs/list";
import Delimiter from "@editorjs/delimiter";
import CheckList from "@editorjs/checklist";
import Image from "@editorjs/image";
import Code from "@editorjs/code";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import Marker from "@editorjs/marker";
import Quote from "@editorjs/quote"

const tools = {
    header: {
        class: Header,
        inlineToolbar: true,
        config: {
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 2,
            placeholder: 'Introduce tu título...'
        },
        shortcut: 'CMD+SHIFT+H'
    },
    paragraph: {
        class: Paragraph,
        inlineToolbar: true,
    },
    list: List,
    delimiter: Delimiter,
    checklist: CheckList,
    image: Image,
    code: Code,
    table: Table,
    warning: Warning,
    marker: Marker,
    quote: Quote
}

export default tools;