import React, {useEffect} from 'react'
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import { Calculateheight } from '../Layout';

const defaultText = 'The KendoReact Editor allows your users to edit HTML in a familiar, user-friendly way.The Editor provides the core HTML editing engine, which includes text formatting, hyperlinks, and lists. The component outputs identical HTML across all major browsers, follows accessibility standards, and provides API for content manipulation.'
const {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Subscript,
    Superscript,
    ForeColor,
    BackColor,
    CleanFormatting,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    NumberedList,
    BulletedList,
    Undo,
    Redo,
    FontSize,
    FontName,
    FormatBlock,
    Link,
    Unlink,
    InsertImage,
    ViewHtml,
    InsertTable,
    InsertFile,
    SelectAll,
    Print,
    Pdf,
    AddRowBefore,
    AddRowAfter,
    AddColumnBefore,
    AddColumnAfter,
    DeleteRow,
    DeleteColumn,
    DeleteTable,
    MergeCells,
    SplitCell,
  } = EditorTools;
const RiskReport = () => {
    const ReportNo = [101, 201, 301, 401, 501, 601];

    useEffect(() => {
        debugger;
        Calculateheight();
        function handleResize() { 
         Calculateheight();
        }
        window.addEventListener('resize', handleResize)
      });

  return (
    <>
    <div className="col-lg-auto col-md-12 row col-sm-12 pl-2 pb-1 pt-1">
        <div className="col-lg-3 col-lg-4 col-md-12 col-md-6 col-sm-12 col-xl-3"> 
        <p className='mb-0'>Select Month and Year:</p>
            <DatePicker placeholder="DD/MM/YYYY" /> 
        </div>
        <div className=" col-lg-3 col-lg-4 col-lg-auto col-md-12 col-md-6 col-sm-12 col-xl-3">  
        <p className='mb-0'>Report No.:</p>
            <DropDownList
                
                data={ReportNo}
                defaultValue= "Select Report No."
            />
        </div>
    </div>
      
    <Editor
      tools={[
        [Bold, Italic, Underline],
        [Undo, Redo],
        [Link, Unlink],
        [AlignLeft, AlignCenter, AlignRight],
        [OrderedList, UnorderedList, Indent, Outdent],
      ]}
      contentStyle={{
        height: 300,
      }}
      defaultContent={defaultText}
    />
    </>
  )
}

export default RiskReport;
