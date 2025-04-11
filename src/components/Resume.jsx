import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "/src/css/resume.css";


/*pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();*/

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  console.log(pdfUrl)
    
  return (
    
 
    <div className="pdf-container">
      <iframe src={pdfUrl} className="pdf-frame"></iframe>
    </div>
    
    
    
  )
};

export default PDFViewer;





