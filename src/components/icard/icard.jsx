import React, { useRef } from "react";
import profpic from "../nonlocal/profpic.png";
import favicon from "../layout/favicon.ico";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
function PDFComponent(props) {
    return (
      <div>
        <section
            className="cred"
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div class="card my-3" style={{ width: "18rem" }}>
              <img src={profpic} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 className="card-title">Student Details</h5>
                <p
                  class="card-text"
                  style={{ fontWeight: "bold", fontFamily: "monospace",backgroundImage:{favicon} }}
                >
                  Name:{props.name} <br />
                  Roll:{props.roll} <br />
                  Branch:{props.branch} <br />
                  Sem:{props.sem} <br />
                </p>
                
              </div>
              
            </div>
          </section>
      </div>
    );
  }
  
function exportPDF() {
    html2canvas(document.querySelector('#pdf-component')).then(canvas => {
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 1000, 100);
      pdf.save('my-pdf.pdf');
    });
  }

export default function Icard(props) {
  const pdfRef = useRef();

  function handlePrint() {
    const pdf = pdfRef.current.toBlob();
    const url = URL.createObjectURL(pdf);
    window.open(url);
  }

  return (
    <div>
      <button onClick={exportPDF}>Export to PDF</button>
      <div id="pdf-component">
        <PDFComponent props = {props}/>
      </div>
    </div>
  );
}
